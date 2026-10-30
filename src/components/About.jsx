import { ABOUT, PHOTOS, PROFILE } from '../data.js';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid items-center gap-x-12 gap-y-9 md:grid-cols-[240px_1fr]">
        <Reveal as="figure" className="relative m-0 max-w-[240px] before:absolute before:inset-[14px_-14px_-14px_14px] before:rounded-[14px] before:border-2 before:border-accent before:opacity-50 before:content-['']">
          <img
            src={PHOTOS.portrait}
            alt={`Portrait of ${PROFILE.name}`}
            width="480"
            height="600"
            loading="lazy"
            className="relative block aspect-[4/5] h-auto w-full rounded-[14px] bg-surface object-cover"
          />
        </Reveal>
        <div>
          {ABOUT.map((text, i) => (
            <Reveal as="p" key={text} delay={i * 70} className={`mb-3.5 mt-0 max-w-[36em] ${i === ABOUT.length - 1 ? 'text-muted' : ''}`}>
              {text}
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
