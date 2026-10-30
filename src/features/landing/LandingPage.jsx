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
  return (
    <main id="main">
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
