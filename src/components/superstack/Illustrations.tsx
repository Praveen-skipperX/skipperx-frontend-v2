/** Inline SVG illustrations from live SuperStack.tsx (viewBox 320×200). */

export function CreatorIllustration() {
  const dots = [0, 1, 2, 3, 4, 5, 6].flatMap((x) =>
    [0, 1, 2, 3, 4].map((y) => `${x}-${y}`),
  );

  return (
    <svg viewBox="0 0 320 200" fill="none" className="ss-illu" aria-hidden="true">
      <defs>
        <radialGradient id="ss-cg1" cx="60%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FE8324" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0A0A0B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ss-cg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FE8324" />
          <stop offset="100%" stopColor="#FF4101" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="#111113" />
      <ellipse cx="190" cy="80" rx="110" ry="90" fill="url(#ss-cg1)" />
      {dots.map((key) => {
        const [x, y] = key.split("-").map(Number);
        return (
          <circle
            key={key}
            cx={20 + x * 46}
            cy={20 + y * 44}
            r="1.2"
            fill="rgba(255,255,255,0.06)"
          />
        );
      })}
      <rect x="110" y="62" width="80" height="56" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(254,131,36,0.5)" strokeWidth="1.2" />
      <circle cx="150" cy="90" r="18" fill="none" stroke="url(#ss-cg2)" strokeWidth="2" />
      <circle cx="150" cy="90" r="11" fill="rgba(254,131,36,0.15)" />
      <circle cx="150" cy="90" r="5" fill="#FE8324" />
      <rect x="118" y="55" width="20" height="10" rx="4" fill="rgba(254,131,36,0.4)" />
      <circle cx="185" cy="70" r="4" fill="rgba(254,131,36,0.6)" />
      <rect x="30" y="50" width="60" height="22" rx="11" fill="rgba(254,131,36,0.12)" stroke="rgba(254,131,36,0.3)" strokeWidth="1" />
      <text x="60" y="65" textAnchor="middle" fill="#FE8324" fontSize="9" fontFamily="Poppins, sans-serif" fontWeight="600">UI/UX</text>
      <rect x="230" y="100" width="68" height="22" rx="11" fill="rgba(254,131,36,0.12)" stroke="rgba(254,131,36,0.3)" strokeWidth="1" />
      <text x="264" y="115" textAnchor="middle" fill="#FE8324" fontSize="9" fontFamily="Poppins, sans-serif" fontWeight="600">Branding</text>
      <rect x="36" y="128" width="72" height="22" rx="11" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <text x="72" y="143" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="Poppins, sans-serif">Content</text>
      <path d="M240 40 Q260 55 245 70" stroke="#FE8324" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <path d="M255 35 Q275 50 260 62" stroke="#FF4101" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <circle cx="60" cy="150" r="16" fill="rgba(254,131,36,0.1)" stroke="rgba(254,131,36,0.25)" strokeWidth="1" />
      <polygon points="56,143 56,157 68,150" fill="#FE8324" opacity="0.7" />
      <path d="M285 45 L287 38 L289 45 L296 47 L289 49 L287 56 L285 49 L278 47 Z" fill="#FE8324" opacity="0.5" />
      <path d="M42 90 L43.5 85 L45 90 L50 91.5 L45 93 L43.5 98 L42 93 L37 91.5 Z" fill="#FE8324" opacity="0.3" />
    </svg>
  );
}

