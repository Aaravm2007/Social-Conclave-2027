import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NAVIGATION } from "../../features/landing/data/navigation.js";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [navOutline, setNavOutline] = useState(null);
  const navigationRef = useRef(null);
  const [compactNav, setCompactNav] = useState(false);
  const [darkNav, setDarkNav] = useState(true);

  useEffect(() => {
    let frame = 0;
    const updateSection = () => {
      frame = 0;
      const readingLine = Math.min(window.innerHeight * 0.25, 180);
      let current = NAVIGATION[0][0];
      for (const [id] of NAVIGATION) {
        if (
          document.getElementById(id).getBoundingClientRect().top <= readingLine
        ) {
          current = id;
        }
      }
      setActiveSection(current);
      setCompactNav(
        document.getElementById("top").getBoundingClientRect().bottom <= 110,
      );
      const surface = [
        ...document.querySelectorAll("main > section, main > .ticker, footer"),
      ].find((element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= 50 && rect.bottom > 50;
      });
      let colour = surface
        ? getComputedStyle(surface).backgroundColor
        : getComputedStyle(document.body).backgroundColor;
      let rgb = colour.match(/[\d.]+/g)?.map(Number);
      if (!rgb || rgb[3] === 0) rgb = [246, 245, 239];
      setDarkNav(rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722 < 140);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateSection);
    };
    updateSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const navigation = navigationRef.current;
    const measure = () => {
      const link = navigation.querySelector('[aria-current="location"]');
      if (!link || !navigation.offsetWidth) return;
      setNavOutline({
        width: link.offsetWidth,
        height: link.offsetHeight,
        transform: `translate(${link.offsetLeft}px, ${link.offsetTop}px)`,
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(navigation);
    for (const link of navigation.querySelectorAll("a")) observer.observe(link);
    return () => observer.disconnect();
  }, [activeSection, menu, compactNav]);
  return (
    <header
      className={`site-header${compactNav ? " is-compact" : ""}${darkNav ? " on-dark" : " on-light"}`}
    >
      <a className="wordmark" href="#top" aria-label="Social Conclave home">
        <img src="/images/logos/conclave-favicon.png" alt="" />
        <span>
          Social
          <br />
          Conclave
        </span>
      </a>
      <nav
        ref={navigationRef}
        className={menu ? "navigation open" : "navigation"}
        aria-label="Main navigation"
      >
        <span
          className="nav-outline"
          style={navOutline || { opacity: 0 }}
          aria-hidden="true"
        />
        {NAVIGATION.map(([id, title]) => (
          <a
            href={`#${id}`}
            key={id}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={() => setMenu(false)}
          >
            {title}
          </a>
        ))}
      </nav>
      <a href="#register" className="button header-button">
        Join the conclave
      </a>
      <button
        className="menu-button"
        aria-label={menu ? "Close menu" : "Open menu"}
        aria-expanded={menu}
        onClick={() => setMenu(!menu)}
      >
        {menu ? "Close −" : "Menu +"}
      </button>
    </header>
  );
}
