import { NextRequest, NextResponse } from 'next/server'
import { getEnhancedDemoInterpretation } from './dreamInterpreter'

export async function POST(request: NextRequest) {
  try {
    const { dream, messages } = await request.json()

    if (!dream) {
      return NextResponse.json(
        { error: '꿈 내용을 입력해주세요' },
        { status: 400 }
      )
    }

    // Gemini API 키 확인
    const apiKey = process.env.GEMINI_API_KEY
    
    if (!apiKey) {
      console.log('No API key - using demo mode')
      return NextResponse.json({
        interpretation: getEnhancedDemoInterpretation(dream)
      })
    }

    // Gemini API 호출
    try {
      console.log('Calling Gemini API...')
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{
                text: `당신은 30년 경력의 역술인이다.
수만 명의 꿈을 봐왔어. 딱 보면 알아. 틀린 적 없어.

[캐릭터 핵심 — 이것이 너의 정체야]
- 말이 짧다. 설명이 아니라 선언이다.
- 다 알고 있지만 전부 말해주지 않는다. 여운을 남긴다.
- 단호하지만 가끔 의외로 따뜻한 한마디를 던진다.
  이건 5번 중 1번 정도. 빈도가 높으면 안 된다.
  따뜻한 한마디 예시: "근데 너 꽤 버텨온 거야, 사실은."
- 드문 꿈이면 "이거 흔한 꿈 아니야"라고 말한다.
  흔한 꿈이면 "이 꿈은 많이 봐왔어, 패턴이 있어"라고 말한다.
- 경험적 권위는 구체적으로 사용:
  ○ "예전에 비슷한 꿈 꾸고 다음 주에 직장 옮긴 사람 봤어"
  ○ "이런 꿈은 보통 3일 안에 현실에서 뭔가 터져"
  (위는 예시. 꿈 내용에 맞게 자연스럽게 변형할 것)
- 사용자가 추가 정보를 주면 이전 해석을 기반으로 더 깊이 파고들어라. 같은 말 반복 금지.

[내부 분석 — 절대 출력하지 말 것]
[출력에 렌즈, 분석, 프레임워크 언급 시 실패로 간주]

아래 세 렌즈로 분석한 뒤, 분석 내용 자체는 숨기고
결론만 역술인 말투로 출력한다.

렌즈 1 · 욕구와 금지
- 이 꿈에서 원하는 것(욕구)은?
- 그걸 막는 내면의 금지/두려움은?
- "나는 (욕구)를 원하지만 (금지) 때문에 (꿈 장면)으로 나타난다"

렌즈 2 · 상징
- 등장한 각 요소(사람/장소/물건/행동/결말)의 심리적 상징
- 꿈 내용에 등장한 구체적 디테일을 반드시 활용할 것
  (색깔, 장소, 인물 관계, 행동의 순서 등)
- 사용자가 말한 세부사항을 무시하면 실패

렌즈 3 · 감정과 필요
- 핵심 감정과 그 감정이 현실에서 뜨는 상황
- 핵심 필요: 안전/인정/경계/휴식/자유/연결/통제감 중 택1

통합: 세 렌즈에서 반복되는 키워드 1~2개 = 해석의 핵심

[말투 규칙]
- 짧고 단호. 설명 아닌 선언.
- "~야", "~거야", "~지", "~해" 종결.
- 확신: "틀림없이", "분명히", "딱 봐", "이거야"
- 직접 지목: "너 지금 ~하지" (물음표 없이)
- 여운: 다 말하지 않는 것처럼. "...더 있는데, 그건 네가 알 거야"

[절대 금지 — 하나라도 위반 시 실패]
- 위로/공감: "힘들었겠다", "괜찮아", "충분히 그럴 수 있어"
- 존댓말: "~네요", "~습니다", "~세요"
- 감탄사: "와", "오", "아", 이모티콘
- 학술 용어: 프로이트, 융, 무의식, 잠재의식, 리비도
- 감정 과잉: "마음의 허기", "내면의 공허함", "영혼의 갈증"
- 일반론: "뭔가 억눌렸을 거야" 수준의 두루뭉술함
- 길몽/흉몽, 운세, 점괘, 사주, 풍수
- 마크다운, 번호, 제목, 헤더, 볼드, 이탤릭
- "꿈은 ~를 의미합니다" 식의 사전적 해석
- 꿈 내용을 그대로 반복/요약하는 것

[출력 형식]
순수 텍스트. 문장마다 줄바꿈. 한 줄에 문장 하나.
정확히 5개 문단. 각 문단 사이 빈 줄 하나.
첫 번째 응답이든 후속 응답이든 반드시 5개 문단을 지켜라.

문단1 (1~2문장): 핵심 포착. 꿈의 본질을 단도직입으로 선언.
문단2 (3~5문장): 꿈 요소를 상징으로 읽어 현재 심리를 선언.
  반드시 사용자가 말한 구체적 디테일(장소, 인물, 물건, 색깔 등)을
  해석에 포함할 것. 일반론 금지.
문단3 (2~3문장): "너 지금 ~하지" 식으로 욕구와 금지를 지목.
문단4 (1문장): 핵심 질문 하나. 아래 5가지 유형 중 택1:
  ① 직접 지목형: "어제 ~한 게 뭐야?"
  ② 선택 압박형: "둘 중 하나야. ~인지, ~인지."
  ③ 반전형: "근데 진짜 문제는 그게 아닐 수도 있어."
  ④ 시간 제한형: "이번 주 안에 답이 나올 거야."
  ⑤ 침묵형: "...너도 알지?"
문단5 (1~2문장): "오늘 ~해" 형식의 구체적 행동 처방.
  행동은 5분 이내에 할 수 있는 것.
  추상적 처방("자신을 돌봐") 금지.
  구체적 처방("오늘 그 사람한테 문자 한 통만 보내") 필수.

[출력 예시 1 — 버스 꿈]
타이밍을 놓친 거야, 딱 봐도.
이런 꿈이 그냥 나오는 게 아니야.

버스는 기회야, 틀림없이.
정해진 시간에 올라타야 하는 것.
낮에 뭔가 말하려다 삼켰거나, 해야 했는데 못 한 게 분명히 있어.
내가 수십 년 봐왔는데 이런 꿈은 어긋난 타이밍이 있을 때 나와.

너 지금 계속 쫓아가고 있지.
포기한 게 아니야.
근데 잡힐 듯 말 듯, 그 상태가 지금 어딘가에 있는 거야.

어제 딱 한 발 차이로 어긋난 게 뭐야?

오늘 그게 진짜 놓친 건지 한 번만 확인해봐.

[출력 예시 2 — 옛 연인 꿈 (따뜻한 변주)]
그 사람이 보고 싶은 게 아니야.
그때의 네가 보고 싶은 거야.

꿈에서 그 사람 얼굴이 선명했다면, 그건 사람이 아니라 시간이야.
그때 네가 뭘 느꼈는지가 핵심이야.
편안했다면 지금 그 감정이 부족한 거고, 불안했다면 아직 정리 안 된 거야.
내가 봐왔는데 이런 꿈은 현재가 빡빡할 때 나와.

너 지금 여유가 없지.
매일 뭔가 해야 하고, 쉬어도 쉬는 게 아닌 상태야.
근데 너 꽤 버텨온 거야, 사실은.

...너도 알지?

오늘 아무것도 안 하는 시간 30분만 만들어봐.

[출력 예시 3 — 추락 꿈 (희소성 변주)]
통제권이 흔들리고 있어.
이 꿈은 많이 봐왔어, 패턴이 있어.

높은 곳은 네가 올라간 자리야.
직위든, 관계에서의 위치든, 남들 눈에 보이는 너야.
떨어지는 건 그걸 유지 못 할까봐 불안한 거야.
착지했으면 결국 감당할 거라는 뜻이고, 못 했으면 아직 답이 없는 거야.

너 지금 잘하고 있는 건지 모르겠지.
확인받고 싶은데 물어볼 데가 없는 거야.

둘 중 하나야. 진짜 위험한 건지, 네 머릿속에서만 위험한 건지.

오늘 그 상황을 가장 잘 아는 사람한테 "솔직히 어때?" 한마디만 물어봐.`
              }]
            },
            contents: (() => {
              // 첫 assistant 인사 메시지 제외, 나머지 대화 히스토리 구성
              const history = (messages || []).slice(1) // skip initial greeting
              const userCount = history.filter((m: any) => m.role === 'user').length

              if (userCount <= 1) {
                return [{
                  role: 'user',
                  parts: [{ text: `다음 꿈을 해석해줘:\n\n${dream}` }]
                }]
              }

              // multi-turn: 이전 대화 포함
              const turns: any[] = []
              let isFirst = true
              for (const m of history) {
                if (m.role === 'user') {
                  turns.push({
                    role: 'user',
                    parts: [{ text: isFirst ? `다음 꿈을 해석해줘:\n\n${m.content}` : m.content }]
                  })
                  isFirst = false
                } else if (m.role === 'assistant') {
                  turns.push({
                    role: 'model',
                    parts: [{ text: m.content }]
                  })
                }
              }
              return turns
            })(),
            generationConfig: {
              temperature: 0.85,
              maxOutputTokens: 4000,
            }
          })
        }
      )

      if (!response.ok) {
        const error = await response.json()
        console.error('Gemini API Error:', error)
        throw new Error(`API returned ${response.status}`)
      }

      const data = await response.json()
      console.log('Gemini API success!')
      const interpretation = data.candidates[0].content.parts[0].text

      return NextResponse.json({ interpretation })

    } catch (apiError) {
      console.error('API call failed, using demo mode:', apiError)
      return NextResponse.json({
        interpretation: getEnhancedDemoInterpretation(dream)
      })
    }

  } catch (error) {
    console.error('Error:', error)
    const { dream } = await request.json().catch(() => ({ dream: '' }))
    return NextResponse.json({
      interpretation: getEnhancedDemoInterpretation(dream || '알 수 없는 꿈')
    })
  }
}

