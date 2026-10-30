import { useState } from 'react';
import { PROBLEMS, PROBLEM_GROUPS } from '../data.js';
import Chip from './Chip.jsx';
import IconTile from './IconTile.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';
import { NetMotif } from './Motifs.jsx';

export default function Problems() {
  const [group, setGroup] = useState(PROBLEM_GROUPS[0].id);
  const shown = PROBLEMS.filter((p) => p.group === group);

  return (
    <Section
      id="problems"
      motif={<NetMotif />}
      title="Problems I like to take on"
      note="The problems businesses most often bring to a developer, then the bigger ones in fintech, automotive and software delivery. Each is how I’d approach it, starting from the logic."
    >
      <div className="mb-3.5 flex flex-wrap gap-2" role="group" aria-label="Choose an industry">
        {PROBLEM_GROUPS.map((g) => (
          <Chip
            key={g.id}
            pressed={group === g.id}
            count={PROBLEMS.filter((p) => p.group === g.id).length}
            onClick={() => setGroup(g.id)}
          >
            {g.label}
          </Chip>
        ))}
      </div>
      <ul className="m-0 grid list-none gap-x-12 p-0 md:grid-cols-2">
        {shown.map((p, i) => (
          // key includes the group so the items re-animate when you switch tabs
          <Reveal as="li" key={`${group}-${p.title}`} delay={(i % 6) * 70} className="group border-t border-line py-5">
            <div className="mb-3.5">
              <IconTile name={p.icon} />
            </div>
            <h3 className="mb-1 font-display text-[1.2rem] font-bold tracking-tight">{p.title}</h3>
            <p className="m-0 max-w-[30em] text-muted">{p.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
