export default function Chip({ pressed, onClick, disabled, count, children }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-[0.95rem] transition disabled:cursor-not-allowed disabled:opacity-40 ${
        pressed ? 'border-accent bg-accent text-on-accent' : 'border-line hover:border-accent'
      }`}
    >
      {children}
      {count !== undefined && <b className={`ml-1.5 font-medium ${pressed ? '' : 'text-muted'}`}>{count}</b>}
    </button>
  );
}
