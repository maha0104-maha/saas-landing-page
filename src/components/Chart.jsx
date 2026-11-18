// Small SVG/HTML charts. The default export picks one by `view`.
const C = ["#8B5CF6", "#22D3EE", "#F59E0B", "#34D399", "#F472B6"];
const label = { fontSize: 9, fill: "currentColor", opacity: 0.7 };

function Area({ data, height }) {
  const w = 300, max = Math.max(...data);
  const line = data.map((v, i) => `${(i * w) / (data.length - 1)},${height - (v / max) * (height - 14) - 4}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${height}`} className="w-100" role="img" aria-label="Leads over the last 8 weeks">
      <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8B5CF6" stopOpacity=".45" /><stop offset="1" stopColor="#8B5CF6" stopOpacity="0" /></linearGradient></defs>
      <polygon points={`0,${height} ${line} ${w},${height}`} fill="url(#area)" />
      <polyline points={line} fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

function Bars({ data, height }) {
  const max = Math.max(...data.map((d) => d[1])), bw = 300 / data.length, h = height - 18;
  return (
    <svg viewBox={`0 0 300 ${height}`} className="w-100" role="img" aria-label="Bar chart">
      {data.map(([l, v], i) => {
        const bh = (v / max) * (h - 6);
        return (<g key={l}><rect x={i * bw + bw * 0.18} y={h - bh} width={bw * 0.64} height={bh} rx="5" fill={C[i % C.length]} /><text x={i * bw + bw / 2} y={height - 4} textAnchor="middle" {...label}>{l}</text></g>);
      })}
    </svg>
  );
}

function Donut({ data }) {
  const total = data.reduce((s, d) => s + d[1], 0), r = 40, c = 2 * Math.PI * r;
  let off = 0;
  return (
    <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap">
      <svg viewBox="0 0 100 100" width="120" height="120" role="img" aria-label="Donut chart" style={{ transform: "rotate(-90deg)" }}>
        {data.map(([l, v], i) => {
          const len = (v / total) * c;
          const el = <circle key={l} cx="50" cy="50" r={r} fill="none" stroke={C[i]} strokeWidth="16" strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-off} />;
          off += len;
          return el;
        })}
      </svg>
      <ul className="list-unstyled small mb-0">{data.map(([l, v], i) => <li key={l}><span className="nx-dot" style={{ background: C[i] }} />{l} · {v}%</li>)}</ul>
    </div>
  );
}

function HBars({ data }) {
  const max = Math.max(...data.map((d) => d[1]));
  return (
    <div className="d-grid gap-2">
      {data.map(([l, v], i) => (
        <div key={l}>
          <div className="d-flex justify-content-between small"><span>{l}</span><b>{v.toLocaleString()}</b></div>
          <div className="nx-track"><div style={{ width: `${(v / max) * 100}%`, background: C[i % C.length] }} /></div>
        </div>
      ))}
    </div>
  );
}

function Lines({ data, height }) {
  const w = 300, max = Math.max(...data.flatMap((d) => d[1]));
  const pts = (n) => n.map((v, i) => `${(i * w) / (n.length - 1)},${height - (v / max) * (height - 14) - 4}`).join(" ");
  return (
    <>
      <svg viewBox={`0 0 ${w} ${height}`} className="w-100" role="img" aria-label="Line chart">
        {data.map(([n, vals], i) => <polyline key={n} points={pts(vals)} fill="none" stroke={C[i]} strokeWidth="2.5" strokeLinejoin="round" />)}
      </svg>
      <div className="small d-flex gap-3">{data.map(([n], i) => <span key={n}><span className="nx-dot" style={{ background: C[i] }} />{n}</span>)}</div>
    </>
  );
}

export default function Chart({ view, data, height = 120 }) {
  if (view === "bars") return <Bars data={data} height={height} />;
  if (view === "donut") return <Donut data={data} />;
  if (view === "hbars") return <HBars data={data} />;
  if (view === "lines") return <Lines data={data} height={height} />;
  return <Area data={data} height={height} />;
}
