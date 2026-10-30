import { SERVICES } from '../data.js';
import IconTile from './IconTile.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';
import { CogsMotif } from './Motifs.jsx';
import { LINK_BTN } from './ui.js';

export default function Services({ onAsk }) {
  return (
    <Section
      id="services"
      motif={<CogsMotif />}
      title="How I can help"
      note="Ways I can support and collaborate with your team. Open one to see what it covers."
    >
      <div className="border-b border-line">
        {SERVICES.map((s, i) => (
          <Reveal as="div" key={s.title} delay={(i % 6) * 70}>
            {/* name="svc" makes the accordion open one item at a time */}
            <details name="svc" className="border-t border-line">
              <summary className="group flex cursor-pointer list-none items-center gap-3.5 py-5 font-display text-xl font-bold tracking-tight hover:text-accent">
                <IconTile name={s.icon} size="sm" />
                <span className="flex-1">{s.title}</span>
                <span className="plus text-[1.6rem] font-normal leading-none text-accent" aria-hidden="true" />
              </summary>
              <div className="max-w-[42em] pb-[22px]">
                <p className="mb-3 text-muted">{s.text}</p>
                <button type="button" className={LINK_BTN} onClick={() => onAsk(s.title)}>
                  Talk to me about this
                </button>
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
