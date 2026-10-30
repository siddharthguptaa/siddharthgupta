import { PHONE, WHATSAPP, WHATSAPP_GREETING } from '../data.js';
import Icon from './Icon.jsx';

/** Floating WhatsApp button, fixed to the bottom-right corner (most visitors are on phones). */
export default function WhatsAppFab() {
  if (!PHONE) return null;
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_GREETING)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-label="Chat on WhatsApp"
      className="wa-fab"
    >
      <Icon name="whatsapp" className="h-[30px] w-[30px]" />
    </a>
  );
}
