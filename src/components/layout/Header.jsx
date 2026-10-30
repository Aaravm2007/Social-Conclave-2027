import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NAVIGATION } from "../../features/landing/data/navigation.js";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [navOutline, setNavOutline] = useState(null);
  const navigationRef = useRef(null);
  const [compactNav, setCompactNav] = useState(false);
  const [darkNav, setDarkNav] = useState(true);
  const [navSurface, setNavSurface] = useState("#004aad");

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
      const headerBounds = navigationRef.current.closest("header").getBoundingClientRect();
      const sampleY = headerBounds.top + headerBounds.height / 2;
      const surface = [
        ...document.querySelectorAll("main > section, main > .ticker, footer"),
      ].find((element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= sampleY && rect.bottom > sampleY;
      });
      let colour = surface
        ? getComputedStyle(surface).backgroundColor
        : getComputedStyle(document.body).backgroundColor;
      let rgb = colour.match(/[\d.]+/g)?.map(Number);
      if (!rgb || rgb[3] === 0) rgb = [252, 251, 255];
      if (surface?.dataset.themeStart && surface.dataset.themeEnd) {
        const channels = (hex) => hex.match(/[a-f\d]{2}/gi).map((part) => parseInt(part, 16));
        const from = channels(surface.dataset.themeStart);
        const to = channels(surface.dataset.themeEnd);
        const distance = Number(getComputedStyle(surface).getPropertyValue("--theme-blend-distance")) || 160;
        const progress = Math.max(0, Math.min(1, (sampleY - surface.getBoundingClientRect().top) / distance));
        rgb = from.map((channel, index) => channel + (to[index] - channel) * progress);
      }
      const hex = `#${rgb.slice(0, 3).map((channel) => Math.round(channel).toString(16).padStart(2, "0")).join("")}`;
      setNavSurface(hex);
      const theme = document.querySelector('meta[name="theme-color"]');
      if (theme && theme.content !== hex) theme.content = hex;
      setDarkNav(rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722 < 140);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateSection);
    };
    const header = navigationRef.current.closest("header");
    const onHeaderSettled = (event) => {
      if (event.target === header && event.propertyName === "top") onScroll();
    };
    updateSection();
    header.addEventListener("transitionend", onHeaderSettled);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      header.removeEventListener("transitionend", onHeaderSettled);
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
      style={{ "--nav-surface": navSurface }}
      className={`site-header floral-navigation${compactNav ? " is-compact" : ""}${darkNav ? " on-dark" : " on-light"}`}
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
