import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AGENDAS,
  SCHEDULE,
  DIGNITARIES,
  FEES,
  CONTACTS,
  LOCATIONS,
} from "./data/content.js";

const Arrow = () => <span aria-hidden="true">↗</span>;
function SocialIcon({ platform }) {
  return platform === "instagram" ? (
    <svg
      className="social-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ) : (
    <svg
      className="social-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.99 0 3.58 1.97 3.58 4.53v5.24Z" />
    </svg>
  );
}
const nav = [
  ["about", "The conclave"],
  ["agenda", "Agendas"],
  ["why", "The experience"],
  ["faq", "FAQs"],
];
const faqs = [
  [
    "What is Social Conclave?",
    "Social Conclave is MPSTME, NMIMS’s social initiative: a space for young people to discuss socio-economic and environmental challenges, meet experts, and develop sustainable solutions. This is our 10th edition.",
  ],
  [
    "When and where is it happening?",
    "25–28 February 2027, in Vile Parle West, Mumbai. Day 1 is at NMIMS; the programme also includes a field visit and sessions at MPSTME. See the four-day programme above for venue details.",
  ],
  [
    "What does the participation fee include?",
    "The early bird participation fee is ₹1,600, inclusive of GST. It covers a delegate kit, meals and refreshments during the event, the social mixer and comedy night, and an official UN Certificate of Participation, as listed in the information booklet.",
  ],
  [
    "How can I join?",
    "Contact the organising team using the email or phone links below for registration details. Online payment is not available on this website.",
  ],
  [
    "Where can I find study guides and submission links?",
    "Study guides and submission links will be shared when available. Each agenda involves a report and a presentation. You can read the full agenda briefs on this page now.",
  ],
];
function Label({ children, light = false }) {
  return <p className={`label${light ? " light" : ""}`}>{children}</p>;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [day, setDay] = useState(0);
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
      let current = nav[0][0];
      for (const [id] of nav) {
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
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        className={`site-header${compactNav ? " is-compact" : ""}${darkNav ? " on-dark" : " on-light"}`}
      >
        <a className="wordmark" href="#top" aria-label="Social Conclave home">
          <img src="/images/conclave-favicon.png" alt="" />
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
          {nav.map(([id, title]) => (
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
          Join the conclave <Arrow />
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
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-topline">
            <span>MPSTME, NMIMS PRESENTS</span>
            <span>MUMBAI, INDIA · 10TH EDITION</span>
          </div>
          <div className="hero-composition">
            <div className="hero-copy">
              <Label light>A generation ready to make a difference</Label>
              <h1 id="hero-title">
                Social
                <br />
                Conclave<span className="hero-year">2027</span>
              </h1>
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
              <br className="desktop-break" /> the conversations that matter
              into action.
            </p>
            <div className="hero-buttons">
              <a className="button cream" href="#register">
                Be part of the change <Arrow />
              </a>
              <a className="text-link" href="#agenda">
                Find your agenda <span>↓</span>
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
        <section
          className="trust-strip"
          aria-label="Organisers and collaborators"
        >
          <span>
            ROOTED IN PURPOSE.
            <br />
            CONNECTED BY IMPACT.
          </span>
          <img
            src="/images/nmims-transparent.png"
            alt="NMIMS — Mukesh Patel School of Technology Management and Engineering"
          />
          <img
            className="impact-logo"
            src="/images/enhanced/social-impact.png"
            width="1024"
            height="1024"
            decoding="async"
            alt="Social Impact"
          />
          <img
            className="academic-logo"
            src="/images/academic-impact.png"
            alt="United Nations Academic Impact"
          />
        </section>
        <section id="about" className="section about">
          <div>
            <Label>More than a conference</Label>
            <h2>
              The future needs
              <br />
              your <em>point of view.</em>
            </h2>
          </div>
          <div className="about-intro">
            <p>
              Some conversations change the way you see the world. This is where
              they begin.
            </p>
            <p>
              Social Conclave brings young people together to explore the
              challenges shaping our planet — and work towards solutions that
              reach beyond the room.
            </p>
            <p>
              An initiative of MPSTME, NMIMS. A community of curious minds. A
              shared belief that change starts with showing up.
            </p>
            <a className="text-link dark" href="#agenda">
              Explore what we stand for <Arrow />
            </a>
          </div>
          <div className="about-photo">
            <img
              src="/images/enhanced/conclave-960.webp"
              srcSet="/images/enhanced/conclave-960.webp 960w, /images/enhanced/conclave-1920.webp 1920w"
              sizes="(min-width: 701px) 45vw, 88vw"
              width="1920"
              height="683"
              decoding="async"
              alt="Social Conclave booklet and materials at a previous edition"
              loading="lazy"
            />
            <span>Different perspectives. One shared future.</span>
          </div>
          <div className="about-numbers">
            <div>
              <strong>
                10<sup>th</sup>
              </strong>
              <span>Edition. A continuing movement.</span>
            </div>
            <div>
              <strong>600+</strong>
              <span>Delegates across past editions.</span>
            </div>
            <div>
              <strong>05</strong>
              <span>Agendas. Real questions to solve.</span>
            </div>
          </div>
        </section>
        <section id="agenda" className="section agendas">
          <div className="section-heading">
            <div>
              <Label>Choose your conversation</Label>
              <h2>
                Five agendas.
                <br />
                <em>Infinite possibilities.</em>
              </h2>
            </div>
            <p>
              From the cities we build to the waste we leave behind. Find the
              question you can’t stop thinking about.
            </p>
          </div>
          <div className="agenda-grid">
            {AGENDAS.map((a, i) => (
              <article className={`agenda-card agenda-${i}`} key={a.num}>
                <div className="agenda-art">
                  <img
                    src={`/images/enhanced/agenda-${i}-800.webp`}
                    srcSet={`/images/enhanced/agenda-${i}-800.webp 800w, /images/enhanced/agenda-${i}-1600.webp 1600w`}
                    sizes="(min-width: 1051px) 28vw, (min-width: 701px) 43vw, 88vw"
                    width="1600"
                    height="840"
                    decoding="async"
                    loading="lazy"
                    alt={
                      [
                        "Flowing urban architecture",
                        "Industrial smoke and dark flowing ribbons",
                        "Noodles and flowing gold ribbons",
                        "Colourful bird in flight",
                        "Waste collection and flowing silver ribbons",
                      ][i]
                    }
                  />
                  <span>AGENDA / {a.num}</span>
                </div>
                <div className="agenda-content">
                  <h3>{a.title}</h3>
                  <p>{a.tagline}</p>
                  <details>
                    <summary>
                      Explore the agenda <span aria-hidden="true">+</span>
                    </summary>
                    <div className="agenda-brief">
                      {a.details.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                      <a href="#register" className="text-link dark">
                        Bring your perspective <Arrow />
                      </a>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="experience section" id="why">
          <Label light>Leave with more than memories</Label>
          <h2>
            Come for the ideas.
            <br />
            <em>Stay for everything else.</em>
          </h2>
          <div className="experience-grid">
            <article className="prize">
              <span>THE STAKES ARE REAL</span>
              <strong>
                ₹2.5<span>LAKH</span>
              </strong>
              <p>
                Prize pool for ideas with the potential to make a difference.
              </p>
            </article>
            <article>
              <span className="experience-icon">↗</span>
              <h3>Beyond the classroom.</h3>
              <p>
                Field visits, a mock panchayat, and conversations with NGOs and
                experts. Get closer to the issues you’re here to solve.
              </p>
            </article>
            <article>
              <span className="experience-icon">✳</span>
              <h3>Find your people.</h3>
              <p>
                New perspectives by day. Comedy night and a social mixer after
                hours. Make connections that outlast the conclave.
              </p>
            </article>
            <article>
              <span className="experience-icon" aria-hidden="true">
                ↗
              </span>
              <h3>Take the experience forward.</h3>
              <p>
                An exclusive delegate kit and a UN Certificate of Participation
                to mark your contribution.
              </p>
            </article>
          </div>
        </section>
        <section id="schedule" className="section programme">
          <div className="section-heading">
            <div>
              <Label>Make four days count</Label>
              <h2>
                Step into
                <br />
                <em>the experience.</em>
              </h2>
            </div>
            <p>
              25–28 February 2027
              <br />
              Vile Parle West, Mumbai
            </p>
          </div>
          <div className="day-tabs" role="tablist" aria-label="Event days">
            {SCHEDULE.map((d, i) => (
              <button
                key={d.day}
                role="tab"
                id={`day-tab-${i}`}
                aria-selected={day === i}
                aria-controls="day-panel"
                tabIndex={day === i ? 0 : -1}
                onKeyDown={(event) => {
                  const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
                  if (!keys.includes(event.key)) return;
                  event.preventDefault();
                  const next =
                    event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? 3
                        : (i + (event.key === "ArrowRight" ? 1 : 3)) % 4;
                  setDay(next);
                  event.currentTarget.parentElement.children[next].focus();
                }}
                onClick={() => setDay(i)}
              >
                <span>{d.day}</span>
                <strong>{25 + i} FEB</strong>
              </button>
            ))}
          </div>
          <div
            className="programme-panel"
            id="day-panel"
            role="tabpanel"
            aria-labelledby={`day-tab-${day}`}
          >
            <div className="day-intro">
              <span>0{day + 1} / 04</span>
              <h3>
                {
                  [
                    "The conversation starts.",
                    "Out of the room. Into the world.",
                    "Challenge your perspective.",
                    "Turn ideas into possibilities.",
                  ][day]
                }
              </h3>
              <p>{SCHEDULE[day].venue}</p>
            </div>
            <ol className="timeline">
              {SCHEDULE[day].items.map((x) => (
                <li key={x.time}>
                  <time>{x.time}</time>
                  <h4>{x.title}</h4>
                  <span aria-hidden="true">↗</span>
                </li>
              ))}
            </ol>
          </div>
          <details className="venue-details">
            <summary>
              Plan your visit — venues & addresses <span>+</span>
            </summary>
            <div>
              {LOCATIONS.map((x) => (
                <article key={x.label}>
                  <h3>{x.label}</h3>
                  <p>{x.venue}</p>
                </article>
              ))}
            </div>
          </details>
        </section>
        <section id="dignitaries" className="section guests">
          <div className="section-heading">
            <div>
              <Label>A legacy of perspectives</Label>
              <h2>
                They’ve been
                <br />
                <em>part of the conversation.</em>
              </h2>
            </div>
            <p>
              A few of the voices who have joined past editions. The 2027
              line-up will be announced separately.
            </p>
          </div>
          <div className="guest-grid">
            {DIGNITARIES.map((p, i) => (
              <article key={p.name}>
                <img
                  src={`/images/enhanced/guest-${i}-512.webp`}
                  srcSet={`/images/enhanced/guest-${i}-512.webp 512w, /images/enhanced/guest-${i}-1024.webp 1024w`}
                  sizes="(min-width: 1051px) 17vw, 28vw"
                  width="1024"
                  height="1024"
                  decoding="async"
                  alt={p.name}
                  loading="lazy"
                />
                <h3>{p.name}</h3>
                <p>{p.role}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="collaboration section">
          <Label>Connected across borders</Label>
          <div>
            <h2>
              A wider world.
              <br />
              <em>A shared purpose.</em>
            </h2>
            <p>
              Our collaboration with the Balipara Foundation brings biodiversity
              conservation, ecological restoration, and sustainable livelihoods
              into the conversation — connecting delegates with perspectives
              beyond borders.
            </p>
          </div>
          <span className="collab-signature">
            SOCIAL CONCLAVE <span>×</span> BALIPARA FOUNDATION
          </span>
        </section>
        <section id="register" className="section join">
          <div>
            <Label light>Your perspective belongs here</Label>
            <h2>
              Don’t just watch
              <br />
              the world change.
              <br />
              <em>Be part of it.</em>
            </h2>
            <p>
              Four days. Five agendas. A room full of people
              <br />
              who believe we can do better, together.
            </p>
          </div>
          <div className="join-card">
            <span className="label">EARLY BIRD PARTICIPATION</span>
            <p className="join-price">
              ₹1,600<span>/ delegate</span>
            </p>
            <p className="price-note">Inclusive of GST · All four days</p>
            <ul>
              {FEES.inclusions.map((x) => (
                <li key={x}>
                  <span aria-hidden="true">↗</span>
                  {x}
                </li>
              ))}
            </ul>
            <a
              className="button"
              href={`mailto:${CONTACTS[0].email}?subject=Social%20Conclave%202027%20Registration%20Enquiry`}
            >
              Enquire about registration <Arrow />
            </a>
            <p className="join-note">
              Connect directly with our organising team.
            </p>
          </div>
        </section>
        <section id="faq" className="section faq">
          <div>
            <Label>Before you join</Label>
            <h2>
              A few things
              <br />
              <em>you might ask.</em>
            </h2>
          </div>
          <div>
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <footer id="contact">
        <div className="footer-top">
          <a className="footer-wordmark" href="#top">
            <img src="/images/conclave-logo.png" alt="Social Conclave" />
            <span>2027</span>
          </a>
          <div className="footer-contact">
            <Label light>Let’s talk</Label>
            {CONTACTS.map((x) => (
              <div key={x.name}>
                <strong>{x.name}</strong>
                <span>{x.role}</span>
                <a href={`mailto:${x.email}`}>
                  {x.email} <Arrow />
                </a>
                <a href={`tel:${x.phone.replace(/\s/g, "")}`}>{x.phone}</a>
              </div>
            ))}
          </div>
          <div className="footer-social">
            <Label light>Follow the conversation</Label>
            <a
              href="https://www.instagram.com/social_conclave/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-link-label">
                <SocialIcon platform="instagram" />
                Instagram
              </span>{" "}
              <Arrow />
            </a>
            <a
              href="https://www.linkedin.com/company/socialconclave/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-link-label">
                <SocialIcon platform="linkedin" />
                LinkedIn
              </span>{" "}
              <Arrow />
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Social Conclave 2027 · MPSTME, NMIMS</span>
          <span>25–28 February · Mumbai, India</span>
          <strong>BE THE CHANGE. ✳</strong>
        </div>
      </footer>
    </>
  );
}
