import { useEffect, useRef } from "react";
import "./page-motion.css";
import Hero from "./sections/Hero.jsx";
import BrandPartners from "./sections/BrandPartners.jsx";
import About from "./sections/About.jsx";
import Agendas from "./sections/Agendas.jsx";
import Experience from "./sections/Experience.jsx";
import Programme from "./sections/Programme.jsx";
import Guests from "./sections/Guests.jsx";
import Collaboration from "./sections/Collaboration.jsx";
import Registration from "./sections/Registration.jsx";
import Faq from "./sections/Faq.jsx";

export default function LandingPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = page.querySelectorAll([
      ".trust-strip > *", ".section-heading", ".about > div",
      ".agenda-card", ".experience > .label", ".experience > h2",
      ".experience-grid > article", ".programme-panel", ".guest-grid > article",
      ".collaboration > .label", ".collaboration > div", ".join > div", ".faq > div",
    ].join(","));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -28px 0px" });
    for (const target of targets) {
      target.classList.add("scroll-reveal");
      observer.observe(target);
    }
    page.classList.add("motion-ready");
    return () => {
      observer.disconnect();
      page.classList.remove("motion-ready");
      for (const target of targets) target.classList.remove("scroll-reveal", "is-revealed");
    };
  }, []);

  return (
    <main id="main" className="landing-page" ref={pageRef}>
      <Hero />
      <BrandPartners />
      <About />
      <Agendas />
      <Experience />
      <Programme />
      <Guests />
      <Collaboration />
      <Registration />
      <Faq />
    </main>
  );
}
