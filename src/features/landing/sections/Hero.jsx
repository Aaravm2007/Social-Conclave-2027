import Label from "../../../components/ui/Label.jsx";
import HeroTitle from "./HeroTitle.jsx";

export default function Hero() {
  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-topline">
          <span>MPSTME, NMIMS PRESENTS</span>
          <span>MUMBAI, INDIA · 10TH EDITION</span>
        </div>
        <div className="hero-composition">
          <div className="hero-copy">
            <Label light>A generation ready to make a difference</Label>
            <HeroTitle />
            <p className="hero-tagline">
              Big ideas.
              <br />
              Real-world impact.
            </p>
          </div>
        </div>
        <div className="hero-bottom">
          <p>
            Four days to question, connect, and turn
            <br className="desktop-break" /> the conversations that matter into
            action.
          </p>
          <div className="hero-buttons">
            <a className="button cream" href="#register">
              Be part of the change
            </a>
            <a className="text-link" href="#agenda">
              Find your agenda
            </a>
          </div>
          <div className="hero-date">
            <strong>25—28 FEB</strong>
            <span>2027 / VILE PARLE WEST, MUMBAI</span>
          </div>
        </div>
      </section>
      <div
        className="ticker"
        aria-label="Discuss. Discover. Make a difference."
      >
        <span>DISCUSS</span>
        <b>✳</b>
        <span>DISCOVER</span>
        <b>✳</b>
        <span>MAKE A DIFFERENCE</span>
        <b>✳</b>
        <span>BE THE CHANGE</span>
        <b>✳</b>
      </div>
    </>
  );
}
