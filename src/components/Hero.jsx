import { HERO, PHOTOS, PROFILE, RESUME_FILE } from '../data.js';
import Icon from './Icon.jsx';
import StackArt from './StackArt.jsx';
import { BTN_GHOST, BTN_PRIMARY } from './ui.js';

export default function Hero({ onShowTech }) {
  return (
    <div id="top" className="mx-auto max-w-page px-6 pb-[72px] pt-14 max-md:pb-[52px] max-md:pt-9">
      <div className="grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="mb-[22px] flex items-center gap-3.5">
            <img
              src={PHOTOS.avatar}
              alt={PROFILE.name}
              width="64"
              height="64"
              className="h-14 w-14 rounded-full border-[3px] border-surface object-cover shadow-[0_0_0_2px_var(--accent),0_8px_18px_rgba(16,24,40,0.15)] md:h-16 md:w-16"
            />
            <div>
              <strong className="block font-display text-[1.05rem] leading-tight">{PROFILE.name}</strong>
              <span className="text-[0.93rem] text-muted">Full-stack developer · {PROFILE.location}</span>
            </div>
          </div>
          <h1 className="mb-6 max-w-[17em] font-display text-[length:clamp(2.2rem,5vw,3.7rem)] font-bold leading-[1.04] tracking-[-0.025em]">
            {HERO.before}
            <em className="not-italic text-accent">{HERO.highlight}</em>
            {HERO.after}
          </h1>
          <p className="mb-8 max-w-[38em] text-[1.15rem] text-muted">{HERO.intro}</p>
          <div className="mb-3.5 flex flex-wrap items-center gap-3">
            <a href="#contact" className={BTN_PRIMARY}>
              Start a conversation
            </a>
            <a href="#work" className={BTN_GHOST}>
              Explore my work
            </a>
            <a href={RESUME_FILE} download={RESUME_FILE} target="_blank" rel="noopener" className={BTN_GHOST}>
              <Icon name="download" className="h-5 w-5" />
              Download resume
            </a>
          </div>
          <p className="m-0 text-[0.97rem] text-muted">
            <span className="mr-2.5 inline-block h-[9px] w-[9px] rounded-full bg-[#2e9e5b] align-[1px]" />
            {HERO.status}
          </p>
          {HERO.proof && (
            <div className="mt-[22px] max-w-[34em] rounded-md border border-line border-l-4 border-l-accent bg-surface px-4 py-3.5">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {HERO.proof.stats.map((s) => (
                  <div key={s.label}>
                    <strong className="block whitespace-nowrap font-display text-[1.5rem] leading-none text-accent">{s.value}</strong>
                    <span className="text-[0.85rem] text-muted">{s.label}</span>
                  </div>
                ))}
              </div>
              <p className="mb-0 mt-2.5 text-[0.95rem] text-muted">{HERO.proof.text}</p>
            </div>
          )}
        </div>
        <StackArt onShowTech={onShowTech} />
      </div>
    </div>
  );
}
