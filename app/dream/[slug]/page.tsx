import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

type DreamEntry = {
  title: string
  description: string
  content: string
}

type DreamCase = {
  title: string
  description: string
}

type DreamConfig = {
  slug: string
  name: string
  keyword: string
  symbol: string
  sensory: string
  focus: string
  actionTip: string
  tradition: string
  caseStudies: [DreamCase, DreamCase, DreamCase, DreamCase]
  relatable: [string, string, string]
}

type FAQItem = {
  question: string
  answer: string
}

const createDescription = (keyword: string) =>
  `${keyword} 꿈해몽을 무료로 자세하게 해석해 드립니다. 상황별 풀이와 심리 분석, 전통 해석까지 한 번에 확인하는 한국어 꿈해몽 가이드입니다. 무료 꿈해몽 키워드도 함께 정리했습니다.`

const buildDreamContent = (config: DreamConfig) => {
  const [case1, case2, case3, case4] = config.caseStudies
  const [relatable1, relatable2, relatable3] = config.relatable

  return `
## ${config.name} 해몽 — 당신의 꿈이 말하는 것

${config.name} 이야기를 꺼내면, 마음 한쪽이 먼저 반응하죠. 어떤 분은 기분 좋은 예감이 들었다고 말하고, 어떤 분은 잠에서 깬 뒤에도 가슴이 두근거렸다고 말해요. 꿈은 늘 정답을 딱 잘라 주지는 않지만, 지금 내 마음이 어디를 향하고 있는지 아주 솔직하게 보여줍니다. 특히 ${config.symbol}의 상징은 일, 관계, 돈, 건강처럼 삶의 중요한 축과 연결될 때가 많습니다.

꿈 장면이 유난히 생생했다면 그 자체가 메시지예요. ${config.sensory} 같은 감각이 또렷하게 남아 있다면, 무의식이 "이 부분은 그냥 지나치지 말아 줘"라고 신호를 보낸 것에 가깝습니다. 그래서 이 꿈은 길몽이냐 흉몽이냐를 먼저 나누기보다, 지금 내 상태를 읽는 안내문처럼 보는 게 훨씬 정확해요.

## 상황별 해석

### ${case1.title}
${case1.description} 이 장면은 보통 내 삶에서 이미 시작된 변화를 몸이 먼저 감지했다는 뜻으로 읽힙니다. 겉으로는 평소와 같아 보여도, 마음속 우선순위가 바뀌는 중일 수 있어요. 최근 들어 "이제는 다르게 해봐야겠다"는 생각이 자주 들었다면 꿈과 현실이 같은 방향을 가리키고 있는 겁니다.

### ${case2.title}
${case2.description} 꿈에서 느낀 감정이 불편했다면, 실제로는 해결을 미뤄 둔 문제가 가까이 와 있다는 의미가 큽니다. 반대로 차분했다면 이미 감당할 힘이 생겼다는 신호로 볼 수 있어요. 핵심은 불안을 없애는 게 아니라, 불안을 다루는 방식이 성숙해지고 있다는 점입니다.

### ${case3.title}
${case3.description} 이 장면은 대인관계나 일의 흐름에서 "선택"이 중요해지는 시기와 자주 맞물립니다. 여러 가능성 앞에서 망설이는 마음이 꿈속에서 상징으로 정리되는 거예요. 요즘 반복해서 비슷한 꿈을 꾼다면, 결정을 미루는 것보다 기준을 먼저 세우는 편이 훨씬 도움이 됩니다.

### ${case4.title}
${case4.description} 무서운 장면처럼 보여도 실제 해석은 의외로 긍정적인 경우가 많습니다. 오래 붙잡고 있던 습관, 관계, 생각을 정리하고 새 리듬으로 넘어가는 문턱일 수 있기 때문이에요. 이럴 때는 거창한 변화보다 생활 리듬 하나를 바로잡는 작은 행동이 운의 흐름을 바꿉니다.

## 심리학적으로 보면

프로이트(Freud)는 꿈을 억눌린 욕망과 불안을 우회적으로 드러내는 통로로 봤습니다. 그래서 ${config.name}은 단순한 상징이 아니라, 내가 말로는 표현하지 못한 ${config.focus}의 감정을 비유적으로 보여주는 장면일 수 있어요. 겉으로는 "괜찮아"라고 말해도 마음은 이미 신호를 보내고 있었던 거죠.

융(Jung)의 관점에서는 꿈이 무의식과 의식을 연결하는 다리입니다. 꿈에 반복되는 이미지가 있다면 그것은 지금 내 삶의 방향을 조정하라는 요청으로 볼 수 있어요. 결국 이 꿈은 나를 겁주려는 경고문이 아니라, 더 나은 균형으로 이동하라는 안내문에 가깝습니다.

## 한국 전통 꿈해몽에서는

한국 전통 꿈해몽에서는 ${config.name}을 개인 운세만이 아니라 집안의 흐름, 대인운, 재물운과 함께 읽었습니다. 같은 꿈이라도 꿈꾼 사람의 처지와 그날의 기운, 꿈속 감정에 따라 풀이가 달라진다고 봤기 때문에 "하나의 정답"보다 "상황에 맞는 해석"을 더 중시했어요. 그래서 전통 해석에서도 결국 중요한 건, 꿈을 꾼 뒤 내가 무엇을 정리하고 무엇을 시작하느냐입니다.

## 이런 분들이 자주 꾸는 꿈이에요

${relatable1} 이런 시기에는 마음이 먼저 변화를 감지해서, 밤에 상징적인 장면으로 보여주는 경우가 많아요.

${relatable2} 낮에는 버틸 수 있어도 잠들면 진짜 감정이 올라오기 때문에, 비슷한 꿈이 반복되기도 합니다.

${relatable3} 그래서 "왜 이런 꿈을 꿨지"라고 자책하기보다, 지금의 나를 이해하는 힌트로 받아들이는 게 훨씬 도움이 됩니다.

## 자주 묻는 질문

Q: ${config.name}은 무조건 길몽인가요?
A: 무조건 한쪽으로 단정하기는 어려워요. 다만 꿈 전체의 분위기와 감정이 안정적이었다면 좋은 흐름으로 해석하는 경우가 많습니다. 불안한 느낌이 강했다면 스트레스 관리가 먼저라는 신호로 받아들이면 됩니다.

Q: 같은 꿈을 반복해서 꾸면 안 좋은 건가요?
A: 반복 꿈은 대개 "아직 정리되지 않은 주제"가 남아 있다는 뜻입니다. 나쁜 징조라기보다 마음이 같은 메시지를 다시 보여주는 과정에 가까워요. 현실에서 작은 행동 하나라도 바꾸면 반복 강도가 줄어드는 경우가 많습니다.

Q: 꿈이 너무 생생하면 예지몽일 가능성이 있나요?
A: 감각이 선명한 꿈이 꼭 예지몽이라는 뜻은 아닙니다. 다만 무의식의 경고나 바람이 강하게 작동하고 있다는 해석은 충분히 가능해요. 특히 ${config.sensory}처럼 촉각이나 색감이 또렷했다면 내 감정 에너지가 높다는 신호로 보시면 됩니다.

Q: 꿈해몽을 믿고 바로 큰 결정을 해도 될까요?
A: 꿈은 방향을 점검하는 참고자료로 쓰는 게 가장 안전합니다. 중요한 결정은 현실 데이터와 일정, 관계 상황을 함께 보고 판단하는 게 좋아요. 꿈이 준 힌트는 "무엇을 먼저 점검할지"를 알려주는 나침반으로 활용해 보세요.

Q: 꿈을 꾼 뒤에 바로 하면 좋은 행동이 있을까요?
A: 아침에 꿈 장면과 감정을 짧게 기록해 두는 것만으로도 해석 정확도가 크게 올라갑니다. 그다음 오늘 하루의 행동 하나를 정해 실행해 보세요. ${config.actionTip}

## 오늘의 한 마디

당신의 꿈은 당신을 불안하게 만들려고 온 게 아니에요. 지금의 마음을 더 잘 돌보고, 더 나은 쪽으로 방향을 조정하라고 다정하게 건네는 신호에 가깝습니다. 오늘은 꿈에서 받은 힌트를 너무 무겁게 들지 말고, 생활 속 작은 선택 하나에 따뜻하게 반영해 보세요.
`.trim()
}

