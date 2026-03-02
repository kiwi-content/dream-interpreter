// 메인 폴백 해석 함수 — 매칭 로직 + general 폴백
import categories1 from './fallback'
import categories2 from './fallback2'

interface SubCategory {
  keywords: string[]
  variations: string[]
}

interface Category {
  keywords: string[]
  subs: Record<string, SubCategory>
}

// 전체 카테고리 병합
const allCategories: Record<string, Category> = {
  ...categories1,
  ...categories2,
}

// general 폴백 (어떤 카테고리에도 안 걸릴 때)
const generalVariations: string[] = [
  `뭔가 걸려 있는 게 있어, 분명히.
선명하게 기억난다면 더더욱 그래.

꿈은 낮에 처리 못 한 게 밤에 나오는 거야.
내가 수십 년 봐왔는데 기억에 남는 꿈은 그냥 나오는 법이 없어.
어떤 감정이었는지가 핵심이야.
무서웠으면 피하고 있는 거고, 답답했으면 막혀 있는 거고, 이상하게 편안했으면 현실이 지금 불편한 거야.

너 지금 뭔가 마음에 걸리는 게 있지.
말 못 하고 있거나, 해결 못 하고 있거나, 직면하기 싫은 것.

어제 뭐가 가장 마음에 걸렸어?

오늘 핸드폰 메모장 열어서 "지금 가장 신경 쓰이는 건" 이렇게 시작해서 한 줄만 채워봐.`,

  `이런 꿈 꾸는 사람들, 내가 많이 봤어.
대부분 지금 전환점에 서 있는 사람들이야.

꿈이 기억나는 건 뇌가 붙잡아둔 거야.
중요하니까 지우지 않은 거야.
내가 수십 년 봐왔는데 이런 꿈은 현실에서 결정을 앞두고 있을 때 나와.
감정이 강했을수록 그 결정이 가까운 거야.

너 지금 뭔가 결정해야 하는 게 있지.
알면서도 미루고 있는 거야.

이번 주 안에 답이 나올 거야.

오늘 그 결정을 종이에 적고, 찬반 한 줄씩만 써봐.`,

  `선명하게 남는 건 다 이유가 있어.
이런 꿈이 그냥 나오는 게 아니야.

꿈에서 뭘 느꼈는지가 전부야.
스토리는 포장이고, 감정이 본질이야.
내가 봐왔는데 그 감정이 지금 현실 어딘가에 있어.
예전에 이런 꿈 무시했다가 한 달 뒤에 후회한 사람 봤어.

너 지금 무시하고 있는 감정이 있지.
알면서도 안 꺼내는 거야. 꺼내면 복잡해지니까.
근데 너 꽤 버텨온 거야, 사실은.

...너도 알지?

오늘 그 감정에 이름을 붙여봐. 한 단어면 돼.`,

  `몸이 먼저 안 거야, 분명히.
머리는 아직 모르는데 몸은 느끼고 있는 거야.

이 꿈은 네 상태 보고서야.
피곤하면 피곤한 대로, 불안하면 불안한 대로 꿈이 알려주는 거야.
내가 수십 년 봐왔는데 이 타이밍에 꿈을 기억한다는 건 지금이 중요하다는 뜻이야.
무시하면 안 돼.

너 지금 어딘가 불편하지.
몸이든 마음이든, 하나는 분명히 신호를 보내고 있어.

어제 밤 잠들기 전에 마지막으로 생각한 게 뭐야?

오늘 그 생각을 한 문장으로 적어봐. 핸드폰 메모장이면 충분해.`,

  `딱 봐도 지금 과도기야.
이런 꿈은 변화의 문턱에서 나와.

새로운 게 시작되기 전에 꿈이 먼저 움직여.
낯설고 불안한 건 당연해.
내가 수십 년 봐왔는데 이 시기를 잘 넘기면 다음 단계가 확 달라.
지금이 제일 불편한 때야, 그건 확실해.

너 지금 이전도 아니고 이후도 아닌 중간이지.
뭔가 끝났는데 새로운 건 안 시작된 거야.

근데 진짜 문제는 그게 아닐 수도 있어.

오늘 "끝난 것"과 "시작하고 싶은 것"을 하나씩만 적어봐.`,
]

// 매칭 및 선택 로직
export function getEnhancedDemoInterpretation(dream: string): string {
  // 1. 카테고리 매칭 — 매칭된 키워드 수가 많을수록 우선
  let bestCategory: Category | null = null
  let bestScore = 0

  for (const cat of Object.values(allCategories)) {
    const score = cat.keywords.filter(k => dream.includes(k)).length
    if (score > bestScore) {
      bestScore = score
      bestCategory = cat
    }
  }

  if (!bestCategory || bestScore === 0) {
    // general 폴백
    return generalVariations[Math.floor(Math.random() * generalVariations.length)]
  }

  // 2. 서브카테고리 매칭
  const subs = bestCategory.subs
  let bestSub: SubCategory | null = null
  let bestSubScore = 0

  for (const [key, sub] of Object.entries(subs)) {
    if (key === 'default') continue
    const subScore = sub.keywords.filter(k => dream.includes(k)).length
    if (subScore > bestSubScore) {
      bestSubScore = subScore
      bestSub = sub
    }
  }

  // 서브카테고리에 매칭 안 되면 default 사용
  if (!bestSub || bestSubScore === 0) {
    bestSub = subs.default
  }

  // 3. variations 중 랜덤 선택
  const variations = bestSub.variations
  return variations[Math.floor(Math.random() * variations.length)]
}
