// Original illustrations for the Golf Tour and Premier League, in the same style as PaddleArt.

export function GolfArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 360" className={className} role="img" aria-label="A golf flag on a green with a ball beside the hole">
      <circle cx="180" cy="180" r="170" fill="none" stroke="#7FB0DE" strokeOpacity=".25" strokeWidth="1.5" strokeDasharray="4 8" />
      <ellipse cx="180" cy="270" rx="130" ry="34" fill="#DCE9F7" stroke="#1E6BB0" strokeWidth="4" />
      <ellipse cx="196" cy="268" rx="16" ry="6" fill="#102A4C" />
      <rect x="192" y="70" width="8" height="198" rx="4" fill="#F6F8FB" stroke="#1E6BB0" strokeWidth="3" />
      <path d="M200 74 L282 100 L200 128 Z" fill="#1E6BB0" />
      <path d="M200 92 L246 100 L200 110 Z" fill="#7FB0DE" />
      <circle cx="122" cy="252" r="18" fill="#F6F8FB" stroke="#1E6BB0" strokeWidth="3" />
      {[
        [116, 246], [126, 244], [130, 254], [118, 258], [124, 252],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="#7FB0DE" />
      ))}
    </svg>
  );
}

export function CricketArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 360" className={className} role="img" aria-label="A cricket bat, ball and stumps">
      <circle cx="180" cy="180" r="170" fill="none" stroke="#7FB0DE" strokeOpacity=".25" strokeWidth="1.5" strokeDasharray="4 8" />
      <g>
        {[132, 160, 188].map((x) => (
          <rect key={x} x={x} y="120" width="14" height="170" rx="6" fill="#DCE9F7" stroke="#1E6BB0" strokeWidth="3" />
        ))}
        <rect x="128" y="110" width="40" height="10" rx="5" fill="#1E6BB0" />
        <rect x="164" y="110" width="40" height="10" rx="5" fill="#1E6BB0" />
      </g>
      <g transform="rotate(32 250 190)">
        <rect x="232" y="70" width="18" height="70" rx="8" fill="#102A4C" stroke="#7FB0DE" strokeWidth="3" />
        <path d="M222 138 h38 a6 6 0 0 1 6 6 v130 a22 22 0 0 1 -22 22 h-6 a22 22 0 0 1 -22 -22 v-130 a6 6 0 0 1 6 -6 z" fill="url(#bat)" stroke="#1E6BB0" strokeWidth="4" />
      </g>
      <defs>
        <linearGradient id="bat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F6F8FB" />
          <stop offset="1" stopColor="#DCE9F7" />
        </linearGradient>
      </defs>
      <circle cx="96" cy="268" r="26" fill="#C9A45C" />
      <path d="M78 252 q18 16 36 32" stroke="#F6F8FB" strokeWidth="3" fill="none" strokeDasharray="4 4" />
    </svg>
  );
}
