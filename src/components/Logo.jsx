// Nexora logo: a gradient tile with an "N" drawn as connected nodes.
export function LogoMark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="nx-lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4F46E5" />
          <stop offset="1" stopColor="#9333EA" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#nx-lg)" />
      <rect x=".5" y=".5" width="31" height="31" rx="8.5" fill="none" stroke="#fff" strokeOpacity=".25" />
      <path d="M10 23V9l12 14V9" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="9" r="3" fill="#22D3EE" stroke="#4F46E5" strokeWidth="1.5" />
    </svg>
  );
}

export default function Logo({ size = 28 }) {
  return (
    <span className="nx-logo-wrap">
      <LogoMark size={size} />
      <span className="nx-wordmark" style={{ fontSize: size * 0.72 }}>Nexora</span>
    </span>
  );
}
