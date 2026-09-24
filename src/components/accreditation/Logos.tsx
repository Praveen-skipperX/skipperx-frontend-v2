export function SkillIndiaLogo() {
  const spokes = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  const studs = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <div className="skill">
      <svg width="36" height="30" viewBox="0 0 52 44" fill="none" aria-hidden="true">
        <circle cx="26" cy="20" r="13" fill="none" stroke="#003087" strokeWidth="2.2" />
        <circle cx="26" cy="20" r="7" fill="#003087" />
        {spokes.map((deg) => {
          const a = (deg * Math.PI) / 180;
          return (
            <line
              key={deg}
              x1={26 + 7 * Math.cos(a)}
              y1={20 + 7 * Math.sin(a)}
              x2={26 + 13 * Math.cos(a)}
              y2={20 + 13 * Math.sin(a)}
              stroke="#003087"
              strokeWidth="1.4"
            />
          );
        })}
        <ellipse cx="26" cy="19" rx="4" ry="4.5" fill="white" />
        <ellipse cx="26" cy="17" rx="2.5" ry="2" fill="#003087" />
        <path d="M24 7 Q26 3 28 7 Q26 5.5 24 7Z" fill="#FF6B00" />
        {studs.map((deg) => {
          const a = (deg * Math.PI) / 180;
          const cx = 26 + 13.5 * Math.cos(a);
          const cy = 20 + 13.5 * Math.sin(a);
          return (
            <rect
              key={deg}
              x={cx - 1.2}
              y={cy - 1.2}
              width="2.4"
              height="2.4"
              rx="0.4"
              fill="#003087"
              transform={`rotate(${deg}, ${cx}, ${cy})`}
            />
          );
        })}
        <path d="M14 36 Q26 33 38 36 Q32 42 26 40 Q20 42 14 36Z" fill="#003087" />
        <path d="M14 36 Q26 33.5 38 36" stroke="#FF6B00" strokeWidth="1.2" fill="none" />
      </svg>
      <div>
        <p className="skillTitle">Skill India</p>
        <p className="skillSub">कौशल भारत - कुशल भारत</p>
      </div>
    </div>
  );
}

export function NsdcLogo() {
  const letters = [
    { char: "N", color: "#F47920" },
    { char: "S", color: "#8DC63F" },
    { char: "D", color: "#009CDE" },
    { char: "C", color: "#003087" },
  ];

  return (
    <div className="nsdc">
      <svg width="24" height="28" viewBox="0 0 36 42" fill="none" aria-hidden="true">
        <circle cx="18" cy="6" r="4.5" fill="#F47920" />
        <path d="M10 16 Q18 12 26 16 L24 28 H12 Z" fill="#009CDE" />
        <path d="M12 18 Q6 11 4 8" stroke="#8DC63F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M24 18 Q30 11 32 8" stroke="#F47920" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M14 28 L11 40" stroke="#003087" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 28 L25 40" stroke="#003087" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <div>
        <div className="nsdcLetters">
          {letters.map((item, index) => (
            <span key={item.char} style={{ color: item.color }}>
              {item.char}
              {index < 3 ? <span className="nsdcDot">·</span> : null}
            </span>
          ))}
        </div>
        <p className="nsdcSub">
          National
          <br />
          Skill Development
          <br />
          Corporation
        </p>
      </div>
    </div>
  );
}

export function StartupIndiaLogo() {
  return (
    <div className="startup">
      <p className="startupTitle">#startupindia</p>
      <svg width="80" height="8" viewBox="0 0 110 10" fill="none" aria-hidden="true">
        <path d="M4 7 Q30 2 55 6 Q80 10 106 3" stroke="#F47920" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <rect x="100" y="1" width="8" height="6" rx="1" fill="#009CDE" opacity="0.8" />
        <rect x="104" y="1" width="4" height="6" rx="0.5" fill="#009CDE" />
      </svg>
    </div>
  );
}

export function GoogleEduLogo() {
  return (
    <div className="google">
      <svg width="26" height="26" viewBox="0 0 38 38" fill="none" aria-hidden="true">
        <path d="M37 19.4c0-1.23-.1-2.41-.3-3.55H19v6.72h10.1a8.66 8.66 0 01-3.75 5.68v4.72h6.07C34.74 29.73 37 25 37 19.4z" fill="#4285F4" />
        <path d="M19 37.5c5.08 0 9.34-1.68 12.45-4.55l-6.07-4.72c-1.68 1.13-3.84 1.8-6.38 1.8-4.9 0-9.05-3.31-10.53-7.76H2.2v4.87A18.5 18.5 0 0019 37.5z" fill="#34A853" />
        <path d="M8.47 22.27A11.12 11.12 0 017.9 19c0-1.14.2-2.25.57-3.27V10.86H2.2A18.5 18.5 0 00.5 19c0 2.98.71 5.8 1.97 8.14l6.3-4.87z" fill="#FBBC04" />
        <path d="M19 7.97c2.77 0 5.25.95 7.2 2.82l5.4-5.4C28.33 2.16 24.07.5 19 .5A18.5 18.5 0 002.2 10.86l6.27 4.87C9.95 11.28 14.1 7.97 19 7.97z" fill="#EA4335" />
      </svg>
      <div>
        <p className="googleTop">Google for Education</p>
        <p className="googlePartner">Partner</p>
      </div>
    </div>
  );
}