const dreamConfigs: DreamConfig[] = [
  {
    slug: 'snake-dream',
    name: '뱀 나오는 꿈',
    keyword: '뱀 나오는 꿈',
    symbol: '재물과 변화',
    sensory: '뱀의 비늘이 햇빛에 반짝이는 장면',
    focus: '긴장과 기대가 동시에 올라오는 상태',
    actionTip: '오늘은 미뤄 둔 금전 정리나 중요한 연락 하나를 먼저 처리해 보세요.',
    tradition: '재물운과 귀인운의 징조',
    caseStudies: [
      { title: '큰 뱀이 조용히 지나가는 꿈', description: '당장 충돌은 없지만 큰 흐름이 바뀌고 있다는 신호로 해석합니다.' },
      { title: '뱀에게 쫓기는 꿈', description: '회피하던 과제가 가까워졌다는 뜻이 강하고, 마주할 준비가 필요합니다.' },
      { title: '뱀을 잡거나 물리치는 꿈', description: '불안을 통제하고 주도권을 되찾을 가능성이 높다는 장면입니다.' },
      { title: '흰 뱀이나 금빛 뱀이 나오는 꿈', description: '도움받을 인연과 기회가 동시에 들어오는 길몽으로 자주 풀이됩니다.' },
    ],
    relatable: [
      '이직이나 부서 이동을 앞두고 마음이 복잡한 분들이 자주 꿉니다.',
      '돈 문제를 정리해야 하는데 결정을 미루고 있는 분들에게도 자주 나타나요.',
      '인간관계에서 경계를 세워야 하는 시기에 이 꿈이 또렷하게 들어오기도 합니다.',
    ],
  },
  {
    slug: 'teeth-dream',
    name: '이빨 빠지는 꿈',
    keyword: '이빨 빠지는 꿈',
    symbol: '자존감과 관계의 긴장',
    sensory: '입안이 텅 빈 느낌과 차가운 공기',
    focus: '평가받는 상황에서의 압박감',
    actionTip: '오늘 하루는 나를 깎아내리는 말 대신, 스스로 칭찬할 근거를 하나 적어두세요.',
    tradition: '가까운 관계 변화의 징후',
    caseStudies: [
      { title: '앞니가 빠지는 꿈', description: '대인관계와 체면 이슈가 커질 때 자주 등장하는 상징입니다.' },
      { title: '어금니가 빠지는 꿈', description: '가족 또는 오래된 책임 문제를 재정비해야 한다는 신호로 읽습니다.' },
      { title: '피가 함께 나는 꿈', description: '감정 소모가 누적되어 휴식과 경계 설정이 필요하다는 의미가 큽니다.' },
      { title: '빠진 이를 다시 끼우는 꿈', description: '흔들리던 자신감을 회복하고 관계를 복구할 가능성을 시사합니다.' },
    ],
    relatable: [
      '중요한 발표나 면접을 앞둔 분들이 잠에서 자주 놀라 깨곤 해요.',
      '가족 안에서 내가 중간 역할을 오래 맡아온 분들에게도 자주 보입니다.',
      '요즘 외모나 이미지 평가에 민감해진 분들에게 반복되는 경우가 많습니다.',
    ],
  },
  {
    slug: 'chasing-dream',
    name: '쫓기는 꿈',
    keyword: '쫓기는 꿈',
    symbol: '회피와 압박',
    sensory: '숨이 턱 막히고 발이 무거워지는 감각',
    focus: '끝내지 못한 일에 대한 부담',
    actionTip: '오늘은 가장 부담되는 할 일을 20분만 먼저 시작해 보세요.',
    tradition: '피해야 할 갈등의 경고',
    caseStudies: [
      { title: '모르는 사람에게 쫓기는 꿈', description: '원인을 설명하기 어려운 불안이 커졌을 때 나타나기 쉽습니다.' },
      { title: '아는 사람에게 쫓기는 꿈', description: '해당 관계에서 쌓인 감정이나 미해결 대화가 있다는 신호입니다.' },
      { title: '끝없이 계단을 오르며 도망치는 꿈', description: '성과 압박 속에서 휴식 없이 버티는 패턴을 보여줍니다.' },
      { title: '도망치다 멈춰 서는 꿈', description: '문제를 직면할 준비가 시작됐다는 긍정적 변화로 해석합니다.' },
    ],
    relatable: [
      '업무 마감이 겹쳐서 하루 종일 쫓기듯 사는 분들에게 익숙한 꿈입니다.',
      '관계를 끝내야 하나 고민하면서도 말을 못 꺼내는 시기에 자주 나타나요.',
      '해야 할 건 많은데 몸이 지쳐 멈춘 분들에게 무의식이 보내는 신호이기도 해요.',
    ],
  },
  {
    slug: 'money-dream',
    name: '돈 줍는 꿈',
    keyword: '돈 줍는 꿈',
    symbol: '가치와 기회',
    sensory: '손바닥에 지폐의 질감이 생생하게 닿는 느낌',
    focus: '내가 가진 가능성을 다시 평가하려는 마음',
    actionTip: '오늘은 들어온 제안 중 하나를 구체적인 숫자로 검토해 보세요.',
    tradition: '재물운 상승의 대표 길몽',
    caseStudies: [
      { title: '길에서 지폐를 줍는 꿈', description: '현실적인 기회가 예상보다 빠르게 들어올 가능성을 나타냅니다.' },
      { title: '동전을 주머니에 모으는 꿈', description: '작은 성과를 꾸준히 쌓아야 할 시기라는 메시지가 강합니다.' },
      { title: '줍은 돈을 다시 잃는 꿈', description: '기회가 와도 확신 부족으로 놓칠까 걱정하는 심리를 비춥니다.' },
      { title: '누군가와 돈을 나누는 꿈', description: '협업이나 네트워크를 통해 수익 구조가 넓어질 수 있음을 뜻합니다.' },
    ],
    relatable: [
      '수입 구조를 바꾸고 싶은 프리랜서나 자영업자에게 자주 나타나요.',
      '연봉 협상이나 이직 조건을 고민하는 시기에 이 꿈이 또렷해집니다.',
      '내 실력 대비 보상이 아쉽다고 느끼는 분들이 자주 꾸는 꿈이기도 합니다.',
    ],
  },
  {
    slug: 'pregnancy-dream',
    name: '임신하는 꿈',
    keyword: '임신하는 꿈',
    symbol: '탄생과 잠재력',
    sensory: '배를 감싸는 따뜻한 체온과 묵직한 안정감',
    focus: '새 계획을 키워내는 과정에서의 기대와 부담',
    actionTip: '오늘은 머릿속 아이디어를 문서로 옮겨 첫 단계를 눈에 보이게 만들어 보세요.',
    tradition: '새 복이 들어오는 길몽',
    caseStudies: [
      { title: '기쁜 마음으로 임신을 확인하는 꿈', description: '준비해 온 일이 좋은 방향으로 자리를 잡는 흐름을 상징합니다.' },
      { title: '불안한 마음으로 임신하는 꿈', description: '책임이 커질 변화 앞에서 자신을 의심하는 심리가 반영됩니다.' },
      { title: '주변 사람이 임신하는 꿈', description: '내 주변 환경이 성장 모드로 바뀌며 영향을 받는 시기임을 뜻합니다.' },
      { title: '출산 직전까지 가는 꿈', description: '아이디어가 실행 직전 단계까지 성숙했다는 강한 신호로 해석합니다.' },
    ],
    relatable: [
      '새 프로젝트를 시작했지만 확신이 흔들리는 분들이 자주 꿉니다.',
      '결혼이나 이사처럼 삶의 프레임이 바뀌는 시기에 자주 보입니다.',
      '오래 미뤄 둔 계획을 다시 꺼내는 분들에게도 반복적으로 나타나요.',
    ],
  },
  {
    slug: 'water-dream',
    name: '물에 빠지는 꿈',
    keyword: '물에 빠지는 꿈',
    symbol: '감정의 깊이와 정화',
    sensory: '찬물이 목까지 차오르며 숨이 가빠지는 느낌',
    focus: '감정 기복 속에서 균형을 찾으려는 상태',
    actionTip: '오늘은 과한 일정 하나를 줄이고, 몸이 진짜 쉬는 시간을 확보해 보세요.',
    tradition: '감정운과 재물운의 변동',
    caseStudies: [
      { title: '깊은 물에 갑자기 빠지는 꿈', description: '예상 못 한 감정 사건이 생기며 중심이 흔들릴 때 자주 등장합니다.' },
      { title: '맑은 물에서 수영하는 꿈', description: '감정을 다룰 여유가 생기고 관계 회복 가능성이 높아졌다는 뜻입니다.' },
      { title: '흙탕물에 빠지는 꿈', description: '복잡한 소문이나 오해 속에서 피로가 누적되는 상태를 비춥니다.' },
      { title: '빠졌다가 스스로 나오는 꿈', description: '힘들어도 결국 회복 루트를 찾는 회복탄력성이 살아 있음을 보여줍니다.' },
    ],
    relatable: [
      '감정 소모가 큰 인간관계를 오래 버틴 분들이 자주 꾸는 꿈이에요.',
      '회사와 집에서 동시에 역할이 많은 분들에게 반복되는 경향이 있습니다.',
      '요즘 눈물이나 짜증이 늘었다면 이 꿈이 감정 정리를 도와주러 오기도 해요.',
    ],
  },
  {
    slug: 'death-dream',
    name: '죽는 꿈',
    keyword: '죽는 꿈',
    symbol: '끝과 재시작',
    sensory: '장면이 느리게 멈추고 다시 밝아지는 전환감',
    focus: '낡은 패턴을 끊고 싶어 하는 마음',
    actionTip: '오늘은 더 이상 맞지 않는 습관 하나를 정리하고 새 루틴을 작게 시작해 보세요.',
    tradition: '수명장수와 반전운의 길몽',
    caseStudies: [
      { title: '내가 죽는 꿈', description: '정체성이나 생활 방식이 크게 바뀔 전환기를 상징합니다.' },
      { title: '가까운 사람이 죽는 꿈', description: '그 사람 자체보다 관계의 단계가 달라지는 신호일 때가 많습니다.' },
      { title: '죽었다가 다시 살아나는 꿈', description: '막혔던 흐름이 반전될 가능성이 높은 대표적인 회복 상징입니다.' },
      { title: '장례식 장면이 나오는 꿈', description: '오래된 감정을 보내고 정리할 준비가 되었다는 메시지입니다.' },
    ],
    relatable: [
      '이직, 퇴사, 독립처럼 인생 챕터를 바꾸는 분들에게 자주 옵니다.',
      '오래 끌던 관계를 정리하고 싶은데 망설이는 분들에게도 나타나요.',
      '예전 방식으로는 더 버티기 어렵다고 느끼는 시기에 특히 선명해집니다.',
    ],
  },
  {
    slug: 'exam-dream',
    name: '시험 보는 꿈',
    keyword: '시험 보는 꿈',
    symbol: '평가와 성과 압박',
    sensory: '종이 넘기는 소리와 초침 소리가 크게 들리는 긴장감',
    focus: '스스로를 검증받는다고 느끼는 상태',
    actionTip: '오늘은 준비 부족이 두려운 영역을 쪼개서 체크리스트로 정리해 보세요.',
    tradition: '문서운과 관운의 점검',
    caseStudies: [
      { title: '시험장에 늦는 꿈', description: '기회를 놓칠까 하는 초조함이 높을 때 자주 나타납니다.' },
      { title: '공부를 못 하고 시험 보는 꿈', description: '자기효능감이 떨어져 있고 기준이 과도하게 높아진 상태를 보여줍니다.' },
      { title: '문제가 술술 풀리는 꿈', description: '준비가 쌓였고 실전 감각이 살아났다는 긍정 신호일 수 있습니다.' },
      { title: '답안지를 제출 못 하는 꿈', description: '결정 미루기와 완벽주의가 성과를 늦추고 있다는 메시지입니다.' },
    ],
    relatable: [
      '성과평가 시즌에 유독 잠이 얕아지는 직장인에게 자주 나타나요.',
      '새로운 역할을 맡아 "내가 해낼 수 있나" 고민하는 분들이 자주 꿉니다.',
      '완벽하게 준비해야 시작할 수 있다고 믿는 분들에게 반복되는 꿈입니다.',
    ],
  },
  {
    slug: 'ghost-dream',
    name: '귀신 나오는 꿈',
    keyword: '귀신 나오는 꿈',
    symbol: '미해결 감정과 과거의 흔적',
    sensory: '서늘한 공기와 낯선 그림자가 뒤에서 스치는 느낌',
    focus: '끝내지 못한 감정의 재등장',
    actionTip: '오늘은 피했던 대화 주제를 메모로 정리해 보고, 가능한 범위에서 표현해 보세요.',
    tradition: '액운 경계와 제사운 점검',
    caseStudies: [
      { title: '귀신이 멀리서 지켜보는 꿈', description: '바로 터지지는 않지만 정리되지 않은 감정이 남아 있음을 뜻합니다.' },
      { title: '귀신에게 쫓기는 꿈', description: '과거 문제를 회피하는 패턴이 한계에 왔다는 신호로 읽을 수 있습니다.' },
      { title: '귀신과 대화하는 꿈', description: '감정 정리가 시작되어 두려움이 의미로 바뀌는 과정일 수 있습니다.' },
      { title: '무섭지 않은 귀신 꿈', description: '이미 마음이 어느 정도 수용 단계에 들어갔다는 긍정적 변화입니다.' },
    ],
    relatable: [
      '끝난 일인데도 마음에서 자꾸 재생되는 기억이 있는 분들이 자주 꿉니다.',
      '사과받지 못한 관계를 오래 품고 있던 분들에게 반복되곤 해요.',
      '큰 상실을 겪은 뒤 감정을 눌러온 분들에게도 나타나는 꿈입니다.',
    ],
  },
  {
    slug: 'ex-dream',
    name: '전애인 나오는 꿈',
    keyword: '전애인 나오는 꿈',
    symbol: '관계 패턴의 회상',
    sensory: '익숙한 향기나 목소리가 갑자기 또렷해지는 순간',
    focus: '현재 관계에서의 비교와 점검',
    actionTip: '오늘은 과거 상대가 아니라 "그때의 나"를 기준으로 감정 변화를 적어보세요.',
    tradition: '인연운 재정리의 신호',
    caseStudies: [
      { title: '전애인과 다시 만나는 꿈', description: '재회 예고보다 과거 감정 패턴을 점검하는 상징에 가깝습니다.' },
      { title: '전애인과 다투는 꿈', description: '끝나지 않은 감정 문장이 마음속에 남아 있음을 보여줍니다.' },
      { title: '아무 감정 없이 마주치는 꿈', description: '감정 정리가 진행되어 영향력이 줄고 있다는 긍정 신호입니다.' },
      { title: '현재 연인 앞에 전애인이 나타나는 꿈', description: '비교 심리와 불안이 동시에 작동할 때 자주 보이는 장면입니다.' },
    ],
    relatable: [
      '새 연애를 시작했지만 마음이 완전히 안심되지 않는 분들이 자주 꿉니다.',
      '요즘 외로움이 커져 과거의 안전했던 순간을 떠올리는 분들에게도 나와요.',
      '관계에서 같은 갈등을 반복한다고 느끼는 분들에게 특히 선명하게 옵니다.',
    ],
  },
  {
    slug: 'poop-dream',
    name: '똥 나오는 꿈',
    keyword: '똥 나오는 꿈',
    symbol: '배출과 풍요',
    sensory: '끈적한 감촉과 강한 냄새가 유난히 또렷한 장면',
    focus: '쌓인 에너지를 밖으로 내보내려는 움직임',
    actionTip: '오늘은 돈, 일정, 감정 중 하나를 반드시 정리해서 공간을 비워 보세요.',
    tradition: '대표적인 재물 길몽',
    caseStudies: [
      { title: '똥을 밟는 꿈', description: '뜻밖의 기회가 발밑에서 들어오는 재물운 신호로 자주 풀이됩니다.' },
      { title: '손으로 똥을 만지는 꿈', description: '성과와 보상을 직접 다루게 되는 시기가 가까워졌다는 의미입니다.' },
      { title: '화장실을 찾지 못하는 꿈', description: '표현하지 못한 감정과 계획이 막혀 있다는 답답함을 반영합니다.' },
      { title: '화장실이 넘치는 꿈', description: '운의 흐름이 커졌지만 우선순위 정리가 꼭 필요하다는 경고도 포함합니다.' },
    ],
    relatable: [
      '오랫동안 준비한 프로젝트를 세상에 내놓기 직전인 분들이 많이 꿔요.',
      '수입이 정체돼 답답했던 시기를 버티는 분들에게도 자주 나타납니다.',
      '감정을 오래 참다가 이제는 말해야겠다고 느끼는 시기에 선명해져요.',
    ],
  },
  {
    slug: 'fire-dream',
    name: '불 나오는 꿈',
    keyword: '불 나오는 꿈',
    symbol: '정화와 급격한 에너지',
    sensory: '뜨거운 열기와 타닥타닥 타는 소리',
    focus: '강한 욕구와 전환 욕망',
    actionTip: '오늘은 충동적으로 시작하기보다, 우선순위 한 가지만 끝까지 밀어보세요.',
    tradition: '명예운과 재물운의 급상승',
    caseStudies: [
      { title: '집에 불이 나는 꿈', description: '생활 기반이 재정비되는 큰 변화 국면을 암시하는 경우가 많습니다.' },
      { title: '산불이 크게 번지는 꿈', description: '작은 감정이 빠르게 커지는 시기라 대화 방식 점검이 필요합니다.' },
      { title: '불을 끄는 꿈', description: '혼란을 통제하고 문제 해결 주도권을 잡는 긍정 신호입니다.' },
      { title: '불꽃을 바라보는 꿈', description: '새로운 목표 의지가 강해져 실행 타이밍을 찾고 있다는 뜻입니다.' },
    ],
    relatable: [
      '갑자기 의욕이 치솟아 인생 방향을 바꾸고 싶은 분들이 자주 꿉니다.',
      '관계 갈등이 커져 감정 온도가 높은 시기에도 자주 나타나요.',
      '오래 참다가 이제는 "내가 원하는 대로 살겠다"고 결심한 분들에게 옵니다.',
    ],
  },
  {
    slug: 'tiger-dream',
    name: '호랑이 나오는 꿈',
    keyword: '호랑이 나오는 꿈',
    symbol: '권위와 보호',
    sensory: '호랑이 눈빛의 압도감과 발자국 진동',
    focus: '리더십과 두려움의 공존',
    actionTip: '오늘은 물러서던 자리에서 한 번은 분명하게 내 의견을 말해 보세요.',
    tradition: '권세운과 귀인운 상승',
    caseStudies: [
      { title: '호랑이가 나를 지켜보는 꿈', description: '강한 기회가 가까이 있지만 태도가 중요하다는 신호입니다.' },
      { title: '호랑이에게 쫓기는 꿈', description: '권위적 상황에 대한 부담과 도전 회피 심리가 반영됩니다.' },
      { title: '호랑이를 타는 꿈', description: '리더 역할을 맡아 성과를 낼 가능성이 큰 길몽으로 봅니다.' },
      { title: '새끼 호랑이를 보는 꿈', description: '작지만 강한 기회가 시작되는 초기 국면을 의미합니다.' },
    ],
    relatable: [
      '팀장, 리더 역할을 갑자기 맡은 분들이 이 꿈을 자주 꿉니다.',
      '강한 상대와 협상하거나 경쟁하는 시기에 꿈이 또렷해져요.',
      '나를 과소평가해 온 분들이 자신감을 회복할 때도 자주 나타납니다.',
    ],
  },
  {
    slug: 'baby-dream',
    name: '아기 꿈',
    keyword: '아기 꿈',
    symbol: '순수한 시작과 보호 본능',
    sensory: '작은 손의 체온과 부드러운 숨결',
    focus: '새로운 책임을 받아들이는 마음',
    actionTip: '오늘은 새로 시작한 일의 초반 루틴을 더 가볍고 꾸준하게 설계해 보세요.',
    tradition: '새 복과 집안 경사',
    caseStudies: [
      { title: '아기를 안는 꿈', description: '새 기회나 관계를 조심스럽게 키우는 시기임을 보여줍니다.' },
      { title: '아기가 우는 꿈', description: '돌보지 못한 감정이나 미뤄 둔 과제가 도움을 요청하는 신호입니다.' },
      { title: '아기를 잃어버리는 꿈', description: '중요한 가능성을 놓칠까 하는 불안이 커진 상태를 비춥니다.' },
      { title: '아기가 웃는 꿈', description: '현재 방향이 맞고 마음의 안전감이 회복된다는 긍정 메시지입니다.' },
    ],
    relatable: [
      '새로운 일에 도전했지만 확신이 부족한 분들이 자주 꿉니다.',
      '가족 돌봄 책임이 늘어나 마음이 예민한 시기에 자주 나타나요.',
      '내 안의 연약한 부분을 다정하게 돌봐야 할 때 꿈으로 찾아옵니다.',
    ],
  },
  {
    slug: 'wedding-dream',
    name: '결혼하는 꿈',
    keyword: '결혼하는 꿈',
    symbol: '결합과 약속',
    sensory: '드레스 천의 촉감과 환한 조명',
    focus: '관계와 선택에 대한 결심',
    actionTip: '오늘은 관계에서 원하는 기준을 한 문장으로 정리해 보세요.',
    tradition: '인연운과 계약운의 변동',
    caseStudies: [
      { title: '행복한 결혼식을 올리는 꿈', description: '관계나 프로젝트가 안정 단계에 들어갈 가능성을 나타냅니다.' },
      { title: '결혼식이 혼란스러운 꿈', description: '선택 앞에서 확신이 부족한 심리가 강하게 반영됩니다.' },
      { title: '모르는 사람과 결혼하는 꿈', description: '새 환경과 역할을 받아들이는 변화 심리를 의미할 수 있습니다.' },
      { title: '결혼식에 늦는 꿈', description: '중요한 기회를 놓칠까 하는 시간 압박과 불안이 드러납니다.' },
    ],
    relatable: [
      '연애뿐 아니라 파트너십 계약을 앞둔 분들에게도 자주 나타나요.',
      '인생 방향을 정해야 하는 분기점에서 이 꿈을 많이 꿉니다.',
      '누군가와의 약속을 지키는 문제로 고민할 때 선명해지는 꿈이에요.',
    ],
  },
  {
    slug: 'flying-dream',
    name: '하늘을 나는 꿈',
    keyword: '하늘을 나는 꿈',
    symbol: '해방과 확장',
    sensory: '바람이 얼굴을 가르며 지나가는 속도감',
    focus: '제약을 벗어나고 싶은 욕구',
    actionTip: '오늘은 내 가능성을 줄이는 습관 하나를 끊고, 작은 도전을 실행해 보세요.',
    tradition: '상승운과 출세운',
    caseStudies: [
      { title: '높이 안정적으로 나는 꿈', description: '자신감과 통제력이 동시에 올라온 좋은 흐름으로 해석합니다.' },
      { title: '날다가 떨어질까 불안한 꿈', description: '성공 직전의 부담과 실패 공포가 반영될 수 있습니다.' },
      { title: '누군가와 함께 나는 꿈', description: '협업을 통해 성장이 빨라질 가능성을 시사합니다.' },
      { title: '원하는 방향으로 못 나는 꿈', description: '목표는 있지만 실행 구조가 아직 부족하다는 메시지입니다.' },
    ],
    relatable: [
      '답답한 환경에서 벗어나고 싶은 직장인이 자주 꾸는 꿈입니다.',
      '새로운 공부나 도전을 시작한 분들에게 동기 신호로 나타나요.',
      '성장 욕구는 큰데 현실 제약이 많다고 느낄 때 반복되곤 해요.',
    ],
  },
  {
    slug: 'house-dream',
    name: '집 꿈',
    keyword: '집 꿈',
    symbol: '자아와 삶의 기반',
    sensory: '낯익은 방 냄새와 문이 열리는 소리',
    focus: '안정감과 경계의 재설정',
    actionTip: '오늘은 생활 공간 한 구역을 정리해서 마음의 안정 루틴을 만들어 보세요.',
    tradition: '가택운과 가족운',
    caseStudies: [
      { title: '새 집으로 이사하는 꿈', description: '자기 정체성과 생활 패턴이 바뀌는 전환기 신호입니다.' },
      { title: '집이 무너지는 꿈', description: '안정 기반이 흔들리는 불안과 피로가 누적된 상태를 비춥니다.' },
      { title: '집을 청소하는 꿈', description: '감정 정리와 관계 재정비가 잘 진행된다는 긍정 장면입니다.' },
      { title: '낯선 집을 탐색하는 꿈', description: '내 안의 새로운 가능성을 시험해 보는 시기임을 뜻합니다.' },
    ],
    relatable: [
      '이사, 독립, 동거처럼 생활 틀이 바뀌는 분들이 자주 꿉니다.',
      '가정과 일의 균형이 무너졌다고 느끼는 시기에 반복되기도 해요.',
      '내 공간에서조차 쉬지 못한다고 느끼는 분들에게 자주 찾아옵니다.',
    ],
  },
  {
    slug: 'thief-dream',
    name: '도둑 꿈',
    keyword: '도둑 꿈',
    symbol: '경계와 손실 불안',
    sensory: '문손잡이가 흔들리는 소리와 긴장된 숨소리',
    focus: '소중한 것을 지키고 싶은 마음',
    actionTip: '오늘은 계정 보안, 계약 조건, 감정 경계 중 하나를 꼭 점검해 보세요.',
    tradition: '재물 손재수 경계',
    caseStudies: [
      { title: '집에 도둑이 드는 꿈', description: '사생활과 경계가 침범당한다는 불안이 반영됩니다.' },
      { title: '도둑을 잡는 꿈', description: '불안 요소를 통제하고 주도권을 회복하는 긍정 신호입니다.' },
      { title: '도둑에게 물건을 빼앗기는 꿈', description: '에너지 소모가 큰 관계나 환경을 정리해야 한다는 의미가 큽니다.' },
      { title: '도둑이 아무것도 못 훔치고 가는 꿈', description: '걱정은 컸지만 실제 손실은 제한적일 가능성을 보여줍니다.' },
    ],
    relatable: [
      '노력 대비 보상을 빼앗긴다고 느끼는 분들이 자주 꿉니다.',
      '사생활 침해나 과한 간섭에 지친 분들에게 반복적으로 나타나요.',
      '금전, 시간, 감정 자원을 지키고 싶은 시기에 꿈이 선명해집니다.',
    ],
  },
  {
    slug: 'car-accident-dream',
    name: '사고 꿈',
    keyword: '사고 꿈',
    symbol: '통제 상실과 속도 조절',
    sensory: '브레이크가 밀리며 심장이 내려앉는 느낌',
    focus: '지나치게 빠른 삶의 리듬',
    actionTip: '오늘은 일정 속도를 의도적으로 늦추고, 중요한 판단을 한 번 더 검토하세요.',
    tradition: '이동수와 관재수 점검',
    caseStudies: [
      { title: '차 사고를 직접 내는 꿈', description: '내가 감당하는 속도가 한계에 가까워졌다는 경고일 수 있습니다.' },
      { title: '차에 타고 있다가 사고를 당하는 꿈', description: '타인의 결정에 휘둘린다는 무력감이 반영되기 쉽습니다.' },
      { title: '사고 후 무사한 꿈', description: '위기관리 능력이 살아 있고 회복 가능성이 높다는 신호입니다.' },
      { title: '사고 현장을 목격하는 꿈', description: '내 주변의 긴장을 간접적으로 흡수하고 있다는 뜻일 수 있습니다.' },
    ],
    relatable: [
      '하루 일정이 과밀해 늘 시간에 쫓기는 분들이 자주 꿉니다.',
      '중요한 결정을 서둘러야 하는 상황에서 불안이 꿈으로 드러나요.',
      '실수에 대한 두려움이 큰 완벽주의 성향에게 반복되는 꿈입니다.',
    ],
  },
  {
    slug: 'cat-dream',
    name: '고양이 꿈',
    keyword: '고양이 꿈',
    symbol: '직감과 독립성',
    sensory: '부드러운 털결과 조용한 발걸음',
    focus: '거리 조절이 필요한 관계',
    actionTip: '오늘은 내 직감을 무시하지 말고, 불편한 경계는 부드럽게 표현해 보세요.',
    tradition: '여성운과 비밀운',
    caseStudies: [
      { title: '고양이를 쓰다듬는 꿈', description: '정서적 안정과 직감 회복이 진행되는 따뜻한 신호입니다.' },
      { title: '고양이가 도망가는 꿈', description: '붙잡고 싶은 관계나 기회가 멀어진다는 불안이 반영됩니다.' },
      { title: '고양이에게 할퀴이는 꿈', description: '가까운 관계에서 미세한 갈등이 누적되었음을 시사합니다.' },
      { title: '새끼 고양이를 돌보는 꿈', description: '작은 책임을 통해 마음이 성장하는 시기임을 뜻합니다.' },
    ],
    relatable: [
      '혼자 있는 시간이 꼭 필요한 분들에게 이 꿈이 자주 나타나요.',
      '관계에서 거리 두기를 배우는 시기에 유독 선명해집니다.',
      '직감은 좋은데 확신이 부족한 분들에게 방향성을 주는 꿈이에요.',
    ],
  },
  {
    slug: 'dog-dream',
    name: '개 꿈',
    keyword: '개 꿈',
    symbol: '신뢰와 보호',
    sensory: '젖은 코의 촉감과 꼬리 흔드는 소리',
    focus: '관계 안정과 충성의 문제',
    actionTip: '오늘은 믿을 사람과 믿지 않을 선을 분명히 정해보세요.',
    tradition: '귀인운과 충직한 인연',
    caseStudies: [
      { title: '개가 반갑게 다가오는 꿈', description: '도움이 되는 인연과 협력 기회가 가까워졌다는 뜻입니다.' },
      { title: '개에게 물리는 꿈', description: '신뢰 문제나 배신 불안을 점검하라는 메시지일 수 있습니다.' },
      { title: '잃어버린 개를 찾는 꿈', description: '놓친 관계나 가치 기준을 회복하고 싶은 마음이 반영됩니다.' },
      { title: '여러 마리 개가 짖는 꿈', description: '주변 소음이 많아 핵심 판단이 흐려졌다는 경고로 볼 수 있습니다.' },
    ],
    relatable: [
      '팀워크가 중요한 환경에서 일하는 분들에게 자주 나타납니다.',
      '믿었던 사람에게 실망한 뒤 관계 경계를 다시 세울 때 자주 꿔요.',
      '누군가를 지켜야 한다는 책임감이 큰 분들에게도 자주 보입니다.',
    ],
  },
  {
    slug: 'deceased-dream',
    name: '돌아가신 분 꿈',
    keyword: '돌아가신 분 꿈',
    symbol: '그리움과 조언',
    sensory: '익숙한 목소리 톤과 따뜻한 표정',
    focus: '상실 이후 마음의 정리',
    actionTip: '오늘은 그분이 남긴 가치 하나를 현재 삶에서 실천해 보세요.',
    tradition: '조상몽과 보호의 신호',
    caseStudies: [
      { title: '돌아가신 분이 웃으며 나오는 꿈', description: '마음의 안정과 보호받는 감각이 커지는 길몽으로 보는 경우가 많습니다.' },
      { title: '아무 말 없이 바라보는 꿈', description: '놓친 감정이나 생활 태도를 점검하라는 조용한 신호일 수 있습니다.' },
      { title: '무언가를 건네주는 꿈', description: '중요한 선택 앞에서 기준을 세우라는 상징으로 자주 해석합니다.' },
      { title: '함께 식사하는 꿈', description: '정서 회복과 가족 관계 화해의 흐름이 열릴 가능성을 뜻합니다.' },
    ],
    relatable: [
      '기일이나 명절처럼 기억이 짙어지는 시기에 자주 나타나요.',
      '큰 결정을 앞두고 마음이 흔들릴 때 위로처럼 찾아오기도 합니다.',
      '상실을 오래 눌러온 분들이 감정을 풀기 시작할 때 선명해집니다.',
    ],
  },
  {
    slug: 'rainbow-dream',
    name: '무지개 꿈',
    keyword: '무지개 꿈',
    symbol: '희망과 연결',
    sensory: '비 갠 하늘에 색이 층층이 번지는 장면',
    focus: '회복 후 찾아오는 기대감',
    actionTip: '오늘은 작은 성취를 기념하며 다음 단계를 구체적으로 계획해 보세요.',
    tradition: '귀인운과 소원성취',
    caseStudies: [
      { title: '선명한 무지개를 보는 꿈', description: '막혔던 흐름이 풀리며 좋은 소식이 들어올 가능성을 시사합니다.' },
      { title: '무지개를 향해 걸어가는 꿈', description: '목표가 분명해지고 실행 의지가 강화되는 상태입니다.' },
      { title: '무지개가 금방 사라지는 꿈', description: '기회 포착 타이밍을 놓치지 말라는 메시지로 읽을 수 있습니다.' },
      { title: '쌍무지개가 뜨는 꿈', description: '관계운과 재물운이 동시에 열리는 복합 길몽으로 봅니다.' },
    ],
    relatable: [
      '힘든 시기를 지나고 "이제 좀 나아진다"고 느끼는 분들이 자주 꿉니다.',
      '오랫동안 준비한 일이 빛을 보기 직전인 분들에게도 나타나요.',
      '다시 희망을 믿어보고 싶은 마음이 커질 때 선명해지는 꿈입니다.',
    ],
  },
  {
    slug: 'lottery-dream',
    name: '복권 꿈',
    keyword: '복권 꿈',
    symbol: '가능성과 기대',
    sensory: '복권 번호를 또렷하게 읽는 긴장감',
    focus: '한 번에 반전시키고 싶은 욕구',
    actionTip: '오늘은 운에만 기대기보다 수입 구조를 안정화하는 계획도 함께 세워보세요.',
    tradition: '횡재운 상징',
    caseStudies: [
      { title: '복권에 당첨되는 꿈', description: '성과 기대가 커진 시기이며 자신감 회복 신호일 수 있습니다.' },
      { title: '복권을 사는 꿈', description: '새 기회를 시험하고 싶은 도전 욕구가 강해졌다는 의미입니다.' },
      { title: '번호가 기억나는 꿈', description: '집중력이 특정 목표에 강하게 모이고 있다는 신호입니다.' },
      { title: '당첨 직전에 놓치는 꿈', description: '기회 상실 불안이 크므로 실행 타이밍 관리가 필요합니다.' },
    ],
    relatable: [
      '경제적으로 반전이 필요하다고 느끼는 분들이 자주 꿉니다.',
      '노력 대비 보상이 느리다고 느낄 때도 이런 꿈이 선명해져요.',
      '새로운 기회에 도전하고 싶은 마음이 커지는 시기와 맞물립니다.',
    ],
  },
  {
    slug: 'hair-dream',
    name: '머리카락 꿈',
    keyword: '머리카락 꿈',
    symbol: '자존감과 생명력',
    sensory: '머리카락이 손가락 사이로 빠져나가는 촉감',
    focus: '외적 이미지와 내적 힘의 균형',
    actionTip: '오늘은 외모 평가보다 에너지 관리에 집중하는 선택을 해보세요.',
    tradition: '수명운과 재물운의 척도',
    caseStudies: [
      { title: '머리카락이 빠지는 꿈', description: '스트레스와 자신감 저하가 누적되었음을 시사하는 경우가 많습니다.' },
      { title: '긴 머리카락을 자르는 꿈', description: '과거 이미지나 관계를 정리하는 결단 신호로 볼 수 있습니다.' },
      { title: '머리카락이 윤기 나는 꿈', description: '체력과 마음 상태가 회복되며 자신감이 올라오는 흐름입니다.' },
      { title: '엉킨 머리를 푸는 꿈', description: '복잡한 문제를 차근히 정리할 능력이 생겼다는 의미입니다.' },
    ],
    relatable: [
      '외모와 평가에 예민해진 시기에 특히 자주 나타나는 꿈입니다.',
      '과로로 체력이 떨어졌다고 느끼는 분들에게도 반복돼요.',
      '이미지 변화를 고민하는 분들이 결심 직전에 자주 꿉니다.',
    ],
  },
  {
    slug: 'blood-dream',
    name: '피 꿈',
    keyword: '피 꿈',
    symbol: '생명력과 감정 분출',
    sensory: '진한 붉은색이 시야를 채우는 강렬함',
    focus: '소진과 회복 욕구의 충돌',
    actionTip: '오늘은 무리한 약속 하나를 줄이고 회복 루틴을 먼저 챙기세요.',
    tradition: '재물운과 기운 전환',
    caseStudies: [
      { title: '내 피가 나는 꿈', description: '에너지 소모가 크고 휴식이 필요하다는 직접적인 신호일 수 있습니다.' },
      { title: '남의 피를 보는 꿈', description: '주변 갈등의 영향을 과하게 흡수하고 있음을 뜻할 수 있습니다.' },
      { title: '피를 닦아내는 꿈', description: '혼란을 수습하고 감정을 정리하는 회복 국면을 나타냅니다.' },
      { title: '피가 멈추는 꿈', description: '불안이 줄고 상황 통제가 가능해지는 흐름으로 해석합니다.' },
    ],
    relatable: [
      '몸과 마음이 동시에 지쳤다고 느끼는 분들이 자주 꿉니다.',
      '분노나 슬픔을 참아온 기간이 길수록 꿈이 강렬해져요.',
      '회복이 필요하다는 몸의 신호를 무시했을 때도 자주 나타납니다.',
    ],
  },
  {
    slug: 'earthquake-dream',
    name: '지진 꿈',
    keyword: '지진 꿈',
    symbol: '기반 흔들림과 재정렬',
    sensory: '바닥이 흔들리며 중심을 잃는 감각',
    focus: '안정 기반의 재점검',
    actionTip: '오늘은 재정, 일정, 인간관계 중 가장 흔들리는 기반부터 점검해 보세요.',
    tradition: '대운 변화의 전조',
    caseStudies: [
      { title: '강한 지진을 겪는 꿈', description: '삶의 우선순위를 근본적으로 바꿔야 한다는 신호일 수 있습니다.' },
      { title: '건물이 무너지는 지진 꿈', description: '기존 신념이나 구조가 더는 유효하지 않다는 메시지입니다.' },
      { title: '지진 후 안전한 곳을 찾는 꿈', description: '위기 속에서도 회복 루트를 찾는 적응력이 작동하고 있음을 뜻합니다.' },
      { title: '지진이 멈추고 고요해지는 꿈', description: '혼란 뒤에 새로운 질서가 자리 잡을 가능성을 시사합니다.' },
    ],
    relatable: [
      '회사나 가정에서 큰 변화가 겹친 분들이 자주 꾸는 꿈입니다.',
      '안정감이 무너졌다고 느끼는 시기에 반복적으로 나타나요.',
      '기존 방식으로는 버티기 어렵다는 자각이 생길 때 선명해집니다.',
    ],
  },
  {
    slug: 'ocean-dream',
    name: '바다 꿈',
    keyword: '바다 꿈',
    symbol: '무의식의 광활함',
    sensory: '짠 바람 냄새와 파도 소리의 리듬',
    focus: '큰 감정과 큰 가능성의 공존',
    actionTip: '오늘은 마음을 넓히되, 현실 목표는 한 가지로 선명하게 좁혀 보세요.',
    tradition: '원정운과 재물운',
    caseStudies: [
      { title: '잔잔한 바다를 보는 꿈', description: '감정이 안정되고 큰 그림을 보는 시기임을 보여줍니다.' },
      { title: '거센 파도를 만나는 꿈', description: '외부 변수와 내적 불안이 동시에 커졌다는 신호일 수 있습니다.' },
      { title: '바다에 들어가 수영하는 꿈', description: '감정을 피하지 않고 다루려는 성숙한 태도를 뜻합니다.' },
      { title: '바다 끝 수평선을 바라보는 꿈', description: '새 목표와 장기 계획이 열리는 확장 국면으로 해석합니다.' },
    ],
    relatable: [
      '인생 방향을 다시 그려야 하는 시기에 이 꿈을 많이 꿔요.',
      '감정 폭이 커서 스스로도 놀라는 분들에게 자주 나타납니다.',
      '여행, 이사, 유학처럼 큰 이동을 고민하는 분들에게도 선명해집니다.',
    ],
  },
  {
    slug: 'moon-dream',
    name: '달 꿈',
    keyword: '달 꿈',
    symbol: '직감과 여성성, 주기적 변화',
    sensory: '밤하늘의 은은한 빛과 고요한 공기',
    focus: '내면 리듬을 듣는 힘',
    actionTip: '오늘은 결과보다 컨디션 주기를 기록하며 내 리듬을 먼저 파악해 보세요.',
    tradition: '태몽과 귀인운의 상징',
    caseStudies: [
      { title: '밝은 보름달을 보는 꿈', description: '완성 단계에 가까워진 성과와 소원 성취 흐름을 나타냅니다.' },
      { title: '초승달을 보는 꿈', description: '아직 작지만 확실한 시작 신호로 읽을 수 있습니다.' },
      { title: '달이 구름에 가려지는 꿈', description: '직감을 믿기 어려운 혼란기가 왔다는 메시지일 수 있습니다.' },
      { title: '달빛 아래 걷는 꿈', description: '속도를 늦추고 내면의 답을 듣는 과정이 중요하다는 뜻입니다.' },
    ],
    relatable: [
      '감수성이 높아져 작은 일에도 마음이 흔들리는 분들이 자주 꿉니다.',
      '창작이나 기획처럼 직감이 중요한 일을 하는 분들에게도 자주 보여요.',
      '밤에 생각이 많아지는 시기에 내면 정리를 돕는 꿈으로 나타납니다.',
    ],
  },
  {
    slug: 'gift-dream',
    name: '선물 꿈',
    keyword: '선물 꿈',
    symbol: '인정과 교환',
    sensory: '포장지를 여는 바스락 소리와 기대감',
    focus: '받고 주는 관계의 균형',
    actionTip: '오늘은 도움받은 관계에 짧은 감사 표현을 먼저 전해 보세요.',
    tradition: '인복과 귀인운',
    caseStudies: [
      { title: '선물을 받는 꿈', description: '인정받고 싶은 마음과 실제 기회 유입이 함께 작동하는 신호입니다.' },
      { title: '선물을 고르는 꿈', description: '관계에서 어떤 태도로 다가갈지 고민이 깊어진 상태를 보여줍니다.' },
      { title: '선물을 잃어버리는 꿈', description: '기회나 호의를 놓칠까 하는 불안을 반영할 수 있습니다.' },
      { title: '내가 선물을 주는 꿈', description: '관계의 주도권을 따뜻하게 잡고 싶어 하는 마음이 나타난 장면입니다.' },
    ],
    relatable: [
      '관계에서 인정받고 싶은 마음이 커진 분들이 자주 꿉니다.',
      '고마움을 표현하지 못해 마음에 걸리는 일이 있을 때 나타나요.',
      '주고받는 균형이 깨졌다고 느낄 때 정리 신호로 선명해집니다.',
    ],
  },
]