export function TechIllustration() {
  return (
    <svg viewBox="0 0 320 200" fill="none" className="ss-illu" aria-hidden="true">
      <defs>
        <radialGradient id="ss-tg1" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#FE8324" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#0A0A0B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ss-tg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FE8324" />
          <stop offset="100%" stopColor="#FF4101" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="#14110A" />
      <ellipse cx="160" cy="100" rx="120" ry="100" fill="url(#ss-tg1)" />
      <path d="M20 100 H60 V60 H100" stroke="rgba(254,131,36,0.2)" strokeWidth="1" />
      <path d="M260 60 H290 V140 H270" stroke="rgba(254,131,36,0.2)" strokeWidth="1" />
      <path d="M40 140 H80 V170 H140" stroke="rgba(254,131,36,0.15)" strokeWidth="1" />
      <rect x="80" y="48" width="160" height="110" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(254,131,36,0.28)" strokeWidth="1.2" />
      <rect x="80" y="48" width="160" height="24" rx="10" fill="rgba(254,131,36,0.1)" />
      <circle cx="96" cy="60" r="4" fill="rgba(255,80,80,0.6)" />
      <circle cx="110" cy="60" r="4" fill="rgba(255,196,0,0.7)" />
      <circle cx="124" cy="60" r="4" fill="rgba(254,131,36,0.65)" />
      <rect x="96" y="84" width="50" height="5" rx="2.5" fill="rgba(254,131,36,0.55)" />
      <rect x="154" y="84" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
      <rect x="96" y="97" width="20" height="5" rx="2.5" fill="rgba(255,255,255,0.1)" />
      <rect x="122" y="97" width="60" height="5" rx="2.5" fill="rgba(254,131,36,0.35)" />
      <rect x="96" y="110" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.1)" />
      <rect x="142" y="110" width="35" height="5" rx="2.5" fill="rgba(254,131,36,0.25)" />
      <rect x="96" y="123" width="70" height="5" rx="2.5" fill="rgba(254,131,36,0.45)" />
      <rect x="172" y="123" width="6" height="5" rx="1" fill="#FE8324" opacity="0.85" />
      <text x="38" y="80" fill="rgba(254,131,36,0.45)" fontSize="28" fontFamily="monospace" fontWeight="700">{"{"}</text>
      <text x="270" y="130" fill="rgba(254,131,36,0.45)" fontSize="28" fontFamily="monospace" fontWeight="700">{"}"}</text>
      <circle cx="20" cy="100" r="4" fill="none" stroke="rgba(254,131,36,0.4)" strokeWidth="1.5" />
      <circle cx="290" cy="140" r="4" fill="none" stroke="rgba(254,131,36,0.4)" strokeWidth="1.5" />
      <path d="M288 50 L290 44 L292 50 L298 52 L292 54 L290 60 L288 54 L282 52 Z" fill="#FE8324" opacity="0.5" />
    </svg>
  );
}

export function MedicalIllustration() {
  return (
    <svg viewBox="0 0 320 200" fill="none" className="ss-illu" aria-hidden="true">
      <defs>
        <radialGradient id="ss-mg1" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#F472B6" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#0A0A0B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ss-mg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="#140B10" />
      <ellipse cx="160" cy="95" rx="120" ry="100" fill="url(#ss-mg1)" />
      <path d="M20 110 H80 L90 90 L100 130 L112 70 L122 130 L132 95 H200 H320" stroke="rgba(244,114,182,0.5)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M60 30 C75 45 45 65 60 80 C75 95 45 115 60 130 C75 145 45 165 60 180" stroke="rgba(244,114,182,0.4)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M80 30 C65 45 95 65 80 80 C65 95 95 115 80 130 C65 145 95 165 80 180" stroke="rgba(244,114,182,0.25)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {[40, 60, 80, 100, 120, 140, 160].map((y) => (
        <line key={y} x1="63" y1={y} x2="77" y2={y} stroke="rgba(244,114,182,0.35)" strokeWidth="1.5" />
      ))}
      <rect x="145" y="52" width="30" height="80" rx="6" fill="rgba(244,114,182,0.1)" stroke="rgba(244,114,182,0.35)" strokeWidth="1.5" />
      <rect x="120" y="77" width="80" height="30" rx="6" fill="rgba(244,114,182,0.1)" stroke="rgba(244,114,182,0.35)" strokeWidth="1.5" />
      <rect x="148" y="55" width="24" height="74" rx="5" fill="rgba(244,114,182,0.08)" />
      <rect x="123" y="80" width="74" height="24" rx="5" fill="rgba(244,114,182,0.08)" />
      <rect x="228" y="68" width="56" height="24" rx="12" fill="rgba(244,114,182,0.12)" stroke="rgba(244,114,182,0.35)" strokeWidth="1.2" />
      <line x1="256" y1="68" x2="256" y2="92" stroke="rgba(244,114,182,0.3)" strokeWidth="1" />
      <rect x="228" y="68" width="28" height="24" rx="12" fill="rgba(244,114,182,0.1)" />
      <circle cx="240" cy="150" r="8" fill="none" stroke="rgba(244,114,182,0.4)" strokeWidth="1.5" />
      <circle cx="258" cy="158" r="5" fill="none" stroke="rgba(244,114,182,0.3)" strokeWidth="1.5" />
      <line x1="248" y1="150" x2="253" y2="158" stroke="rgba(244,114,182,0.3)" strokeWidth="1.2" />
      <path d="M288 38 L290 32 L292 38 L298 40 L292 42 L290 48 L288 42 L282 40 Z" fill="#F472B6" opacity="0.5" />
    </svg>
  );
}

