import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '뱀 나오는 꿈 해몽 | 꿈해몽 AI 무료 해석',
  description:
    '뱀 나오는 꿈은 어떤 의미일까요? 상황별 꿈해몽을 카카오톡 대화 형식으로 쉽게 풀어드립니다. 꿈 의미, 심리 해석, 길몽 흉몽 분석까지 확인해보세요.',
}

export default function DreamTalkTest() {
  return (
    <div className="min-h-screen px-6 py-16 relative z-10">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold mb-10 text-center text-white">
          뱀 나오는 꿈 해몽
        </h1>

        {/* 카카오톡 스타일 대화 */}
        <div className="space-y-6">

          {/* 사용자 말풍선 */}
          <div className="flex justify-end">
            <div className="bg-yellow-400 text-black px-5 py-3 rounded-2xl rounded-br-sm max-w-xs shadow-md">
              어젯밤에 큰 뱀이 저를 쳐다봤어요…
            </div>
          </div>

          {/* Dream 답변 */}
          <div className="flex justify-start">
            <div className="bg-white text-gray-900 px-5 py-4 rounded-2xl rounded-bl-sm max-w-md shadow-md">
              큰 뱀이 나오는 꿈은 보통 “강한 에너지”를 상징해요.
              재물운이나 인생의 큰 변화와 연결되는 경우가 많아요.
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white text-gray-900 px-5 py-4 rounded-2xl rounded-bl-sm max-w-md shadow-md">
              만약 두려움을 느꼈다면, 현재 부담을 느끼는 일이 있을 수 있고,
              침착했다면 오히려 좋은 기회가 다가오는 신호일 수 있어요.
            </div>
          </div>

        </div>

        {/* SEO용 상세 텍스트 */}
        <div className="mt-16 text-white/90 leading-relaxed space-y-6">

          <h2 className="text-2xl font-semibold mt-10">
            뱀 나오는 꿈의 기본 의미
          </h2>

          <p>
            뱀 꿈은 전통적으로 재물, 권력, 생명력, 무의식의 에너지를 상징합니다.
            특히 큰 뱀이 등장하는 경우에는 인생의 중요한 전환점이나
            예상치 못한 기회와 연결되는 경우가 많습니다.
          </p>

          <h3 className="text-xl font-semibold mt-8">
            상황별 뱀 꿈 해석
          </h3>

          <p>
            뱀이 공격하는 꿈은 스트레스나 압박을 의미할 수 있으며,
            뱀이 조용히 있는 꿈은 잠재된 기회를 나타낼 수 있습니다.
            뱀을 잡거나 죽이는 꿈은 문제를 극복하는 신호로 해석되기도 합니다.
          </p>

          <h3 className="text-xl font-semibold mt-8">
            심리학적 해석
          </h3>

          <p>
            심리학적으로 뱀은 무의식과 본능을 상징합니다.
            억눌린 감정이나 해결되지 않은 문제가 꿈 속 이미지로
            나타나는 경우가 많습니다.
          </p>

          <p>
            꿈해몽은 정답이 정해져 있는 것이 아니라,
            현재 당신의 상황과 감정에 따라 달라질 수 있습니다.
            같은 뱀 꿈이라도 느낌과 분위기에 따라 길몽이 될 수도,
