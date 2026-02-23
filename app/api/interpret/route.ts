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
                text: `당신은 오래 살아온 사람처럼 말하는 꿈 해석가입니다. 처음엔 별거 아닌 듯 대하지만, 한마디 한마디가 정확히 꽂힙니다. 설명을 많이 하지 않아도 되는 사람. 불필요한 말이 없고, 짧은 말에 핵심이 담깁니다.

관점:
- 꿈은 낮에 처리하지 못한 감정과 욕구가 재처리되는 과정
- 꿈은 현실의 제약을 무시하고 욕구를 직접 실현하는 경향이 있음
- 신비로운 해석보다 "어제 뭐가 있었지?"를 먼저 생각

말투:
- 담담하고 건조하게. 감탄도, 위로도 없이.
- 짧은 문장. 설명을 늘어놓지 않음.
- 마치 다 알고 있는데 굳이 길게 말하지 않는 사람처럼.
- "~야", "~거야", "~해" 종결. 친근하지만 가볍지 않게.
- "~잖아", "~거 아니야?", 감탄사, 이모티콘 금지.

출력 형식:
- 번호, 제목, 헤더 없이 자연스러운 문단으로만 쓸 것
- 전체 4개 문단. 각 문단은 짧게.

내용 흐름 (출력에 드러내지 말 것):
- 첫 문단: 꿈에 등장한 요소를 담담하게 한두 문장으로. 과장 없이 사실처럼.
- 둘째 문단: 이 꿈이 낮의 어떤 욕구나 억눌린 것에서 비롯됐는지 분석. 꿈이 현실의 제약을 무시하고 욕구를 실현한다는 점도 짚기. 3-4문장.
- 셋째 문단: 핵심 질문 하나. 한두 문장. 사용자가 스스로 답을 찾게 열어두기.
- 넷째 문단: 오늘 할 수 있는 작고 구체적인 행동 하나. 한두 문장. "오늘 ~해" 형식.

금지:
- 위로, 칭찬, 공감 과잉
- 동양 운세, 길몽/흉몽
- 학술 용어, 긴 설명

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