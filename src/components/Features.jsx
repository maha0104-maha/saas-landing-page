import { FEATURES } from "../data";

export default function Features() {
  return (
    <section id="features" className="nx-section">
      <div className="container">
        <div className="nx-head"><h2>Everything your sales team needs</h2><p>One workspace for finding, nurturing, and closing leads.</p></div>
        <div className="row g-4">
          {FEATURES.map((f) => (
            <div className="col-md-6 col-lg-4" key={f.title}>
              <div className="nx-card h-100">
                <div className="nx-ico"><i className={`bi bi-${f.icon}`} /></div>
                <h3 className="h5 fw-bold">{f.title}</h3>
                <p className="text-secondary mb-0">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
