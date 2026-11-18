import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RegisterModal from "./components/RegisterModal";
import { TrustedBy, Stats, ProblemSolution, HowItWorks, Integrations, Testimonials, FinalCta } from "./components/Sections";

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button className={`nx-top ${show ? "show" : ""}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <i className="bi bi-arrow-up" />
    </button>
  );
}

// Starts from the saved choice, else the visitor's system setting.
function initialTheme() {
  try { const saved = localStorage.getItem("nx-theme"); if (saved) return saved; } catch { /* storage unavailable */ }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState(initialTheme);
  const [modal, setModal] = useState(null); // null, "register" or "login"
  const closeModal = useCallback(() => setModal(null), []);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme); // Bootstrap 5.3 theme switch
    try { localStorage.setItem("nx-theme", theme); } catch { /* storage unavailable */ }
  }, [theme]);

  return (
    <div id="top">
      <Navbar theme={theme} onTheme={() => setTheme(theme === "dark" ? "light" : "dark")} onOpen={setModal} />
      <Hero onOpen={setModal} />
      <TrustedBy />
      <Stats />
      <Features />
      <section id="dashboard" className="nx-section nx-alt">
        <div className="container">
          <div className="nx-head"><h2>See your whole pipeline at a glance</h2><p>Click through the sidebar to explore each view.</p></div>
          <div className="nx-window nx-window-light"><div className="nx-bar"><i /><i /><i /></div><Dashboard /></div>
        </div>
      </section>
      <ProblemSolution />
      <HowItWorks />
      <Integrations />
      <Pricing onOpen={setModal} />
      <Testimonials />
      <Faq />
      <FinalCta onOpen={setModal} />
      <Contact />
      <Footer />
      <BackToTop />
      {modal && <RegisterModal mode={modal} onMode={setModal} onClose={closeModal} />}
    </div>
  );
}
