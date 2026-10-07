import { Link } from "react-router-dom";

export function LogoMark({ className = "h-9 w-9", onDark = false }: { className?: string; onDark?: boolean }) {
  // Navy inner details vanish on dark backgrounds; swap them to white there.
  const inner = onDark ? "#FFFFFF" : "#2C3B7B";
  return (
    <svg viewBox="0 0 64 56" className={className} aria-hidden="true">
      <path d="M11 30a21 21 0 0 1 42 0" stroke="#F47426" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <rect x="7" y="28" width="9" height="17" rx="4" fill="#F47426" />
      <rect x="14.2" y="30.5" width="2.4" height="12" rx="1.2" fill={inner} />
      <rect x="48" y="28" width="9" height="17" rx="4" fill="#F47426" />
      <rect x="47.4" y="30.5" width="2.4" height="12" rx="1.2" fill={inner} />
      <circle cx="25" cy="36" r="2.8" fill={inner} />
      <circle cx="32" cy="36" r="2.8" fill={inner} />
      <circle cx="39" cy="36" r="2.8" fill={inner} />
      <path d="M53 45c-2.5 5-9 7-14 5.5" stroke="#F47426" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="37.5" cy="50.6" r="2.6" fill="#F47426" />
    </svg>
  );
}

// The client's original logo (transparent PNG). logo-light.png is the same artwork with the
// navy parts reversed to white, for use on dark backgrounds.
export function Logo({ dark = false, className = "h-14" }: { dark?: boolean; className?: string }) {
  return (
    <Link to="/" data-testid="logo-link" className="flex shrink-0 items-center" aria-label="Stream Biz home">
      <img
        src={dark ? "/logo-light.png" : "/logo.png"}
        alt="Stream Biz — Project Management Services"
        width={900}
        height={497}
        className={`w-auto ${className} ${dark ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]" : ""}`}
      />
    </Link>
  );
}
