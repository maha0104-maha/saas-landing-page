import { LogoMark } from "./Logo";

// Hero illustration: leads orbiting the Nexora core, with floating activity cards.
const W = 560, H = 460, CX = W / 2, CY = H / 2;
const NODES = [
  { a: -150, r: 150, t: "MJ", c: "#22D3EE" },
  { a: -60, r: 190, t: "SV", c: "#F59E0B" },
  { a: 10, r: 150, t: "LR", c: "#34D399" },
  { a: 80, r: 190, t: "IR", c: "#F472B6" },
  { a: 150, r: 150, t: "AK", c: "#8B5CF6" },
].map((n) => {
  const rad = (n.a * Math.PI) / 180;
  return { ...n, x: CX + n.r * Math.cos(rad), y: CY + n.r * Math.sin(rad) * 0.8 };
});

export default function HeroArt() {
  return (
    <div className="nx-art" role="img" aria-label="Illustration: leads connecting to the Nexora platform">
      <svg viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
        <defs>
          <radialGradient id="art-glow"><stop offset="0" stopColor="#7C3AED" stopOpacity=".55" /><stop offset="1" stopColor="#7C3AED" stopOpacity="0" /></radialGradient>
        </defs>
        <circle cx={CX} cy={CY} r="210" fill="url(#art-glow)" />
        <ellipse cx={CX} cy={CY} rx="150" ry="120" fill="none" stroke="rgba(255,255,255,.16)" strokeDasharray="3 7" />
        <ellipse cx={CX} cy={CY} rx="190" ry="152" fill="none" stroke="rgba(255,255,255,.1)" strokeDasharray="3 7" />
        {NODES.map((n) => <line key={n.t} className="nx-flow" x1={CX} y1={CY} x2={n.x} y2={n.y} stroke={n.c} strokeOpacity=".7" strokeWidth="1.6" />)}
        {NODES.map((n) => (
          <g key={n.t}>
            <circle cx={n.x} cy={n.y} r="34" fill={n.c} fillOpacity=".18" />
            <circle cx={n.x} cy={n.y} r="24" fill={n.c} stroke="rgba(255,255,255,.9)" strokeWidth="3" />
            <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">{n.t}</text>
          </g>
        ))}
      </svg>
      <div className="nx-art-core"><LogoMark size={88} /></div>

      <div className="nx-float nx-chip" style={{ left: "0%", top: "3%" }}>
        <span className="nx-avatar" style={{ width: 34, height: 34, fontSize: 13 }}>M</span>
        <span><b>New lead</b><small>Maya Joshi · Qualified</small></span>
      </div>
      <div className="nx-float nx-chip d-none d-sm-flex" style={{ right: "0%", top: "30%", animationDelay: "-1.5s" }}>
        <i className="bi bi-stars text-warning fs-5" />
        <span><b>AI draft ready</b><small>“Hi Maya, thanks for reaching out…”</small></span>
      </div>
      <div className="nx-float nx-chip d-none d-sm-flex" style={{ left: "2%", bottom: "4%", animationDelay: "-3s" }}>
        <span><b>+28%</b><small>Conversion</small></span>
        <svg width="64" height="28" viewBox="0 0 64 28" aria-hidden="true"><polyline points="0,24 12,18 24,20 36,10 48,12 64,2" fill="none" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      <div className="nx-float nx-chip" style={{ right: "3%", bottom: "0%", animationDelay: "-4s" }}>
        <i className="bi bi-check-circle-fill text-success fs-4" />
        <span><b>Deal won</b><small>₹48,000 · Brightloop</small></span>
      </div>
    </div>
  );
}