const dreamData: Record<string, DreamEntry> = Object.fromEntries(
  dreamConfigs.map((config) => [
    config.slug,
    {
      title: `${config.name} 해몽 | 꿈해몽 무료 해석`,
      description: createDescription(config.keyword),
      content: buildDreamContent(config),
    },
  ])
) as Record<string, DreamEntry>

const dreamNameBySlug = Object.fromEntries(
  dreamConfigs.map((config) => [config.slug, `${config.name} 해몽`])
) as Record<string, string>

const relatedDreamMap: Record<string, string[]> = {
  'snake-dream': ['water-dream', 'tiger-dream', 'chasing-dream', 'money-dream', 'deceased-dream'],
  'teeth-dream': ['hair-dream', 'blood-dream', 'ghost-dream', 'death-dream', 'exam-dream'],
  'chasing-dream': ['ghost-dream', 'car-accident-dream', 'exam-dream', 'thief-dream', 'snake-dream'],
  'money-dream': ['lottery-dream', 'poop-dream', 'snake-dream', 'gift-dream', 'house-dream'],
  'pregnancy-dream': ['baby-dream', 'wedding-dream', 'moon-dream', 'water-dream', 'house-dream'],
  'water-dream': ['ocean-dream', 'snake-dream', 'death-dream', 'rainbow-dream', 'moon-dream'],
  'death-dream': ['deceased-dream', 'ghost-dream', 'teeth-dream', 'water-dream', 'earthquake-dream'],
  'exam-dream': ['chasing-dream', 'teeth-dream', 'car-accident-dream', 'money-dream', 'gift-dream'],
  'ghost-dream': ['deceased-dream', 'death-dream', 'chasing-dream', 'teeth-dream', 'moon-dream'],
  'ex-dream': ['wedding-dream', 'gift-dream', 'cat-dream', 'dog-dream', 'moon-dream'],
  'poop-dream': ['money-dream', 'lottery-dream', 'snake-dream', 'house-dream', 'gift-dream'],
  'fire-dream': ['house-dream', 'earthquake-dream', 'tiger-dream', 'blood-dream', 'chasing-dream'],
  'tiger-dream': ['snake-dream', 'dog-dream', 'fire-dream', 'money-dream', 'house-dream'],
  'baby-dream': ['pregnancy-dream', 'wedding-dream', 'house-dream', 'moon-dream', 'gift-dream'],
  'wedding-dream': ['ex-dream', 'gift-dream', 'baby-dream', 'house-dream', 'moon-dream'],
  'flying-dream': ['rainbow-dream', 'moon-dream', 'ocean-dream', 'chasing-dream', 'tiger-dream'],
  'house-dream': ['thief-dream', 'fire-dream', 'baby-dream', 'wedding-dream', 'money-dream'],
  'thief-dream': ['house-dream', 'money-dream', 'car-accident-dream', 'dog-dream', 'chasing-dream'],
  'car-accident-dream': ['chasing-dream', 'exam-dream', 'earthquake-dream', 'thief-dream', 'blood-dream'],
  'cat-dream': ['dog-dream', 'ex-dream', 'gift-dream', 'moon-dream', 'ghost-dream'],
  'dog-dream': ['cat-dream', 'tiger-dream', 'gift-dream', 'house-dream', 'thief-dream'],
  'deceased-dream': ['ghost-dream', 'death-dream', 'moon-dream', 'house-dream', 'water-dream'],
  'rainbow-dream': ['flying-dream', 'ocean-dream', 'moon-dream', 'money-dream', 'lottery-dream'],
  'lottery-dream': ['money-dream', 'poop-dream', 'gift-dream', 'rainbow-dream', 'snake-dream'],
  'hair-dream': ['teeth-dream', 'blood-dream', 'cat-dream', 'exam-dream', 'death-dream'],
  'blood-dream': ['hair-dream', 'teeth-dream', 'fire-dream', 'car-accident-dream', 'death-dream'],
  'earthquake-dream': ['house-dream', 'car-accident-dream', 'death-dream', 'fire-dream', 'ocean-dream'],
  'ocean-dream': ['water-dream', 'rainbow-dream', 'moon-dream', 'flying-dream', 'earthquake-dream'],
  'moon-dream': ['rainbow-dream', 'deceased-dream', 'baby-dream', 'flying-dream', 'wedding-dream'],
  'gift-dream': ['money-dream', 'wedding-dream', 'ex-dream', 'dog-dream', 'cat-dream'],
}

