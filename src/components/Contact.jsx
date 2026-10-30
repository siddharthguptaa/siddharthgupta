import { useState } from 'react';
import { EMAIL, FORM_ENDPOINT, INTENTS, LINKS, PHONE, RESUME_FILE, WHATSAPP } from '../data.js';
import Chip from './Chip.jsx';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';
import { BTN_GHOST, BTN_PRIMARY, LINK_BTN } from './ui.js';

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD =
  'mb-5 w-full rounded-md border border-line bg-bg px-3 py-[11px] font-body text-ink focus-visible:outline-offset-1';

export default function Contact({ message, setMessage }) {
  const [intent, setIntent] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [honey, setHoney] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // { text, error }
  const [note, setNote] = useState(EMAIL);

  const subject = `${intent || 'Hello'}${name ? ` – ${name}` : ''}`;
  const body = `${message}${name ? `\n\n${name}` : ''}${email.trim() ? `\nReply to: ${email.trim()}` : ''}`;
  const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const waText = `${intent || 'Hello'}${name ? ` – ${name}` : ''}${message ? `\n\n${message}` : ''}`;
  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waText)}`;

  const send = async () => {
    if (!message.trim()) {
      setStatus({ text: 'Please write a short message first.', error: true });
      return;
    }
    if (!EMAIL_OK.test(email.trim())) {
      setStatus({ text: 'Please add your email address so I can reply.', error: true });
      return;
    }
    setSending(true);
    setStatus({ text: 'Sending…', error: false });
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name.trim() || '(no name given)',
          email: email.trim(),
          topic: intent || 'Not specified',
          message: message.trim(),
          _subject: `Portfolio message: ${intent || 'Hello'}${name ? ` from ${name.trim()}` : ''}`,
          _template: 'table',
          _captcha: 'false',
          _honey: honey,
        }),
      });
      const data = await res.json();
      if (!res.ok || String(data.success) !== 'true') throw new Error('not sent');
      setStatus({ text: `Thank you! Your message is on its way. I’ll reply to ${email.trim()}.`, error: false });
      setMessage('');
    } catch (e) {
      setStatus({
        text: 'I couldn’t send that directly from here, so I’m opening your email app with the message ready to send. If nothing opens, use WhatsApp or the “open it in your email app” link below.',
        error: true,
      });
      setTimeout(() => {
        window.location.href = href;
      }, 1200);
    } finally {
      setSending(false);
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setNote(`Copied: ${EMAIL}`);
    } catch (e) {
      setNote(`Copy was blocked here. The address is ${EMAIL}`);
    }
  };

  return (
    <Section id="contact" title="Tell me the problem you’re trying to solve.">
      <svg viewBox="0 0 260 220" aria-hidden="true" className="absolute right-6 top-0 hidden w-[260px] lg:block">
        <path className="wire" d="M30 190 H100 V110 H170 V50 H222" />
        <circle cx="30" cy="190" r="10" fill="var(--accent)" />
        <rect x="90" y="100" width="20" height="20" transform="rotate(45 100 110)" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
        <rect x="160" y="40" width="20" height="20" transform="rotate(45 170 50)" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
        <circle cx="236" cy="50" r="14" fill="var(--accent)" />
        <path d="M229 50l5 5 9-10" fill="none" stroke="var(--on-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <Reveal as="p" className="max-w-[38em] text-muted">
        Pick what this is about, add a few lines and your email, and send it. The message lands straight in my
        inbox. Based in Noida, India, and happy to work with remote teams.
      </Reveal>

      {PHONE && (
        <Reveal
          as="div"
          id="call"
          className="callbox mt-7 grid max-w-[640px] scroll-mt-6 grid-cols-[auto_1fr] items-center gap-x-[18px] gap-y-4 rounded-md border border-l-4 border-line border-l-accent bg-surface px-6 py-5 max-md:p-[18px] md:grid-cols-[auto_1fr_auto]"
        >
          <span className="grid h-[46px] w-[46px] place-items-center rounded-xl border border-line text-accent">
            <Icon name="phone" />
          </span>
          <div>
            <h3 className="m-0 font-display text-[1.2rem] font-bold">Prefer to talk?</h3>
            <p className="m-0 text-[0.97rem] text-muted">Call me directly to talk through your project or role.</p>
          </div>
          <a href={`tel:${PHONE.replace(/\s/g, '')}`} className={`${BTN_PRIMARY} col-span-full justify-center md:col-span-1`}>
            Call {PHONE}
          </a>
        </Reveal>
      )}

      <Reveal as="div" id="message-box" className="msgbox mt-7 max-w-[640px] scroll-mt-6 rounded-md border border-line bg-surface p-6 max-md:p-[18px]">
        <span id="intent-label" className="mb-2 block text-[0.97rem] font-semibold">
          What is this about?
        </span>
        <div className="mb-5 flex flex-wrap gap-2" role="group" aria-labelledby="intent-label">
          {INTENTS.map((t) => (
            <Chip key={t} pressed={intent === t} onClick={() => setIntent(intent === t ? '' : t)}>
              {t}
            </Chip>
          ))}
        </div>

        <label htmlFor="nm" className="mb-2 block text-[0.97rem] font-semibold">
          Your name
        </label>
        <input id="nm" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={FIELD} />

        <label htmlFor="em" className="mb-2 block text-[0.97rem] font-semibold">
          Your email, so I can reply
        </label>
        <input id="em" type="email" autoComplete="email" inputMode="email" value={email} onChange={(e) => setEmail(e.target.value)} className={FIELD} />
        {/* Hidden trap field: real visitors never fill it in; spam bots do. */}
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honey} onChange={(e) => setHoney(e.target.value)} className="absolute -left-[9999px] h-px w-px opacity-0" />

        <label htmlFor="msg" className="mb-2 block text-[0.97rem] font-semibold">
          What are you building, and by when?
        </label>
        <textarea id="msg" value={message} onChange={(e) => setMessage(e.target.value)} className={`${FIELD} min-h-[120px] resize-y`} />

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3.5">
          <button type="button" onClick={send} disabled={sending} className={`${BTN_PRIMARY} disabled:cursor-wait disabled:opacity-60`}>
            <Icon name="mail" className="h-5 w-5" />
            Send message
          </button>
          {PHONE && (
            <a href={waHref} target="_blank" rel="noopener noreferrer" className={BTN_GHOST}>
              <Icon name="whatsapp" className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          )}
        </div>
        {status && (
          <p
            role="status"
            aria-live="polite"
            className={`mt-3.5 rounded-r-md border-l-[3px] bg-bg px-3 py-2.5 text-[0.97rem] ${status.error ? 'border-signal' : 'border-accent'}`}
          >
            {status.text}
          </p>
        )}
        <p className="mt-3.5 break-words text-[0.93rem] text-muted">
          Or{' '}
          <a href={href} className={LINK_BTN}>
            open it in your email app
          </a>{' '}
          ·{' '}
          <button type="button" onClick={copy} className={LINK_BTN}>
            copy my email address
          </button>
        </p>
        <p role="status" aria-live="polite" className="mt-1 break-words text-[0.93rem] text-muted">
          {note}
        </p>

        {(LINKS.linkedin || LINKS.github || PHONE) && (
          <p className="mt-4 flex flex-wrap gap-x-[22px] gap-y-2 border-t border-line pt-4 text-[0.97rem]">
            {LINKS.linkedin && (
              <a className="text-accent underline underline-offset-[3px]" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
            {LINKS.github && (
              <a className="text-accent underline underline-offset-[3px]" href={LINKS.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            <a className="text-accent underline underline-offset-[3px]" href={RESUME_FILE} download={RESUME_FILE} target="_blank" rel="noopener">
              Resume (PDF)
            </a>
            {PHONE && (
              <a className="text-accent underline underline-offset-[3px]" href={`tel:${PHONE.replace(/\s/g, '')}`}>
                {PHONE}
              </a>
            )}
          </p>
        )}
      </Reveal>
    </Section>
  );
}
