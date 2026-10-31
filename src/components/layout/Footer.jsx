import Label from "../ui/Label.jsx";
import SocialIcon from "../ui/SocialIcon.jsx";
import { CONTACT_EMAIL } from "../../features/landing/data/content.js";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-top">
        <a className="footer-wordmark" href="#top">
          <div className="footer-logo-mark">
            <img src="/images/logos/conclave-logo.png" alt="Social Conclave" />
            <img className="footer-logo-lettering" src="/images/logos/conclave-logo.png" alt="" aria-hidden="true" />
          </div>
          <span>2027</span>
        </a>
        <div className="footer-contact">
          <Label light>Let’s talk</Label>
          <div>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <div className="footer-address">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <address>
                Mukesh Patel School of Technology Management and Engineering, Bhakti Vedant Swami Marg, Near Cooper Hospital, JVPD Scheme, Vile Parle West, Mumbai, Maharashtra 400056.
              </address>
            </div>
          </div>
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