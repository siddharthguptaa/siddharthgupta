import Icon from './Icon.jsx';

/** Rounded icon square. Put `group` on a parent so it reacts to hover. */
export default function IconTile({ name, size = 'lg' }) {
  const dim = size === 'lg' ? 'h-[46px] w-[46px]' : 'h-10 w-10';
  return (
    <span
      className={`${dim} grid shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent transition duration-200 group-hover:-translate-y-[3px] group-hover:-rotate-[5deg] group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent`}
    >
      <Icon name={name} />
    </span>
  );
}
