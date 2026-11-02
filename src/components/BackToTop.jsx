import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';

/** Round button above the WhatsApp button. Appears once the visitor has scrolled down. */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button type="button" aria-label="Back to top" onClick={goTop} className={`totop ${show ? 'show' : ''}`}>
      <Icon name="arrowup" className="h-6 w-6" />
    </button>
  );
}
