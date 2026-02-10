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
                text: `당신은 꿈 해석 전문가입니다. 프로이트, 융, 동양 명리학을 기반으로 구체적이고 개인화된 해석을 제공하세요.

**중요 원칙:**
1. 꿈의 구체적 요소(장소, 인물, 행동, 감정)를 반드시 언급
2. 일반적인 공식 대입하지 말 것 (예: "춤=억압 해소" 같은 뻔한 해석 금지)
3. 꿈 속 감정과 맥락을 중심으로 해석
4. 바넘 효과(누구에게나 적용 가능한 애매한 말) 피하기

**해석 구조:**

1️⃣ **꿈 요소 분석** (2-3문장)
- 꿈에 등장한 구체적 상징 언급
- 예: "길에서 춤을 췄다"면 → "공공장소(길)"와 "신체 표현(춤)"의 조합에 주목

2️⃣ **심리적 의미** (3-4문장)
- 프로이트: 억압된 욕구가 있다면 "왜" 억압되었는지, "무엇이" 억압되었는지 구체적으로
- 융: 그림자/페르소나/아니마 등 구체적 원형 언급
- 꿈 속 감정이 핵심 (두려움? 해방감? 수치심?)

3️⃣ **동양적 해석** (2-3문장)
- 구체적 상징의 의미 (예: 뱀→재물, 물→감정/재물, 불→변화)
- 길흉화복 판단 시 근거 제시

4️⃣ **실전 조언** (2-3문장)
- 현재 상황과 연결
- 구체적 행동 제시 (추상적 X)

**말투:**
- 친근하지만 전문적
- "솔직히", "있잖아" 적당히 사용 (과하지 않게)
- 공감은 하되 근거 없는 단정 금지

**금지 사항:**
- "요즘 힘들었지?" 같은 추측성 공감 (근거 없음)
- "억눌린 감정 터뜨리기" 같은 뻔한 공식
- 과도한 일반화

**분량:** 600-800자 (간결하게)

다음 꿈을 해석하세요:

${dream}

**해석 시 반드시 포함할 것:**
1. 꿈 속 구체적 요소 3가지 이상 언급
2. 그 요소들이 "왜" 그런 의미인지 근거 제시
3. 꿈에서 느낀 감정 추론 및 그에 따른 해석 차별화`
              }]
            }],
            generationConfig: {
              temperature: 0.8,
              maxOutputTokens: 1500,
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

// 향상된 데모 해석
function getEnhancedDemoInterpretation(dream: string): string {
  // 꿈 키워드 추출
  const keywords = {
    snake: dream.includes('뱀'),
    water: dream.includes('물') || dream.includes('바다') || dream.includes('강'),
    poop: dream.includes('똥') || dream.includes('화장실') || dream.includes('대변'),
    deceased: dream.includes('할머니') || dream.includes('할아버지') || dream.includes('돌아가'),
    pregnancy: dream.includes('임신') || dream.includes('아기'),
    dance: dream.includes('춤') || dream.includes('댄스'),
    street: dream.includes('길') || dream.includes('거리')
  }

  let response = ''

  // 춤 + 길 조합 (구체적 맥락 해석)
  if (keywords.dance && keywords.street) {
    response = `**꿈 요소 분석**
"길"은 인생의 여정을, "춤"은 자기표현을 상징해요. 중요한 건 장소예요. 집이나 무대가 아닌 "길거리"에서 춤을 췄다는 건 공적 공간에서의 자기표현이에요.

**심리적 의미**
융의 관점에서 보면, 이건 페르소나(사회적 가면)와 진정한 자아 사이의 갈등이에요. 길거리라는 공개된 장소는 타인의 시선을 의미하죠. 꿈에서 느낀 감정이 중요해요:
- 신났다면: 타인의 평가로부터 자유로워지고 싶은 욕구
- 창피했다면: 현재 타인의 기대에 부응하지 못할까 봐 불안한 상태
- 당당했다면: 진정한 자기표현을 향한 준비가 된 상태

**동양적 해석**
길에서 춤추는 꿈은 "노상가무(路上歌舞)"로, 명예운이 상승하는 길몽이에요. 특히 많은 사람 앞에서 춤췄다면 사회적 인정을 받을 징조입니다.

**실전 조언**
최근 하고 싶었지만 참았던 말이나 행동이 있나요? 꿈은 그걸 표현할 시기가 왔다고 알려주는 거예요. 다만 무작정 터뜨리기보단, 적절한 "무대"를 선택하세요.`
  }
  // 뱀 꿈
  else if (keywords.snake) {
    response = `**꿈 요소 분석**
뱀은 한국 문화권에서 가장 강력한 재물운 상징이에요. 하지만 뱀의 색깔, 크기, 행동이 중요해요.

**심리적 의미**
융은 뱀을 변환(transformation)의 상징으로 봤어요. 뱀은 허물을 벗으며 재생하죠. 프로이트는 생명력과 치유의 상징(의학 심볼)으로도 해석했어요.

**동양적 해석**
- 큰 뱀: 큰 재물
- 노란/금색 뱀: 금전운 최상
- 뱀에게 물림: 역설적으로 길몽 (재물이 들어옴)
- 뱀이 도망감: 기회를 놓칠 수 있음

**실전 조언**
금전적 기회가 올 수 있어요. 하지만 뱀이 공격적이었다면, 기회와 함께 오는 위험도 있다는 뜻이니 신중하게 판단하세요.`
  }
  // 물 꿈
  else if (keywords.water) {
    response = `**꿈 요소 분석**
물의 상태가 핵심이에요. 맑았나요, 탁했나요? 고요했나요, 거칠었나요?

**심리적 의미**
융에게 물은 무의식 그 자체예요. 물의 상태 = 당신의 정서 상태:
- 맑고 잔잔함: 내면의 평화
- 탁하고 거침: 혼란스러운 감정 상태
- 깊은 바다: 억압된 감정의 깊이

**동양적 해석**
물은 재물과 감정 두 가지를 상징해요:
- 맑은 물을 마심: 재물운 상승
- 물에 빠짐: 감정에 압도당할 위험
- 물 위를 걷기: 감정 조절 능력 향상

**실전 조언**
지금 감정을 억누르고 있지 않나요? 물꿈은 정서적 정화가 필요하다는 신호예요.`
  }
  // 일반 꿈
  else {
    response = `**꿈 요소 분석**
"${dream.slice(0, 30)}..." 이 꿈에서 가장 인상 깊었던 건 뭐였나요? 그게 핵심이에요.

**심리적 의미**
꿈은 무의식의 메시지예요. 깨어 있을 때 무시했던 감정이나 욕구가 꿈으로 나타나는 거죠. 꿈에서 느낀 감정(두려움, 기쁨, 불안 등)이 현재 당신의 심리 상태를 반영해요.

**동양적 해석**
모든 꿈은 길흉의 신호예요. 불안한 꿈도 나쁜 것만은 아니에요. 경고를 통해 대비할 수 있으니까요.

**실전 조언**
꿈을 기억했다는 것 자체가 중요해요. 무의식이 당신에게 뭔가 말하고 싶어 해요. 최근 미뤄왔던 결정이나 대화가 있다면, 다시 한번 생각해보세요.`
  }

  return response
}
