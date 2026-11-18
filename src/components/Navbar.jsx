import { useState } from "react";
import { NAV } from "../data";
import Logo from "./Logo";

export default function Navbar({ theme, onTheme, onOpen }) {
  const [open, setOpen] = useState(false); // mobile menu state
  const act = (mode) => { setOpen(false); onOpen(mode); };

  return (
    <nav className="navbar navbar-expand-lg sticky-top nx-nav" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand p-0" href="#top" aria-label="Nexora home"><Logo /></a>
        <button className="navbar-toggler" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto">
            {NAV.map((n) => (
              <li className="nav-item" key={n.id}><a className="nav-link" href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a></li>
            ))}
          </ul>
          <div className="d-flex gap-2 pb-2 pb-lg-0">
            <button className="btn btn-outline-light" aria-label="Switch light or dark theme" onClick={onTheme}>
              <i className={`bi bi-${theme === "dark" ? "sun" : "moon-stars"}`} />
            </button>
            <button className="btn btn-outline-light" onClick={() => act("login")}>Log in</button>
            <button className="btn btn-nx" onClick={() => act("register")}>Get started <i className="bi bi-arrow-right ms-1" /></button>
          </div>
        </div>
      </div>
    </nav>
  );
}