export function StartupIllustration() {
  return (
    <svg viewBox="0 0 320 200" fill="none" className="ss-illu" aria-hidden="true">
      <defs>
        <radialGradient id="ss-sg1" cx="55%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#F472B6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0A0A0B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ss-sg2" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="#120D14" />
      <ellipse cx="180" cy="90" rx="130" ry="100" fill="url(#ss-sg1)" />
      {[40, 80, 120, 160].map((x) => (
        <line key={`v-${x}`} x1={x} y1="20" x2={x} y2="180" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      {[50, 90, 130, 170].map((y) => (
        <line key={`h-${y}`} x1="20" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      <rect x="40" y="130" width="22" height="50" rx="4" fill="rgba(244,114,182,0.15)" stroke="rgba(244,114,182,0.3)" strokeWidth="1" />
      <rect x="70" y="105" width="22" height="75" rx="4" fill="rgba(244,114,182,0.2)" stroke="rgba(244,114,182,0.35)" strokeWidth="1" />
      <rect x="100" y="80" width="22" height="100" rx="4" fill="rgba(244,114,182,0.28)" stroke="rgba(244,114,182,0.45)" strokeWidth="1" />
      <rect x="130" y="55" width="22" height="125" rx="4" fill="rgba(244,114,182,0.38)" stroke="rgba(244,114,182,0.55)" strokeWidth="1" />
      <path d="M51 128 L81 103 L111 78 L141 53" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="141" cy="53" r="5" fill="#F472B6" />
      <circle cx="111" cy="78" r="3.5" fill="#F472B6" opacity="0.7" />
      <circle cx="81" cy="103" r="3.5" fill="#F472B6" opacity="0.5" />
      <g transform="translate(195, 30) rotate(35)">
        <path d="M0 50 C0 50 -12 30 -6 10 C0 -10 6 -10 12 10 C18 30 0 50 0 50Z" fill="rgba(244,114,182,0.12)" stroke="rgba(244,114,182,0.5)" strokeWidth="1.5" />
        <ellipse cx="0" cy="12" rx="6" ry="8" fill="rgba(244,114,182,0.3)" />
        <path d="M-12 34 L-20 46 L-6 42Z" fill="rgba(244,114,182,0.3)" />
        <path d="M12 34 L20 46 L6 42Z" fill="rgba(244,114,182,0.3)" />
        <path d="M-4 50 Q0 62 4 50" stroke="#F472B6" strokeWidth="1.5" fill="none" opacity="0.5" />
      </g>
      <path d="M250 52 L251.5 47 L253 52 L258 53.5 L253 55 L251.5 60 L250 55 L245 53.5 Z" fill="#F472B6" opacity="0.6" />
      <path d="M285 90 L286 86 L287 90 L291 91 L287 92 L286 96 L285 92 L281 91 Z" fill="#F472B6" opacity="0.4" />
      <circle cx="270" cy="140" r="2" fill="#F472B6" opacity="0.4" />
      <circle cx="300" cy="60" r="1.5" fill="#F472B6" opacity="0.3" />
      <circle cx="230" cy="155" r="1.5" fill="#F472B6" opacity="0.3" />
      <path d="M268 95 L262 112 L268 112 L260 130 L272 109 L265 109 Z" fill="rgba(244,114,182,0.5)" stroke="rgba(244,114,182,0.3)" strokeWidth="0.5" />
    </svg>
  );
}
