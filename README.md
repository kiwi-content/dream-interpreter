# 🌙 AI 꿈해몽 - SEO 최적화 & Claude API 연동

동양과 서양의 지혜로 해석하는 AI 꿈해몽 서비스 (SEO 100점 버전)

## ✨ 특징

### 기술 스택
- 🤖 **Claude Sonnet 4 API** - 실제 AI 꿈 해석
- 🚀 **Next.js 14** (App Router) - 최신 React 프레임워크
- 🎨 **Tailwind CSS** - 아름다운 UI
- 📱 **완벽한 반응형** - 모바일 최적화

### SEO 최적화 (100점 목표)
- ✅ **메타 태그 완벽 구성** - title, description, keywords
- ✅ **Open Graph** - 소셜 미디어 최적화
- ✅ **구조화 데이터** (JSON-LD) - 검색엔진 이해도 향상
- ✅ **시맨틱 HTML** - article, section, nav 등
- ✅ **접근성** (a11y) - ARIA 레이블, Skip links
- ✅ **Sitemap & Robots.txt** - 크롤링 최적화
- ✅ **페이지 성능 최적화** - 빠른 로딩
- ✅ **모바일 최적화** - viewport, responsive

## 🚀 빠른 시작

### 1. 설치

```bash
cd dream-seo
npm install
```

### 2. Claude API 키 설정 (선택사항)

#### API 키 발급 받기:
1. https://console.anthropic.com 접속
2. Settings → API Keys
3. "Create Key" 클릭
4. 키 복사

#### 로컬 개발 환경:
```bash
cp .env.example .env
```

`.env` 파일 수정:
```
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxx
```

**참고**: API 키 없어도 향상된 데모 모드로 작동합니다!

### 3. 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 접속!

## 📦 Vercel 배포 (무료!)

### 방법 1: GitHub 연동 (추천)

1. **GitHub 저장소 생성**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/dream-seo.git
   git push -u origin main
   ```

2. **Vercel 배포**
   - https://vercel.com 로그인
   - "Import Project" 클릭
   - GitHub 저장소 선택
   - 환경 변수 설정:
     - Name: `ANTHROPIC_API_KEY`
     - Value: `sk-ant-api03-xxxxx...`
   - Deploy 클릭!

3. **커스텀 도메인 연결** (선택)
   - Project Settings → Domains
   - 도메인 추가

### 방법 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## 🔍 SEO 설정 체크리스트

### 필수 작업

- [ ] `app/layout.tsx`에서 도메인 변경
  ```typescript
  metadataBase: new URL('https://your-actual-domain.com')
  ```

- [ ] `app/sitemap.ts`에서 도메인 변경
  ```typescript
  const baseUrl = 'https://your-actual-domain.com'
  ```

- [ ] `public/robots.txt`에서 도메인 변경
  ```
  Sitemap: https://your-actual-domain.com/sitemap.xml
  ```

### Google Search Console 등록

1. https://search.google.com/search-console 접속
2. 도메인 추가
3. 소유권 확인 (메타 태그 방식)
4. Sitemap 제출: `https://your-domain.com/sitemap.xml`

### 네이버 서치어드바이저 등록

1. https://searchadvisor.naver.com 접속
2. 사이트 추가
3. 소유권 확인
4. 사이트맵 제출

### 키워드 최적화

이미 포함된 SEO 키워드:
- 꿈해몽, 무료꿈해몽, 꿈풀이, AI꿈해몽
- 뱀꿈, 물꿈, 똥꿈, 임신꿈, 돌아가신분꿈
- 치아빠지는꿈, 시험꿈, 전애인꿈
- 더 많은 키워드는 코드 참조

## 💰 비용 관리

### Claude API 비용

**무료 시작:**
- 새 계정: $5 무료 크레딧
- 약 50-100개 꿈 해석 가능

**실사용 비용:**
- Claude Sonnet 4: 입력 $3/M tokens, 출력 $15/M tokens
- 꿈 해석 1개: 약 50-80원
- 월 100개 해석: 약 5,000-8,000원

### 비용 절감 팁

1. **일일 제한 설정**
   ```typescript
   // app/api/interpret/route.ts
   const DAILY_LIMIT = 100
   ```

2. **캐싱 활용**
   - 인기 꿈은 결과 저장
   - 비슷한 꿈은 재사용

3. **API 키 없이 운영**
   - 향상된 데모 모드 활용
   - 광고 수익 먼저 확보
   - 나중에 API 추가

## 📈 Google Analytics 추가 (선택)

### 1. GA4 계정 만들기
1. https://analytics.google.com
2. 측정 ID 복사 (G-XXXXXXXXXX)

### 2. 코드 추가

`app/layout.tsx`의 `<head>` 안에:
```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

## 💵 Google AdSense 추가

### 1. AdSense 승인 받기
1. https://adsense.google.com
2. 사이트 등록
3. 코드 삽입
4. 승인 대기 (1-2주)

### 2. 광고 코드 추가

승인 후 `app/result/page.tsx`의 광고 영역에:
```typescript
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxx"
     crossorigin="anonymous"></script>
<ins className="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-xxxxx"
     data-ad-slot="xxxxx"
     data-ad-format="auto"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

## 🎯 SEO 체크 도구

배포 후 확인:
- **Lighthouse** (Chrome DevTools) - 성능, SEO, 접근성 점수
- **PageSpeed Insights** - https://pagespeed.web.dev
- **구글 모바일 친화성 테스트** - https://search.google.com/test/mobile-friendly
- **구조화 데이터 테스트** - https://search.google.com/test/rich-results

## 📊 예상 성장 시나리오

### Month 1: 런칭
- 일 방문자: 50-100명
- 광고 수익: 0원 (승인 대기)
- API 비용: 0원 (데모 모드)

### Month 2-3: SEO 효과
- 일 방문자: 500-1,000명
- 광고 수익: 월 30,000-50,000원
- API 비용: 월 10,000원

### Month 6+: 안정기
- 일 방문자: 5,000-10,000명
- 광고 수익: 월 300,000-500,000원
- API 비용: 월 50,000원
- **순수익: 월 250,000-450,000원**

## 🔧 트러블슈팅

### API 에러
- API 키 확인
- 크레딧 잔액 확인
- 데모 모드로 자동 fallback

### SEO 안 됨
- Google Search Console 확인
- Sitemap 제출 확인
- robots.txt 확인
- 최소 2-4주 소요

### 트래픽 없음
- 키워드 최적화
- 블로그 콘텐츠 작성
- 소셜 미디어 공유

## 📞 문의

질문이나 제안사항이 있으시면 이슈를 등록해주세요!

## 📄 라이선스

MIT License

---
**만든 사람**: Claude와 함께 ❤️
**버전**: SEO 최적화 + Claude API 연동
**날짜**: 2026년 2월
