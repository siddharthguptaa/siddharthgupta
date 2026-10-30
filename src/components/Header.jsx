import { useEffect, useState } from 'react';
import { LINKS, NAV, PHONE, PROFILE, WHATSAPP, WHATSAPP_GREETING } from '../data.js';
import Icon from './Icon.jsx';

/** Round icon link with a label that appears on hover or keyboard focus. */
function SocialLink({ icon, label, href, external, hoverClass = 'hover:border-accent hover:bg-accent hover:text-on-accent focus-visible:border-accent focus-visible:bg-accent focus-visible:text-on-accent' }) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group relative grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-muted transition duration-200 hover:-translate-y-[3px] hover:-rotate-6 focus-visible:-translate-y-[3px] max-md:h-[34px] max-md:w-[34px] ${hoverClass} motion-reduce:transition-none motion-reduce:hover:transform-none`}
    >
      <Icon name={icon} className="h-6 w-6 max-md:h-[18px] max-md:w-[18px]" />
      <span className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] z-10 -translate-x-1/2 whitespace-nowrap rounded bg-ink px-2 py-1.5 text-[0.8rem] leading-none text-bg opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:hidden">
        {label}
      </span>
    </a>
  );
}

export default function Header() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [compact, setCompact] = useState(false); // phones: hide the second row while scrolling down
  const [active, setActive] = useState('');

  const toggleTheme = () => {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (e) {
      /* storage can be blocked; the theme still switches for this visit */
    }
    setDark(next);
  };

  // Shrink on the way down, come back on the way up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 140 && y > last + 6) setCompact(true);
      else if (y < last - 6 || y <= 140) setCompact(false);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Underline the link of the section you are reading.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.href.slice(1));
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="topbar">
      <div className="mx-auto grid max-w-page grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 px-6 py-2.5 md:flex md:flex-wrap md:justify-between md:gap-x-7 md:gap-y-3 md:py-3">
        <a href="#top" className="col-start-1 row-start-1 font-display text-[1.05rem] font-bold tracking-tight md:text-[1.2rem]">
          {PROFILE.name}
        </a>
        <div className="contents md:flex md:flex-wrap md:items-center md:gap-x-[22px] md:gap-y-3">
          <nav
            aria-label="Sections"
            className={`col-start-1 row-start-2 flex flex-nowrap gap-[18px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap md:gap-x-[22px] md:gap-y-1.5 md:overflow-visible ${
              compact ? 'max-md:hidden' : ''
            }`}
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap border-b-2 py-1 text-[0.97rem] hover:border-accent hover:text-ink ${
                  active === item.href.slice(1) ? 'border-accent text-ink' : 'border-transparent text-muted'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="col-start-2 row-start-1 flex gap-1.5 md:gap-2.5">
            {LINKS.linkedin && <SocialLink icon="linkedin" label="LinkedIn" href={LINKS.linkedin} external />}
            {LINKS.github && <SocialLink icon="github" label="GitHub" href={LINKS.github} external />}
            {PHONE && (
              <SocialLink
                icon="whatsapp"
                label="WhatsApp"
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_GREETING)}`}
                external
                hoverClass="hover:border-[#18924f] hover:bg-[#18924f] hover:text-white focus-visible:border-[#18924f] focus-visible:bg-[#18924f] focus-visible:text-white"
              />
            )}
            {PHONE && <SocialLink icon="phone" label="Call me" href="#call" />}
            <SocialLink icon="mail" label="Message me" href="#message-box" />
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className={`col-start-2 row-start-2 whitespace-nowrap rounded-full border border-line px-3.5 py-1 text-[0.9rem] text-muted hover:border-accent hover:text-ink max-md:px-3 max-md:py-1 max-md:text-[0.85rem] ${
              compact ? 'max-md:hidden' : ''
            }`}
          >
            {dark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </div>
    </header>
  );
}
