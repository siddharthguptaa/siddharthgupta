/* Faint line illustrations that sit behind sections and drift as you scroll. */
const base = {
  className: 'motif',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  'aria-hidden': true,
  'data-motif': '',
};

export function NetMotif() {
  return (
    <svg viewBox="0 0 320 240" {...base}>
      <path d="M40 60L120 140L220 80L280 170M120 140L150 210M220 80L250 20M40 60L90 20" />
      <circle cx="40" cy="60" r="10" />
      <circle cx="120" cy="140" r="14" />
      <circle cx="220" cy="80" r="10" />
      <circle cx="280" cy="170" r="12" />
      <circle cx="150" cy="210" r="8" />
      <circle cx="250" cy="20" r="8" />
      <circle cx="90" cy="20" r="8" />
    </svg>
  );
}

export function CogsMotif() {
  return (
    <svg viewBox="0 0 280 240" {...base}>
      <g className="spin">
        <circle cx="90" cy="90" r="56" strokeWidth="16" strokeDasharray="14 11" />
        <circle cx="90" cy="90" r="30" />
      </g>
      <g className="spin rev">
        <circle cx="200" cy="170" r="38" strokeWidth="12" strokeDasharray="10 9" />
        <circle cx="200" cy="170" r="18" />
      </g>
    </svg>
  );
}

export function LayersMotif() {
  return (
    <svg viewBox="0 0 260 260" strokeLinejoin="round" {...base}>
      <polygon points="130,10 250,65 130,120 10,65" />
      <polygon points="130,80 250,135 130,190 10,135" />
      <polygon points="130,150 250,205 130,260 10,205" />
    </svg>
  );
}

export function CircuitMotif() {
  return (
    <svg viewBox="0 0 260 220" {...base}>
      <path d="M10 40H90V100H170V60H250M10 140H60V200H190V160H250M90 100V160" />
      <circle cx="10" cy="40" r="7" />
      <circle cx="250" cy="60" r="7" />
      <circle cx="10" cy="140" r="7" />
      <circle cx="250" cy="160" r="7" />
      <circle cx="90" cy="100" r="5" />
      <circle cx="90" cy="160" r="5" />
    </svg>
  );
}
