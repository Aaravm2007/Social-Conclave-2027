import { useEffect, useRef } from "react";
import "./floral-accents.css";

export default function FloralAccent({ variant = "bloom" }) {
  const accentRef = useRef(null);

  useEffect(() => {
    const accent = accentRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      accent.classList.toggle("is-in-view", entry.isIntersecting);
    }, { rootMargin: "80px" });
    observer.observe(accent);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={accentRef} className={`floral-accent floral-accent--${variant}`} aria-hidden="true">
      <img src="/images/hero/floral-page-bloom.webp" alt="" width="900" height="600" loading="lazy" decoding="async" />
    </span>
  );
}
