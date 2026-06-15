import Section from "@/components/common/Section";
import { LINKS, PROFILE } from "@/data/profile";

const CONTACT_LINKS = [
  { label: "GitHub", href: LINKS.github },
  { label: "기술 블로그", href: LINKS.blog },
  { label: "LinkedIn", href: LINKS.linkedin },
  { label: "이력서", href: LINKS.resume },
] as const;

const Contacts = () => {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="제품의 다음 문제를 함께 풀 동료를 찾고 있습니다"
      subtitle="사용자 경험과 개발 경험을 함께 개선하는 팀, 기술 선택의 이유를 솔직하게 나누는 팀에 관심이 있습니다."
      background="dark"
      className="border-b-0"
    >
      <div className="grid gap-10 rounded-3xl border border-slate-700 bg-slate-900 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-sm font-medium text-slate-400">
            가장 빠른 연락 방법
          </p>
          <a
            href={LINKS.email}
            className="mt-3 inline-block text-2xl font-semibold tracking-tight break-all text-white underline decoration-cyan-400 decoration-2 underline-offset-8 transition hover:text-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none sm:text-4xl"
          >
            {PROFILE.email}
          </a>
          <p className="mt-5 max-w-xl leading-7 text-slate-300">
            포지션과 팀이 해결하려는 문제를 간단히 알려주시면 확인 후
            답변드리겠습니다.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
          {CONTACT_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-12 flex flex-col gap-2 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {PROFILE.englishName} · {PROFILE.role}
        </p>
        <p>Built with Next.js and TypeScript.</p>
      </footer>
    </Section>
  );
};

export default Contacts;
