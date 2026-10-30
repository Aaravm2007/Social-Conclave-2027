import { useEffect, useRef } from "react";
import "./floral-hero.css";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      hero.classList.toggle("is-offscreen", !entry.isIntersecting);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={heroRef} className="hero floral-hero" id="top" aria-labelledby="hero-title">
        <div className="floral-hero-art" aria-hidden="true" />
        <div className="floral-partners" aria-label="Organisers and collaborators">
          <span className="floral-nmims" role="img" aria-label="NMIMS MPSTME">
            <img src="/images/logos/nmims-transparent.png" width="2098" height="308" alt="" />
            <img className="floral-nmims-crest" src="/images/logos/nmims-transparent.png" width="2098" height="308" alt="" />
          </span>
          <span aria-hidden="true" />
          <a href="#top" aria-label="Social Conclave home">
            <img src="/images/hero/floral-conclave.png" width="300" height="99" alt="Social Conclave" />
          </a>
          <span aria-hidden="true" />
          <img src="/images/hero/floral-unai.png" width="360" height="121" alt="United Nations Academic Impact" />
        </div>
        <div className="floral-hero-content">
          <p className="floral-edition">Mumbai, India · The tenth edition</p>
          <h1 id="hero-title"><span>Social</span><span>Conclave</span><span className="floral-title-year">27'</span></h1>
          <p className="floral-tagline">Bigger conversations.<br />Greater impact.</p>
          <div className="floral-date" aria-label="25 to 28 February 2027">
            <p aria-hidden="true">25 <b>/</b> 26 <b>/</b> 27 <b>/</b> 28</p>
            <span>February 2027</span>
          </div>
        </div>
        <div className="floral-footnote">
          <p>MPSTME, NMIMS<br />Vile Parle West, Mumbai</p>
          <p>Four days. Five agendas.<br />One shared future.</p>
        </div>
      </section>
      <div className="ticker" aria-label="Discuss. Discover. Make a difference.">
        <span>DISCUSS</span><b>✳</b><span>DISCOVER</span><b>✳</b>
        <span>MAKE A DIFFERENCE</span><b>✳</b><span>BE THE CHANGE</span><b>✳</b>
      </div>
    </>
  );
}
