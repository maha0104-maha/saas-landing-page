import { useState } from "react";
import Chart from "./Chart";
import { TABS, TEAM, SWITCHES } from "../data";

// A table cell can be plain text, a status badge, or a progress bar.
function Cell({ c }) {
  if (c && c.badge) return <span className={`badge ${c.badge === "New" ? "text-bg-warning" : "nx-badge"}`}>{c.badge}</span>;
  if (c && c.bar !== undefined) {
    return (
      <div className="d-flex align-items-center gap-2">
        <div className="nx-track flex-grow-1" style={{ minWidth: 70 }}><div style={{ width: `${c.bar}%`, background: "#8B5CF6" }} /></div>
        <small>{c.bar}%</small>
      </div>
    );
  }
  return c;
}

function Settings() {
  return (
    <div className="row g-3">
      <div className="col-md-6">
        <strong className="small d-block mb-2">Team seats</strong>
        {TEAM.map(([n, r]) => (
          <div className="d-flex align-items-center gap-2 mb-2" key={n}>
            <span className="nx-avatar" style={{ width: 32, height: 32, fontSize: 13 }}>{n[0]}</span>
            <span className="flex-grow-1">{n}</span><small className="text-secondary">{r}</small>
          </div>
        ))}
      </div>
      <div className="col-md-6">
        <strong className="small d-block mb-2">Notifications</strong>
        {SWITCHES.map(([n, on]) => (
          <div className="form-check form-switch mb-2" key={n}>
            <input className="form-check-input" type="checkbox" role="switch" id={n} defaultChecked={on} />
            <label className="form-check-label" htmlFor={n}>{n}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

// Used twice: compact inside the hero, full in the "Product" section.
export default function Dashboard({ compact = false }) {
  const [tab, setTab] = useState("Overview");
  const t = TABS[tab];

  return (
    <div className="nx-dash d-flex flex-column flex-md-row">
      <aside className="nx-side">
        {Object.keys(TABS).map((name) => (
          <button key={name} className={name === tab ? "on" : ""} onClick={() => setTab(name)}>{name}</button>
        ))}
      </aside>
      <div className="flex-grow-1 p-3 p-md-4" style={{ minWidth: 0 }}>
        <h3 className="h6 fw-bold mb-3">{tab}</h3>
        <div className="row g-2 mb-3">
          {t.kpis.map(([label, value, delta]) => (
            <div className="col-6 col-lg-3" key={label}>
              <div className="nx-kpi">
                <small>{label}</small>
                <strong>{value}</strong>
                {delta && <span className={delta.startsWith("-") ? "text-danger" : "text-success"}>{delta}</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="nx-kpi mb-3">
          <small className="d-block mb-2">{t.title}</small>
          {t.view === "settings" ? <Settings /> : <Chart view={t.view} data={t.chart} height={compact ? 90 : 120} />}
        </div>
        {!compact && t.rows && (
          <div className="table-responsive">
            <table className="table table-sm align-middle mb-0">
              <thead><tr>{t.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>{t.rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}><Cell c={c} /></td>)}</tr>)}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
