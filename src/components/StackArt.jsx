import { useState } from 'react';
import { LAYERS, PROJECTS } from '../data.js';
import { LINK_BTN } from './ui.js';

// Decorative chips that float around the illustration and follow the pointer.
const CHIPS = [
  { text: '{ }', depth: 0.9, style: { left: '2%', top: '3%' } },
  { text: '</>', depth: 0.5, style: { right: '2%', top: '9%' } },
  { text: 'SQL', depth: 1.1, style: { left: '-3%', top: '46%' } },
  { text: 'API', depth: 0.7, style: { right: '-3%', top: '56%' } },
  { text: 'C#', depth: 0.4, style: { left: '9%', bottom: '1%' } },
  { text: 'JWT', depth: 0.8, style: { right: '11%', bottom: '-1%' } },
];

const countFor = (tag) => PROJECTS.filter((p) => p.tags.includes(tag)).length;

/** Isometric stack of the four layers. Hover, focus or tap a layer to read about it. */
export default function StackArt({ onShowTech }) {
  const [sel, setSel] = useState(0);
  const chosen = LAYERS[sel];
  const drawOrder = LAYERS.map((_, i) => i).reverse(); // bottom layer first, so upper layers overlap it

  return (
    <figure className="art-glow relative m-0">
      <div className="floaters" aria-hidden="true">
        {CHIPS.map((c) => (
          <span key={c.text} className="glyph" data-glyph={c.depth} style={c.style}>
            <span className="gi">{c.text}</span>
          </span>
        ))}
      </div>
      <svg
        viewBox="0 0 320 300"
        role="group"
        aria-label="The four layers of my stack. Select a layer to see what I do there."
        className="relative mx-auto block w-full max-w-[340px] overflow-visible"
      >
        <line className="spine" x1="160" y1="20" x2="160" y2="290" />
        {drawOrder.map((i) => {
          const layer = LAYERS[i];
          const y = 6 + i * 62;
          return (
            <g
              key={layer.tag}
              className={`layer ${sel === i ? 'is-sel' : ''}`}
              tabIndex={0}
              role="button"
              aria-label={`${layer.name}, used in ${countFor(layer.tag)} projects`}
              onMouseEnter={() => setSel(i)}
              onFocus={() => setSel(i)}
              onClick={() => setSel(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSel(i);
                }
              }}
            >
              <polygon className="sl" points={`60,${y + 48} 160,${y + 96} 160,${y + 110} 60,${y + 62}`} />
              <polygon className="sr" points={`160,${y + 96} 260,${y + 48} 260,${y + 62} 160,${y + 110}`} />
              <polygon className="top" points={`160,${y} 260,${y + 48} 160,${y + 96} 60,${y + 48}`} />
              <text className="lt" x="160" y={y + 54} textAnchor="middle">
                {layer.short}
              </text>
            </g>
          );
        })}
      </svg>

      <figcaption aria-live="polite" className="relative mx-auto mt-3.5 min-h-[6.5em] max-w-[340px]">
        <strong className="block font-display text-[1.15rem]">{chosen.name}</strong>
        <span className="mb-1 block text-[0.95rem] text-muted">{chosen.text}</span>
        <button type="button" className={LINK_BTN} onClick={() => onShowTech(chosen.tag)}>
          See the {countFor(chosen.tag)} projects that use it
        </button>
      </figcaption>
    </figure>
  );
}
