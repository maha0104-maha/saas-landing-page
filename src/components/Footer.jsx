import { useState } from "react";
import { FOOTER } from "../data";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState(""); // "", "ok", or "bad"

  const subscribe = (e) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setState(ok ? "ok" : "bad");
    if (ok) setEmail("");
  };

  return (
    <footer className="nx-footer text-white-50" data-bs-theme="dark">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <a className="text-white d-inline-block mb-2" href="#top" aria-label="Nexora home"><Logo size={32} /></a>
            <p className="small">Lead tips and product news, once a month.</p>
            <form className="d-flex gap-2 mb-1" onSubmit={subscribe} noValidate>
              <input type="email" aria-label="Email address" placeholder="you@company.com" className={`form-control ${state === "bad" ? "is-invalid" : ""}`} value={email} onChange={(e) => setEmail(e.target.value)} />
              <button className="btn btn-nx" type="submit">Subscribe</button>
            </form>
            {state === "bad" && <small className="text-danger">Enter a valid email address.</small>}
            {state === "ok" && <small className="text-success">You’re subscribed. Watch your inbox for a welcome email.</small>}
            <div className="d-flex gap-3 fs-5 mt-3">
              <a href="#top" aria-label="X"><i className="bi bi-twitter-x" /></a>
              <a href="#top" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
              <a href="#top" aria-label="GitHub"><i className="bi bi-github" /></a>
            </div>
          </div>
          {Object.entries(FOOTER).map(([title, links]) => (
            <div className="col-6 col-lg-2" key={title}>
              <h3 className="h6 text-white">{title}</h3>
              <ul className="list-unstyled small">{links.map(([l, h]) => <li key={l} className="mb-1"><a href={h}>{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <hr className="border-secondary" />
        <small>© 2026 Nexora. All rights reserved.</small>
      </div>
    </footer>
  );
}
