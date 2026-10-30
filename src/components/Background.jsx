/** Dot grid and two soft glows behind the whole page. They drift with the pointer. */
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <i className="blob b1" data-blob="-28" />
      <i className="blob b2" data-blob="34" />
    </div>
  );
}
