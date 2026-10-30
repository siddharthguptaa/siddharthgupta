import { EDUCATION, SKILLS } from '../data.js';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';
import TechIcon from './TechIcon.jsx';
import { CircuitMotif } from './Motifs.jsx';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" note="Domains: fintech and automotive." motif={<CircuitMotif />}>
      <dl className="m-0">
        {SKILLS.map((g, i) => (
          <Reveal as="div" key={g.group} delay={(i % 6) * 70} className="grid gap-x-8 border-t border-line md:grid-cols-[200px_1fr]">
            <dt className="flex items-center gap-2.5 py-4 font-semibold">
              <Icon name={g.icon} className="h-6 w-6 text-accent" />
              {g.group}
            </dt>
            <dd className="m-0 flex flex-wrap gap-2 py-3 max-md:-mt-2 max-md:pb-3.5">
              {g.items.map((item) => (
                <span key={item} className="inline-flex items-center gap-[7px] rounded-full border border-line bg-surface px-3 py-[3px] text-[0.93rem]">
                  <TechIcon label={item} />
                  {item}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
      <Reveal as="div" className="mt-10 grid gap-1.5">
        {EDUCATION.map((e) => (
          <p key={e.degree} className="m-0">
            <strong>{e.degree}</strong>, {e.dates}
          </p>
        ))}
      </Reveal>
    </Section>
  );
}
