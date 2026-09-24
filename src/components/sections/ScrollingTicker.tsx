import styles from "./ScrollingTicker.module.css";

const ITEMS = [
  "Digitalpreneur",
  "Drone Engineering",
  "Robot Engineering",
  "AR/VR Development",
  "Freelancing Pro",
  "Stock Market Mastery",
  "Personal Branding",
  "Content Creation",
  "Startup Launchpad",
  "AI & Machine Learning",
];

function Track() {
  return (
    <div className={styles.trackGroup}>
      {ITEMS.map((item) => (
        <span key={item} className={styles.item}>
          <span className={styles.dot} aria-hidden="true" />
          {item}
        </span>
      ))}
    </div>
  );
}

export function ScrollingTicker() {
  return (
    <div id="ticker" className={styles.ticker} aria-hidden="true">
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
      <div className={styles.track}>
        <Track />
        <Track />
      </div>
    </div>
  );
}
