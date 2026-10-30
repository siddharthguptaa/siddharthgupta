import { QUOTES } from '../data.js';
import Section from './Section.jsx';

/** Hidden until you add quotes to QUOTES in src/data.js. */
export default function Testimonials() {
  if (QUOTES.length === 0) return null;
  return (
    <Section id="voices" title="What people say">
      <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
        {QUOTES.map((q) => (
          <blockquote key={q.name} className="m-0 border-l-[3px] border-accent py-1 pl-5">
            <p className="mb-3 font-display text-[1.2rem] leading-snug">“{q.quote}”</p>
            <footer className="text-[0.95rem] text-muted">
              {q.name}, {q.role}
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
