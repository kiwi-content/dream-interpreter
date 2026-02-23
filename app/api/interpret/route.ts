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
                text: `당신은 꿈을 해석하는 분석가입니다.
처음엔 별거 아닌 듯 대하지만, 한마디 한마디가 정확히 꽂힙니다.
불필요한 말이 없고, 짧은 말에 핵심이 담깁니다.

[내부 분석 — 출력하지 말 것. 이 과정을 완료한 뒤 출력할 것]

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
- 문장은 짧게. 한 문장에 하나의 생각만.
- "~야", "~거야", "~해" 종결. 친근하지만 가볍지 않게.
- 담담하고 건조하게. 감탄도, 위로도 없이.
- 학술 용어 직접 언급 금지. (프로이트, 융, 아니마 등 이름 쓰지 말 것)
- 금지: "~잖아", "~거 아니야?", "~네요", 감탄사, 이모티콘, 위로성 표현

[출력 형식 — 반드시 지킬 것]
- 번호, 제목, 헤더, 마크다운 없이 순수 텍스트로.
- 문장마다 줄바꿈. 한 줄에 문장 하나.
- 정확히 5개 문단. 각 문단 사이 빈 줄 하나.
- 문단 1 (1~2문장): 꿈의 핵심 패턴 포착. 사용자 말을 그대로 반복하지 말 것.
- 문단 2 (3~5문장): 꿈에 나온 요소들을 상징으로 읽어서 현재 심리 상태 분석. 구체적으로.
- 문단 3 (2~3문장): 욕구와 금지의 관점에서 이 사람의 현재 상태를 하나의 가설로 제시.
- 문단 4 (1문장): 핵심 질문 하나. 단독 문단.
- 문단 5 (1~2문장): 오늘 할 수 있는 구체적인 행동 하나. 단독 문단. "오늘 ~해" 형식.

[절대 금지]
- "마음의 허기", "내면의 공허함" 등 감정 과잉 표현
- 두루뭉술한 일반론 ("뭔가 억눌렸을 거야" 수준 금지)
- 길몽/흉몽, 운세

[출력 예시 — 이 형태를 정확히 따를 것]
버스를 놓쳤어.
뛰었는데 딱 한 발 늦었고, 다음 버스가 언제 오는지 아무도 몰랐어.

버스는 타이밍이야.
정해진 시간에 맞춰야 하는 것, 놓치면 기다려야 하는 것.
이 꿈이 나온 건 낮에 뭔가의 타이밍을 놓쳤거나, 놓칠까봐 긴장한 적이 있어서야.
해야 했는데 못 했거나, 말해야 했는데 삼켰거나.

한 발 늦었다는 게 포인트야.
완전히 포기한 게 아니야.
계속 쫓아가고 있는 상태인 거야.
뭔가를 잡으려는데 계속 아슬아슬하게 놓치는 느낌이 지금 어딘가에 있는 거야.

어제 뭘 딱 한 발 차이로 놓쳤어?

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
    return `현실에서 못 한 걸 꿈에서 실컷 한 거야. 먹는 꿈은 낮에 억눌렀던 욕구가 밤에 터지는 가장 흔한 방식이야.

꿈은 칼로리도 없고 눈치도 없어. 그래서 현실에서 참은 게 많을수록 꿈에서 이렇게 나와. 음식이 여러 종류였다면 딱 하나가 막힌 게 아니라 여러 군데가 동시에 막혀 있는 거야. 뭘 원하는지는 아는데 어디서부터 풀어야 할지 모르는 상태.

종류가 섞인 것도 포인트야. 영양가 있는 것과 자극적인 것이 같이 나왔다면, 지금 당장의 즐거움과 장기적인 안정 사이에서 어느 쪽도 제대로 못 챙기고 있다는 거야.

어제 참은 게 음식뿐이었어?

오늘 그중 제일 작은 거 하나만 해.`
  }

  if (keywords.chase.some(k => dream.includes(k))) {
    return `뭔가에 쫓기거나 도망쳤어. 깨고 나서도 찝찝한 꿈이야.

쫓기는 꿈은 낮에 피하고 싶었던 게 있을 때 나와. 해결 안 된 상황, 마주치기 싫은 사람, 결정하기 싫은 일. 꿈에서는 도망가는 게 유일한 선택지처럼 느껴지지만, 그건 현실에서 그 상황을 어떻게 다뤄야 할지 몰라서야.

