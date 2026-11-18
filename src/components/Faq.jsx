import { useState } from "react";
import { FAQS } from "../data";

export default function Faq() {
  const [open, setOpen] = useState(0); // index of the open question, or null

  return (
    <section id="faq" className="nx-section">
      <div className="container" style={{ maxWidth: 780 }}>
        <div className="nx-head"><h2>Questions, answered</h2></div>
        <div className="accordion">
          {FAQS.map(([q, a], i) => (
            <div className="accordion-item" key={q}>
              <h3 className="accordion-header">
                <button className={`accordion-button ${open === i ? "" : "collapsed"}`} aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>{q}</button>
              </h3>
              <div className={`accordion-collapse collapse ${open === i ? "show" : ""}`}>
                <div className="accordion-body text-secondary">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
