import { STATS, STEPS, TESTIMONIALS } from "../data";

const LOGOS = [
  ["Brightloop", <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="3" />],
  ["Kestrel", <path d="M3 19 12 4l9 15z" fill="currentColor" />],
  ["Orbitly", <><circle cx="12" cy="12" r="4" fill="currentColor" /><ellipse cx="12" cy="12" rx="10" ry="5" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-25 12 12)" /></>],
  ["Pinecrest", <path d="M12 3 5 12h4l-5 8h16l-5-8h4z" fill="currentColor" />],
  ["Havenly", <path d="M12 2 21 7v10l-9 5-9-5V7z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />],
];

export function TrustedBy() {
  return (
    <section className="py-5 border-bottom">
      <div className="container text-center">
        <p className="text-secondary mb-3">Trusted by growing teams</p>
        <div className="d-flex flex-wrap justify-content-center gap-4 gap-md-5">
          {LOGOS.map(([name, shape]) => (
            <span className="nx-brand" key={name}><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">{shape}</svg>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

const INTEGRATIONS = [["slack", "Slack"], ["google", "Google"], ["microsoft", "Microsoft"], ["whatsapp", "WhatsApp"], ["dropbox", "Dropbox"], ["trello", "Trello"]];

export function Integrations() {
  return (
    <section className="nx-section pb-0">
      <div className="container">
        <div className="nx-head"><h2>Connects to the tools you already use</h2></div>
        <div className="row g-3">
          {INTEGRATIONS.map(([icon, name]) => (
            <div className="col-6 col-md-4 col-lg-2" key={name}>
              <div className="nx-card text-center py-4"><i className={`bi bi-${icon} fs-2`} /><div className="small mt-2 fw-semibold">{name}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="nx-section pb-0">
      <div className="container"><div className="row g-4 text-center">
        {STATS.map(([v, l]) => (
          <div className="col-6 col-lg-3" key={l}><div className="nx-stat">{v}</div><div className="text-secondary">{l}</div></div>
        ))}
      </div></div>
    </section>
  );
}

export function ProblemSolution() {
  const before = ["Leads scattered across platforms", "Manual follow-ups", "Hard to track customers", "No performance insights"];
  const after = ["One place for every lead", "Automated follow-ups", "Organized customer profiles", "A live analytics dashboard"];
  const list = (items, icon, cls) => items.map((t) => <li key={t} className="py-2"><i className={`bi bi-${icon} ${cls} me-2`} />{t}</li>);
  return (
    <section className="nx-section">
      <div className="container">
        <div className="nx-head"><h2>Stop chasing leads across five tools</h2></div>
        <div className="row g-4">
          <div className="col-md-6"><div className="nx-card h-100"><h3 className="h5 fw-bold">Before Nexora</h3><ul className="list-unstyled mb-0">{list(before, "x-circle-fill", "text-danger")}</ul></div></div>
          <div className="col-md-6"><div className="nx-card nx-card-hl h-100"><h3 className="h5 fw-bold">With Nexora</h3><ul className="list-unstyled mb-0">{list(after, "check-circle-fill", "text-success")}</ul></div></div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="nx-section nx-alt">
      <div className="container">
        <div className="nx-head"><h2>How it works</h2><p>Start in minutes. No setup call needed.</p></div>
        <div className="row g-4">
          {STEPS.map((s, i) => (
            <div className="col-md-4" key={s.title}>
              <div className="nx-card h-100">
                <div className="nx-ico"><i className={`bi bi-${s.icon}`} /></div>
                <h3 className="h5 fw-bold">{i + 1}. {s.title}</h3>
                <p className="text-secondary mb-0">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="nx-section">
      <div className="container">
        <div className="nx-head"><h2>Teams love working in Nexora</h2></div>
        <div className="row g-4">
          {TESTIMONIALS.map((t) => (
            <div className="col-md-4" key={t.name}>
              <div className="nx-card h-100">
                <div className="text-warning mb-2" aria-label={`${t.stars} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => <i key={i} className={`bi bi-star${i < t.stars ? "-fill" : ""}`} />)}
                </div>
                <p>“{t.text}”</p>
                <div className="d-flex align-items-center gap-2">
                  <span className="nx-avatar">{t.name[0]}</span>
                  <div><strong className="d-block">{t.name}</strong><small className="text-secondary">{t.role}</small></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta({ onOpen }) {
  return (
    <section className="nx-section pt-0">
      <div className="container">
        <div className="nx-cta text-center text-white">
          <h2 className="fw-bold">Ready to Transform the Way You Grow?</h2>
          <p className="text-white-50">Start free and invite your team when you’re ready.</p>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <button className="btn btn-light btn-lg" onClick={() => onOpen("register")}>Start free trial <i className="bi bi-arrow-right ms-1" /></button>
            <a href="#contact" className="btn btn-outline-light btn-lg">Talk to our team</a>
          </div>
        </div>
      </div>
    </section>
  );
}
