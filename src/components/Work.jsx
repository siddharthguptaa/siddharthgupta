import { useState } from 'react';
import { EMAIL, EMPLOYERS, LAYER_LABELS, PROJECTS, TECH } from '../data.js';
import { useMediaQuery } from '../hooks.js';
import Chip from './Chip.jsx';
import Section from './Section.jsx';
import TechIcon from './TechIcon.jsx';
import { LayersMotif } from './Motifs.jsx';
import { BTN_GHOST } from './ui.js';

const matches = (p, tech, emp) => (tech === 'all' || p.tags.includes(tech)) && (emp === 'all' || p.emp === emp);
const EMP_KEYS = ['all', ...Object.keys(EMPLOYERS)];

function Panel({ project }) {
  const e = EMPLOYERS[project.emp];
  const subject = encodeURIComponent(`Question about ${project.name}`);
  return (
    <div className="rounded-md border border-line border-t-[3px] border-t-accent bg-surface p-6 max-md:p-[18px]">
      <h3 className="mb-1 font-display text-2xl font-bold leading-tight tracking-tight">{project.name}</h3>
      <p className="mb-5 text-[0.97rem] text-muted">
        {e.role} at {e.name} · {e.dates}
      </p>

      {project.purpose && (
        <>
          <h4 className="mb-2 mt-6 font-semibold">What it’s for</h4>
          <p className="m-0">{project.purpose}</p>
        </>
      )}
      {project.role && (
        <>
          <h4 className="mb-2 mt-6 font-semibold">My part</h4>
          <p className="m-0">{project.role}</p>
        </>
      )}
      {project.result && (
        <>
          <h4 className="mb-2 mt-6 font-semibold">Result</h4>
          <p className="m-0">{project.result}</p>
        </>
      )}

      <h4 className="mb-2 mt-6 font-semibold">Stack, layer by layer</h4>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {project.layers.map((layer, i) => (
          <div
            key={LAYER_LABELS[i]}
            className={`rounded border border-line border-t-[3px] p-2.5 text-[0.93rem] leading-snug ${
              layer ? 'border-t-accent' : 'opacity-50'
            }`}
          >
            <small className="mb-0.5 block text-[0.8rem] text-muted">{LAYER_LABELS[i]}</small>
            {layer ? (
              <span className="flex items-center gap-[7px]">
                <TechIcon label={layer} />
                <span>{layer}</span>
              </span>
            ) : (
              '–'
            )}
          </div>
        ))}
      </div>

      <h4 className="mb-2 mt-6 font-semibold">What I do in this role</h4>
      <ul className="mb-5 list-disc pl-[1.15em]">
        {e.points
          .filter((pt) => typeof pt === 'string' || !pt.only || pt.only.includes(project.id))
          .map((pt) => {
            const text = typeof pt === 'string' ? pt : pt.text;
            return (
              <li key={text} className="mb-1.5">
                {text}
              </li>
            );
          })}
      </ul>
      <a href={`mailto:${EMAIL}?subject=${subject}`} className={BTN_GHOST}>
        Ask me about this project
      </a>
    </div>
  );
}

export default function Work({ filter, setFilter }) {
  const { tech, emp } = filter;
  const mobile = useMediaQuery('(max-width: 767px)');
  const [selId, setSelId] = useState(PROJECTS[0].id);
  const [open, setOpen] = useState(true);

  const count = (t, e) => PROJECTS.filter((p) => matches(p, t, e)).length;
  const visible = PROJECTS.filter((p) => matches(p, tech, emp));
  const selected = visible.find((p) => p.id === selId) ?? visible[0];

  // Changing one filter resets the other if the combination would show nothing.
  const pickEmp = (k) => setFilter({ emp: k, tech: count(tech, k) === 0 ? 'all' : tech });
  const pickTech = (t) => setFilter({ tech: t, emp: count(t, emp) === 0 ? 'all' : emp });
  const pickProject = (p) => {
    if (mobile && selected && selected.id === p.id) {
      setOpen(!open);
    } else {
      setSelId(p.id);
      setOpen(true);
    }
  };

  const techName = TECH.find((t) => t[0] === tech)[1];
  const summary =
    tech === 'all' && emp === 'all'
      ? `Showing all ${visible.length} projects.`
      : `Showing ${visible.length} of ${PROJECTS.length} projects${tech !== 'all' ? ` that use ${techName}` : ''}${
          emp !== 'all' ? ` at ${EMPLOYERS[emp].short}` : ''
        }.`;

  return (
    <Section
      id="work"
      motif={<LayersMotif />}
      title="Where I’ve built things"
      note="Most of this work sits inside company systems, so I describe the architecture and my role rather than internal details. Filter by employer or technology, then select a project."
    >
      <div className="mb-5 grid grid-cols-2 gap-2 md:grid-cols-4" role="group" aria-label="Filter by employer">
        {EMP_KEYS.map((k) => {
          const n = count(tech, k);
          const pressed = emp === k;
          return (
            <button
              key={k}
              type="button"
              disabled={n === 0}
              aria-pressed={pressed}
              onClick={() => pickEmp(k)}
              className={`rounded-md border bg-surface px-3.5 py-3 text-left disabled:cursor-not-allowed disabled:opacity-45 ${
                pressed ? 'border-accent shadow-[inset_0_-3px_0_var(--accent)]' : 'border-line hover:border-accent'
              }`}
            >
              <span className="block font-semibold leading-snug">{k === 'all' ? 'All roles' : EMPLOYERS[k].role}</span>
              <span className="mt-0.5 block text-[0.88rem] text-muted">
                {k === 'all' ? `${n} projects` : `${EMPLOYERS[k].short} · ${n} ${n === 1 ? 'project' : 'projects'}`}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mb-3.5 flex flex-wrap gap-2" role="group" aria-label="Filter by technology">
        {TECH.map(([tag, label]) => {
          const n = PROJECTS.filter((p) => matches(p, tag, emp)).length;
          return (
            <Chip key={tag} pressed={tech === tag} disabled={n === 0} count={n} onClick={() => pickTech(tag)}>
              {label}
            </Chip>
          );
        })}
      </div>
      <p role="status" aria-live="polite" className="mb-5 min-h-[1.6em] text-[0.95rem] text-muted">
        {summary}
      </p>

      <div className="grid items-start gap-8 md:grid-cols-[5fr_7fr]">
        <ul className="m-0 list-none border-t border-line p-0">
          {visible.map((p) => {
            const isSel = selected && selected.id === p.id;
            return (
              <li key={p.id} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={Boolean(isSel && (!mobile || open))}
                  onClick={() => pickProject(p)}
                  className={`block w-full border-l-[3px] py-3.5 pl-4 pr-3.5 text-left hover:bg-surface ${
                    isSel ? 'border-accent bg-surface' : 'border-transparent'
                  }`}
                >
                  <span className="block font-semibold">{p.name}</span>
                  <span className="block text-[0.9rem] text-muted">
                    {EMPLOYERS[p.emp].short} · {EMPLOYERS[p.emp].dates}
                  </span>
                </button>
                {mobile && isSel && open && (
                  <div className="px-3 pb-4">
                    <Panel project={p} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        {!mobile && selected && (
          <div className="sticky top-4">
            <Panel project={selected} />
          </div>
        )}
      </div>
    </Section>
  );
}
