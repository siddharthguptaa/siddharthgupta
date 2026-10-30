import Reveal from './Reveal.jsx';

/** A page section with a heading and an optional intro line. */
export default function Section({ id, title, note, motif, children, className = '' }) {
  return (
    <section id={id} className={`relative isolate border-t border-line py-[72px] max-md:py-[52px] ${className}`}>
      {motif && <div className="pointer-events-none absolute inset-0 mx-auto max-w-page px-6">{motif}</div>}
      <div className="relative mx-auto max-w-page px-6">
        <Reveal as="h2" className="mb-3 font-display text-[length:clamp(1.7rem,4vw,2.4rem)] font-bold leading-[1.12] tracking-[-0.02em]">
          {title}
        </Reveal>
        {note && (
          <Reveal as="p" className="mb-8 max-w-[40em] text-muted">
            {note}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
