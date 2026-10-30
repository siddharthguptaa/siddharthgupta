import { HABITS } from '../data.js';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';
import IconTile from './IconTile.jsx';

export default function Delivery() {
  return (
    <Section id="delivery" title="Why teams can rely on me" note="Habits from leading delivery and supporting clients, and I still use them.">
      <ul className="m-0 grid list-none gap-x-12 p-0 md:grid-cols-2">
        {HABITS.map((h, i) => (
          <Reveal as="li" key={h.title} delay={(i % 6) * 70} className="group border-t border-line py-5">
            <div className="mb-3.5">
              <IconTile name={h.icon} />
            </div>
            <h3 className="mb-1 font-display text-[1.2rem] font-bold tracking-tight">{h.title}</h3>
            <p className="m-0 max-w-[30em] text-muted">{h.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
