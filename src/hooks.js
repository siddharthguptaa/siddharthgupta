import { useEffect, useState } from 'react';

/** True while the media query matches, e.g. useMediaQuery('(max-width: 767px)'). */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

/** Moves anything marked data-blob, data-glyph or data-motif with the pointer and scroll.
 *  Does nothing for visitors who prefer reduced motion. */
export function useParallax() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let tx = 0;
    let ty = 0;
    let px = 0;
    let py = 0;
    let queued = false;

    const frame = () => {
      queued = false;
      px += (tx - px) * 0.1;
      py += (ty - py) * 0.1;
      document.querySelectorAll('[data-glyph]').forEach((el) => {
        const d = parseFloat(el.dataset.glyph) || 0.6;
        el.style.transform = `translate3d(${(px * d * 22).toFixed(1)}px, ${(py * d * 22).toFixed(1)}px, 0)`;
      });
      document.querySelectorAll('[data-blob]').forEach((el) => {
        const k = parseFloat(el.dataset.blob) || 0;
        el.style.transform = `translate3d(${(px * k).toFixed(1)}px, ${(py * k).toFixed(1)}px, 0)`;
      });
      document.querySelectorAll('[data-motif]').forEach((el) => {
        const r = el.parentNode.getBoundingClientRect();
        const off = (r.top + r.height / 2 - window.innerHeight / 2) * -0.07;
        el.style.transform = `translate3d(${(px * -10).toFixed(1)}px, ${off.toFixed(1)}px, 0)`;
      });
      if (Math.abs(tx - px) > 0.002 || Math.abs(ty - py) > 0.002) request();
    };
    const request = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(frame);
      }
    };
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
      request();
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    request();
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
    };
  }, []);
}
