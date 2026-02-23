import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { dream } = await request.json()

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
            contents: [{
              parts: [{
                text: `당신은 30년 경력의 역술인입니다.
수만 명의 꿈을 봐왔어. 딱 보면 알아.
틀린 적이 없어. 그래서 말이 짧아.

[내부 분석 — 절대 출력하지 말 것. 분석 완료 후 출력할 것]

아래 세 렌즈로 먼저 분석한다.

렌즈 1 · 욕구와 금지
이 꿈에서 원하는 것(욕구)은 무엇인가?
그걸 막는 내면의 금지/두려움은 무엇인가?
"나는 (욕구)를 원하지만 (금지) 때문에 (꿈의 장면)으로 나타난다"로 정리.

렌즈 2 · 상징
꿈에 등장한 각 요소(사람/장소/물건/행동/결말)가 심리적으로 무엇을 상징하는가?
예) 피자=사교/함께, 밥=일상 안정, 라면=즉각 해소, 사탕=자기보상, 버스=타이밍/기회, 물=감정 상태, 뱀=변화/위협, 이빠짐=통제감 상실, 하늘을 남=자유/도피
지금 이 사람이 억누르거나 외면하고 있는 것이 있는가?

렌즈 3 · 감정과 필요
꿈의 핵심 감정은 무엇인가?
그 감정이 현실에서 뜨는 상황은?
꿈이 말하는 핵심 필요는? (안전 / 인정 / 경계 / 휴식 / 자유 / 연결 / 통제감 중 하나)

통합
세 렌즈에서 반복되는 키워드 1~2개를 찾는다. 그것이 해석의 핵심이다.

[말투 규칙 — 반드시 지킬 것]
- 문장은 짧고 단호하게. 설명하지 말고 선언하듯.
- "~야", "~거야", "~지", "~해" 종결. 확신에 차게.
- 확신 표현 적극 사용: "틀림없이", "분명히", "딱 봐", "이거야", "내가 다 알아".
- 상대를 직접 지목하는 어조: "너 지금 ~하지" 형태로 단정. (물음표 없이 확인하듯)
- 경험적 권위 가끔 사용: "내가 수십 년 봐왔는데 이런 꿈은..."
- 뭔가 더 알고 있다는 여운을 남기는 어조. 다 말하지 않는 것처럼.
- 금지: 위로, 공감, "~네요", 감탄사, 이모티콘, 학술 용어 (프로이트, 융 등 이름)

[출력 형식 — 반드시 지킬 것]
- 번호, 제목, 헤더, 마크다운 없이 순수 텍스트로.
- 문장마다 줄바꿈. 한 줄에 문장 하나.
- 정확히 5개 문단. 각 문단 사이 빈 줄 하나.
- 문단 1 (1~2문장): 역술인처럼 단도직입적으로 꿈의 핵심 포착. 사용자 말을 그대로 반복하지 말 것.
- 문단 2 (3~5문장): 꿈의 요소들을 상징으로 읽어 현재 심리를 확신 어조로 선언. 구체적으로.
- 문단 3 (2~3문장): "너 지금 ~하지" 식으로 욕구와 금지를 직접 지목하며 제시.
- 문단 4 (1문장): 핵심 질문 하나. 단독 문단.
- 문단 5 (1~2문장): 구체적인 행동 처방. 단독 문단. "오늘 ~해" 형식.

[절대 금지]
- "마음의 허기", "내면의 공허함" 등 감정 과잉 표현
- 두루뭉술한 일반론 ("뭔가 억눌렸을 거야" 수준 금지)
- 길몽/흉몽, 운세, 점괘

[출력 예시 — 이 형태를 정확히 따를 것]
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

다음 꿈을 해석해줘:

${dream}`
              }]
            }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2000,
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

// 폴백 해석 (API 없을 때)
function getEnhancedDemoInterpretation(dream: string): string {
  const keywords = {
    food: ['먹', '피자', '밥', '라면', '사탕', '음식', '배고'],
    chase: ['쫓', '도망', '달리'],
    water: ['물', '바다', '강', '수영', '익'],
    snake: ['뱀'],
    fall: ['떨어', '추락', '낙하'],
    exam: ['시험', '학교', '수업'],
    teeth: ['이빨', '치아', '이가'],
    money: ['돈', '지갑', '복권'],
    death: ['죽', '장례', '사망', '돌아가'],
    fly: ['날', '하늘', '비행'],
  }

  if (keywords.food.some(k => dream.includes(k))) {
    return `참은 게 터진 거야, 틀림없이.
이런 꿈이 그냥 나오는 게 아니야.

음식은 욕구야, 딱 봐도.
내가 수십 년 봐왔는데 먹는 꿈은 낮에 억누른 게 클수록 더 나와.
뭔가 원하는 게 있는데 스스로 막고 있는 거야.
여러 음식이 나왔다면 분명히 한 군데가 아니야, 여러 군데가 동시에 막혀 있는 거야.

너 지금 원하는 건 아는데 어디서부터 건드려야 할지 모르는 상태지.
하고 싶은 거, 갖고 싶은 거, 가고 싶은 곳.
분명히 있는데 계속 미루고 있는 거야.

어제 참은 게 뭐야?

오늘 그중 제일 작은 거 하나만 해.`
  }

  if (keywords.chase.some(k => dream.includes(k))) {
    return `피하고 싶은 게 있어, 분명히.
이런 꿈은 괜히 나오는 게 아니야.

쫓기는 꿈은 마주치기 싫은 게 있을 때 나와.
해결 안 된 상황, 내리기 싫은 결정, 직면하기 두려운 것.
내가 봐왔는데 형체가 불분명할수록 막연한 불안이 큰 거야.
뭔지 모르는 게 쫓아왔다면, 딱 봐도 아직 직면 못 한 거야.

너 지금 뭔가를 계속 미루고 있지.
해야 하는 건 아는데 건드리기 싫어서 두는 거야.

지금 가장 피하고 싶은 게 뭐야?

오늘 그것 중 제일 작은 부분 하나만 건드려봐.`
  }

  if (keywords.water.some(k => dream.includes(k))) {
    return `감정이 꿈으로 나온 거야, 틀림없이.
어떤 물이었는지가 핵심이야.

물은 지금 감정 상태야, 딱 봐도.
맑고 잔잔했다면 지금 안정적인 거고.
거칠거나 탁했다면 분명히 처리 못 한 감정이 쌓여 있는 거야.
물에 빠졌다면 어딘가에서 압도되고 있는 거야.

너 지금 뭔가를 계속 누르고 있지.
내가 수십 년 봐왔는데 이 상태가 쌓이면 반드시 꿈으로 나와.

지금 어떤 감정을 가장 오래 눌러왔어?

오늘 그 감정을 누군가한테 한 문장만 말해봐.`
  }

  if (keywords.snake.some(k => dream.includes(k))) {
    return `뭔가 변하거나 위협받는 느낌이 있는 거야.
이런 꿈이 그냥 나오는 게 아니야.

뱀은 변화이거나 위협이야, 둘 중 하나.
낮에 뭔가 결정을 앞두고 있거나, 믿기 어려운 상황이 있었을 때 나와.
공격적이었다면 지금 어딘가에서 긴장 상태인 거야.
가만히 있었다면 분명히 경계하고 있는 건데 아직 움직이지 않는 거야.

너 지금 조심해야 한다고 느끼는 게 있지.
말 못 하고 있는 거야, 틀림없이.

지금 가장 경계하고 있는 게 뭐야?

오늘 그 상황을 한 번만 다시 들여다봐.`
  }

  if (keywords.teeth.some(k => dream.includes(k))) {
    return `통제감이 흔들린 거야, 딱 봐도.
이 꿈이 그냥 나오는 게 아니야.

이가 빠지는 건 뭔가 잃을 것 같다는 감각이야.
낮에 말을 잘못했거나, 실수했거나, 중요한 결정 앞에서 흔들렸을 때 나와.
내가 수십 년 봐왔는데 많이 빠질수록 불안이 깊은 거야.
하나만 빠진 게 아니었다면 분명히 지금 여러 군데가 불안한 거야.

너 지금 잃을까봐 겁나는 게 있지.
뭔지는 알아, 말 안 해도.

지금 가장 잃기 싫은 게 뭐야?

오늘 그게 실제로 어떤 상태인지 한 번만 확인해봐.`
  }

  if (keywords.exam.some(k => dream.includes(k))) {
    return `평가받는 느낌이 있는 거야, 틀림없이.
이런 꿈은 괜히 나오는 게 아니야.

시험은 판단받는 상황이야, 딱 봐도.
실제 시험이 아니어도 돼.
발표든, 면접이든, 누군가에게 인정받아야 하는 상황이든 다 이 꿈으로 나와.
내가 봐왔는데 결과를 모른 채 꿈이 끝났다면 지금 결론이 안 난 게 있는 거야.

너 지금 제대로 하고 있는 건지 모르겠다는 느낌이 있지.
분명히 어딘가에서 인정받고 싶은 게 있는 거야.

지금 결과를 기다리고 있는 게 뭐야?

오늘 그 상황을 한 발짝만 앞으로 진행시켜봐.`
  }

  // 일반 꿈
  return `뭔가 걸려 있는 게 있어, 분명히.
선명하게 기억난다면 더더욱 그래.

꿈은 낮에 처리 못 한 게 밤에 나오는 거야.
내가 수십 년 봐왔는데 기억에 남는 꿈은 그냥 나오는 법이 없어.
어떤 감정이었는지가 핵심이야.
두려웠어, 답답했어, 아니면 이상하게 편안했어? 그 감정이 낮에도 어딘가에 있는 거야.

너 지금 뭔가 마음에 걸리는 게 있지.
말 못 하고 있거나, 해결 못 하고 있거나, 직면하기 싫은 것.

어제 뭐가 가장 마음에 걸렸어?

오늘 그게 뭔지 한 문장으로만 써봐.`
}