import styles from "./AnnouncementBanner.module.css";

const MESSAGE = "DIGITALPRENEUR — NEXT COHORT STARTING APRIL 1";
const REPEAT = 8;

export function AnnouncementBanner() {
  const items = Array.from({ length: REPEAT }, (_, index) => (
    <span key={index} className={styles.item}>
      <span className={styles.play} aria-hidden="true">
        <svg width="6" height="7" viewBox="0 0 6 7" fill="none">
          <path d="M0 0.5v6l6-3-6-3z" fill="#fff" />
        </svg>
      </span>
      {MESSAGE}
    </span>
  ));

  return (
    <div className={styles.banner} role="status">
      <div className={styles.track}>
        <div className={styles.group}>{items}</div>
        <div className={styles.group} aria-hidden="true">
          {items}
        </div>
      </div>
    </div>
  );
}
