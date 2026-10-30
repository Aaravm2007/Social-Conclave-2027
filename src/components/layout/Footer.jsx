import Label from "../ui/Label.jsx";
import SocialIcon from "../ui/SocialIcon.jsx";
import { CONTACTS } from "../../features/landing/data/content.js";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-top">
        <a className="footer-wordmark" href="#top">
          <img src="/images/logos/conclave-logo.png" alt="Social Conclave" />
          <span>2027</span>
        </a>
        <div className="footer-contact">
          <Label light>Let’s talk</Label>
          {CONTACTS.map((x) => (
            <div key={x.name}>
              <strong>{x.name}</strong>
              <span>{x.role}</span>
              <a href={`mailto:${x.email}`}>{x.email}</a>
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
          </a>
          <a href="#top">Back to top </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© Social Conclave 2027 · MPSTME, NMIMS</span>
        <span>25–28 February · Mumbai, India</span>
        <strong>BE THE CHANGE. ✳</strong>
      </div>
    </footer>
  );
}