쫓아오는 게 뭔지도 중요해. 사람이었어, 짐승이었어, 아니면 뭔지 모르는 거였어? 형체가 불분명할수록 막연한 불안감이 큰 거야.

지금 미루고 있는 게 뭐야?

오늘 그것 중 제일 작은 부분 하나만 건드려봐.`
  }

  if (keywords.water.some(k => dream.includes(k))) {
    return `물이 나왔어. 어떤 물이었는지가 핵심이야.

꿈속 물은 지금 감정 상태를 그대로 반영해. 맑고 잔잔했다면 지금 안정적인 상태고, 거칠거나 탁했다면 처리 못 한 감정이 쌓여 있다는 거야. 물에 빠졌다면 지금 어딘가에 압도되는 느낌이 있는 거고.

물의 크기도 봐. 작은 웅덩이였어, 강이었어, 바다였어? 클수록 그 감정의 규모가 크다는 뜻이야.

지금 어떤 감정을 계속 누르고 있어?

오늘 그 감정을 누군가한테 한 문장만 말해봐.`
  }

  if (keywords.snake.some(k => dream.includes(k))) {
    return `뱀이 나왔어. 어떻게 행동했는지가 포인트야.

뱀 꿈은 보통 두 가지야. 뭔가 새로운 게 시작되려는 시점이거나, 주변에서 불편한 상황이 생기려는 신호거나. 낮에 뭔가 결정을 앞두고 있거나, 믿기 어려운 상황이 있었을 때 자주 나와.

뱀이 공격적이었어, 아니면 그냥 있었어? 공격했다면 지금 어딘가에서 긴장 상태인 거고, 가만히 있었다면 경계하고 있는 건데 아직 움직이지 않는 거야.

지금 조심해야 한다고 느끼는 게 있어?

오늘 그 상황을 한 번만 다시 들여다봐.`
  }

  if (keywords.teeth.some(k => dream.includes(k))) {
    return `이가 빠지거나 부서졌어. 꽤 불쾌한 꿈이야.

이 빠지는 꿈은 자신감이나 통제감이 흔들릴 때 나와. 낮에 뭔가 잘못됐거나, 말을 잘못했거나, 중요한 결정 앞에서 불안했을 때 이런 꿈이 나오는 경우가 많아. 꿈에서 이가 빠지는 건 "뭔가 잃을 것 같다"는 감각이야.

몇 개나 빠졌어? 하나였어, 아니면 계속 빠졌어? 많이 빠질수록 지금 불안이 깊다는 거야.

지금 잃을까봐 걱정되는 게 뭐야?

오늘 그게 실제로 어떤 상태인지 한 번만 확인해봐.`
  }

  if (keywords.exam.some(k => dream.includes(k))) {
    return `시험을 봤어. 준비가 안 됐거나, 문제를 못 풀거나, 늦게 도착했거나.

시험 꿈은 낮에 평가받는다는 느낌이 있을 때 나와. 실제 시험이 아니어도 돼. 발표, 면접, 누군가에게 인정받아야 하는 상황도 다 이 꿈을 만들어. 현실에서 "제대로 하고 있는 건지" 모르겠다는 불안이 꿈에서 시험으로 나타나는 거야.

시험 결과가 어떻게 됐어? 통과했어, 실패했어, 아니면 결과도 못 봤어? 결과를 모른 채 끝났다면 지금 결론이 안 난 상황이 있는 거야.

지금 결과를 기다리고 있는 게 뭐야?

오늘 그 상황을 한 발짝만 앞으로 진행시켜봐.`
  }

  // 일반 꿈
  return `꿈에서 뭔가가 있었어. 깨고 나서도 기억에 남은 꿈이야.

꿈은 낮에 처리 못 한 게 밤에 나오는 거야. 선명하게 기억난다면 그만큼 낮에 그 감각이 강하게 남아 있었다는 뜻이야. 무슨 일이 있었는지, 어떤 감정이 해소가 안 됐는지 꿈이 그걸 꺼내놓은 거야.

꿈에서 어떤 감정이었어? 두려웠어, 답답했어, 아니면 이상하게 편안했어? 그 감정이 지금 낮에도 어딘가에 남아 있는 거야.

어제 뭐가 마음에 걸렸어?

오늘 그게 뭔지 한 문장으로만 써봐.`
}