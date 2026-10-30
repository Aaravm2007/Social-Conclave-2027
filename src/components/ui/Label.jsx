export default function Label({ children, light = false }) {
  return <p className={`label${light ? " light" : ""}`}>{children}</p>;
}