function extractFAQs(content: string): FAQItem[] {
  const regex = /Q:\s*(.+?)\nA:\s*([\s\S]*?)(?=\nQ:\s*|\n##\s|$)/g
  const faqs: FAQItem[] = []
  let match = regex.exec(content)

  while (match) {
    const question = match[1].trim()
    const answer = match[2].replace(/\n+/g, ' ').trim()

    if (question && answer) {
      faqs.push({ question, answer })
    }

    match = regex.exec(content)
  }

  return faqs
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const dream = dreamData[params.slug]
  if (!dream) return {}

  return {
    title: dream.title,
    description: dream.description,
  }
}

export default function DreamPage({
  params,
}: {
  params: { slug: string }
}) {
  const dream = dreamData[params.slug]
  if (!dream) return notFound()

  const faqs = extractFAQs(dream.content)
  const relatedDreams = (relatedDreamMap[params.slug] ?? [])
    .map((slug) => ({ slug, name: dreamNameBySlug[slug] }))
    .filter((item) => Boolean(item.name))

  return (
    <div className="min-h-screen px-6 py-16 relative z-10">
      <div className="max-w-2xl mx-auto text-white">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-block px-4 py-2 rounded-lg bg-amber-900/30 hover:bg-amber-800/40 border border-amber-200/40 text-amber-100 text-sm transition"
          >
            ← 메인으로 돌아가기
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-10">{dream.title}</h1>

        <ReactMarkdown className="prose prose-invert max-w-none text-white/90">
          {dream.content}
        </ReactMarkdown>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />

        <div className="mt-12 p-6 rounded-2xl bg-amber-900/20 border border-amber-200/20">
          <h2 className="text-lg font-semibold text-white/80 mb-4">관련 꿈해몽</h2>
          <div className="flex flex-wrap gap-3">
            {relatedDreams.map((d) => (
              <Link
                key={d.slug}
                href={`/dream/${d.slug}`}
                className="px-4 py-2 rounded-lg bg-amber-900/30 hover:bg-amber-800/40 border border-amber-200/40 text-amber-100 text-sm transition"
              >
                {d.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block px-4 py-2 rounded-lg bg-amber-900/30 hover:bg-amber-800/40 border border-amber-200/40 text-amber-100 text-sm transition"
          >
            ← 메인으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}
