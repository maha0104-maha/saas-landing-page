import { useState } from "react";
import { PLANS, COMPARE } from "../data";

export default function Pricing({ onOpen }) {
  const [yearly, setYearly] = useState(false);

  const price = (p) => {
    if (p.custom) return "Custom";
    if (p.monthly === 0) return "Free";
    return `₹${yearly ? p.yearly : p.monthly}`;
  };

  return (
    <section id="pricing" className="nx-section nx-alt">
      <div className="container">
        <div className="nx-head text-center mx-auto">
          <h2>Simple, honest pricing</h2>
          <p className="small">Prices in Indian rupees, per workspace.</p>
          <div className="nx-seg" role="group" aria-label="Billing period">
            <button className={!yearly ? "on" : ""} aria-pressed={!yearly} onClick={() => setYearly(false)}>Monthly</button>
            <button className={yearly ? "on" : ""} aria-pressed={yearly} onClick={() => setYearly(true)}>Yearly <span>save 20%</span></button>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {PLANS.map((p) => (
            <div className="col-md-6 col-lg-4" key={p.name}>
              <div className={`nx-card h-100 d-flex flex-column ${p.popular ? "nx-card-hl" : ""}`}>
                {p.popular && <span className="badge nx-badge align-self-start mb-2">Most popular</span>}
                <h3 className="h5 fw-bold mb-0">{p.name}</h3>
                <small className="text-secondary">{p.note}</small>
                <div className="nx-price my-3">{price(p)}{!p.custom && p.monthly > 0 && <small>/month</small>}</div>
                <ul className="list-unstyled flex-grow-1">
                  {p.items.map((i) => <li key={i} className="py-1"><i className="bi bi-check2-circle text-success me-2" />{i}</li>)}
                </ul>
                {p.custom
                  ? <a href="#contact" className="btn btn-outline-secondary w-100">Talk to sales</a>
                  : <button className={`btn ${p.popular ? "btn-nx" : "btn-outline-secondary"} w-100`} onClick={() => onOpen("register")}>{p.monthly === 0 ? "Sign up free" : "Start free trial"}</button>}
              </div>
            </div>
          ))}
        </div>
        <div className="table-responsive nx-card mt-5 p-2">
          <table className="table align-middle mb-0">
            <thead><tr><th>Feature</th>{PLANS.map((p) => <th key={p.name}>{p.name}</th>)}</tr></thead>
            <tbody>{COMPARE.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} className={i === 0 ? "fw-semibold" : ""}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
