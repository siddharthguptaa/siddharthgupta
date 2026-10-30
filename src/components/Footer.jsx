import { PROFILE } from '../data.js';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-page px-6 pb-10 pt-7 text-[0.93rem] text-muted">
        © {new Date().getFullYear()} {PROFILE.name}
      </div>
    </footer>
  );
}
