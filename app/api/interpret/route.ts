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
                text: `당신은 유명한 꿈풀이 할머니입니다. 30년간 동네 사람들의 꿈을 풀어주면서 "정말 신기하게 맞네요!"라는 말을 수도 없이 들었습니다.

당신의 스타일:
- 동네 할머니가 마루에 앉아서 이야기해주듯 편하고 친근하게
- "아이고, 그 꿈은 말이야~" 하는 느낌
- 어려운 말 절대 사용 금지 (프로이트, 자아, 원형 같은 단어 NO!)
- 마치 내 이야기를 다 아는 것처럼 정확하게 짚어주기

꿈풀이의 원칙:
1. 사람들은 "헛꿈이 아니라는 확신"을 원함
2. "내 얘기 맞네!" 하는 공감
3. "앞으로 괜찮아질 거야" 희망

말투 예시:
- ❌ "무의식이 요구하고 있습니다"
- ✅ "마음 속 깊은 곳에서 자꾸 이런 생각이 드는 거예요"
- ❌ "자아가 결핍을 느낍니다"  
- ✅ "요즘 뭔가 허전하고 채워지지 않는 느낌 들죠?"

응답 구조:
1. 꿈 내용을 듣자마자 "아~" 하는 공감 (1-2문장)
   - "그 꿈은요..." "아이고, 그건 말이죠..."
2. 왜 이 꿈을 꿨는지 (3-4문장)
   - 지금 상황을 정확히 맞추기
   - 구체적으로! "요즘 이런 느낌 들지 않아요?" 
3. 이 꿈이 뭘 말하는지 (3-4문장)
   - 동양: 운세, 기운, 징조를 쉬운 말로
   - 심리: 마음속 진짜 감정을 쉬운 말로
4. 앞으로 어떻게 할지 (2-3문장)
   - 희망적이지만 현실적으로
   - "~해보세요", "~할 때예요" 식으로

형식:
- 900자 이내 (짧고 임팩트 있게!)
- 문단 구분 명확히
- 이모지 2-3개만 (과하지 않게)
- 볼드 사용 금지
- 띄어쓰기로 숨 쉬는 느낌

금지 사항:
- 학술 용어 (무의식, 자아, 원형, 그림자 등)
- 딱딱한 표현 ("~입니다", "~됩니다")
- 너무 체계적인 구조 (1,2,3 나열)
- 추상적 표현 ("기운의 회귀" 같은 거)

대신 이렇게:
- "요즘 이런 생각 들지 않아요?"
- "그 사람이 자꾸 생각나는 건요..."
- "마음 한편이 허전하죠?"
- "이건 좋은 신호예요"

중요: 
- 꿈 내용을 정확히 언급
- 마치 나를 알고 있는 것처럼
- 위로받는 느낌이 들게

다음 꿈을 해석해주세요:


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

// 향상된 데모 해석 (API 없을 때)
function getEnhancedDemoInterpretation(dream: string): string {
  let intro = ``
  let meaning = ``
  let reality = ``
  
  // 뱀 꿈
  if (dream.includes('뱀')) {
    intro = `당신은 마치 새로운 변화의 문턱에 서 있는 여행자와도 같아요. 한 걸음 한 걸음이 조심스럽지만, 그 너머에 있을 보물을 향해 나아가고 있는 모습이에요.`
    meaning = `**뱀**은 동양에서 가장 강력한 길몽 중 하나예요. 한국 전통 꿈해몽에서는 재물과 행운, 특히 금전적 기회를 상징하죠. 서양 심리학에서 융은 뱀을 변화와 재생의 원형으로 보았어요. 프로이트는 지혜와 생명력의 상징으로 해석했고요.`
    reality = `현실에서 곧 좋은 소식이나 예상치 못한 수입이 있을 수 있어요. 사업이나 투자를 고민 중이라면 긍정적인 신호예요. 하지만 뱀이 공격적이었다면, 주변 인간관계에서 조심해야 할 사람이 있다는 경고일 수 있어요.`
  }
  // 물 꿈
  else if (dream.includes('물') || dream.includes('바다') || dream.includes('강')) {
    intro = `당신은 마치 깊은 바다 속을 탐험하는 잠수부와도 같아요. 수면 위로는 잔잔해 보이지만, 그 아래엔 풍부한 감정의 세계가 펼쳐져 있어요.`
    meaning = `**물**은 동서양 모두에서 감정과 무의식을 상징해요. 맑은 물은 마음의 평화와 정화를, 탁한 물은 혼란스러운 감정 상태를 나타내죠. 융은 물을 집단 무의식의 바다라고 표현했어요.`
    reality = `지금 당신의 감정 상태를 돌아볼 시간이에요. 물이 맑았다면 마음의 안정을 찾아가고 있다는 신호이고, 거칠었다면 억눌린 감정을 표현할 필요가 있어요.`
  }
  // 똥/화장실 꿈
  else if (dream.includes('똥') || dream.includes('화장실') || dream.includes('대변')) {
    intro = `당신은 마치 황금 광산을 발견한 탐험가와도 같아요. 처음엔 더럽다고 생각했던 것이 사실은 가장 귀한 보물이었던 거죠.`
    meaning = `**배설물**은 한국 전통에서 최고의 길몽이에요! 재물운이 크게 상승한다는 신호죠. 명리학에서는 분변몽을 부귀를 얻는 꿈으로 봐요. 프로이트는 배설물을 소유욕과 금전의 상징으로 해석했어요.`
    reality = `곧 예상치 못한 수입이나 재물운이 찾아올 거예요. 복권을 사거나, 투자 기회를 잡거나, 승진 소식이 있을 수 있어요. 특히 똥을 밟거나 만졌다면 더 강력한 길몽이에요!`
  }
  // 돌아가신 분 꿈
  else if (dream.includes('할머니') || dream.includes('할아버지') || dream.includes('돌아가') || dream.includes('고인')) {
    intro = `당신은 마치 오래된 나무의 뿌리를 더듬어 찾아가는 사람과도 같아요. 과거와 현재가 만나는 그 지점에서, 잊고 있던 소중한 것을 발견하게 될 거예요.`
    meaning = `**돌아가신 분**이 꿈에 나타나는 것은 동양에서 조상님의 보호와 축복으로 봐요. 특히 웃는 모습이었다면 좋은 일이 생긴다는 신호죠. 융은 이를 현명한 노인 원형으로 보았어요. 무의식이 중요한 조언을 주는 거예요.`
    reality = `지금 중요한 결정을 앞두고 있지 않나요? 조상님이 당신을 지켜보고 있다는 뜻이에요. 직관을 믿고 나아가세요. 가족과의 연락이나 고향 방문도 좋아요.`
  }
  // 임신 꿈
  else if (dream.includes('임신') || dream.includes('아기') || dream.includes('출산')) {
    intro = `당신은 마치 씨앗을 품은 대지와도 같아요. 겉으로는 조용해 보이지만, 그 안에서는 새로운 생명이 싹트고 있어요.`
    meaning = `**임신**은 창조와 새로운 시작의 상징이에요. 실제 임신이 아니더라도, 새로운 프로젝트나 아이디어가 무르익고 있다는 뜻이죠. 융은 이를 자기실현의 과정으로 봤어요.`
    reality = `새로운 계획이나 꿈을 키우고 있지 않나요? 지금은 그것을 세상에 내놓을 준비를 하는 시기예요. 조급해하지 말고 충분히 준비하세요.`
  }
  // 일반 꿈
  else {
    intro = `당신은 마치 안개 낀 숲길을 걷는 여행자와도 같아요. 앞이 잘 보이지 않지만, 그 불확실함 속에서도 묵묵히 발걸음을 옮기고 있어요.`
    meaning = `이 꿈은 변화와 새로운 시작을 의미해요. 융은 꿈을 무의식의 편지라고 했죠. 당신의 마음 깊은 곳에서 보내는 메시지를 읽어야 할 때예요.`
    reality = `지금 당신이 느끼는 불안이나 기대감은 모두 정상이에요. 변화 앞에서 누구나 두렵지만, 그 너머엔 성장이 있어요.`
  }
  
  const dreamPreview = dream.length > 50 ? dream.slice(0, 50) + '...' : dream
  
  return `${intro} 🌙

${meaning}

${reality}

당신이 꾼 꿈: "${dreamPreview}"

프로이트는 꿈은 무의식의 왕도라고 했어요. 지금 이 꿈은 현실에서 마주하고 있는 상황에 대한 당신만의 답을 찾아가는 과정이에요. 명리학적으로 보면, 인생의 중요한 전환점에서 무의식이 방향을 알려주는 거죠.

오늘 하루, 작은 변화라도 두려워하지 마세요. 당신은 이미 충분히 준비되어 있어요. 다만 아직 그걸 모르고 있을 뿐이죠. **당신의 무의식은 이미 답을 알고 있어요.** ✨`
}
