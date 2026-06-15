# Kangju Heo - Frontend Engineer Portfolio

허강주의 경력과 문제 해결 사례를 소개하는 포트폴리오입니다.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel Analytics / Speed Insights

## Structure

```text
src/
├── app/
│   ├── page.tsx
│   └── project/[slug]/page.tsx
├── components/
│   ├── About/
│   ├── Experience/
│   ├── Hero/
│   ├── Projects/
│   ├── Values/
│   └── Contacts/
└── data/
    ├── case-studies.ts
    └── profile.ts
```

프로젝트 상세 페이지는 `src/data/case-studies.ts`를 단일 원본으로 사용합니다.

## Development

```bash
npm install
npm run dev
```

로컬 주소는 [http://localhost:3000](http://localhost:3000)입니다.
