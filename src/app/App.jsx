import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import LandingPage from "../features/landing/LandingPage.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <LandingPage />
      <Footer />
    </>
  );
}
