import type { CSSProperties } from "react";
import { motion } from "motion/react";
import type { ProgramItem, Track } from "../../data/programs";
import styles from "./ProgramCard.module.css";

type ProgramCardProps = {
  program: ProgramItem;
  track: Track;
  index: number;
};

export function ProgramCard({ program, track, index }: ProgramCardProps) {
  return (
    <motion.article
      className={styles.card}
      data-track={track.label.toLowerCase()}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      style={
        {
          "--track-color": track.color,
          "--track-dim": track.colorDim,
          "--track-border": track.colorBorder,
          "--track-border-hover": track.colorBorderHover,
          "--track-text": track.colorText,
          "--track-badge": track.badgeBg,
        } as CSSProperties
      }
    >
      <div className={styles.body}>
        <div className={styles.top}>
          <div className={styles.icon} aria-hidden="true">
            {program.icon}
          </div>
          {program.tag ? <span className={styles.tag}>{program.tag}</span> : null}
        </div>

        <div className={styles.copy}>
          <h4 className={styles.name}>{program.name}</h4>
          <p className={styles.description}>{program.description}</p>
        </div>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <img
              className={styles.metaIcon}
              src="/icons/program-clock.svg"
              width={12}
              height={12}
              alt=""
            />
            {program.duration}
          </span>
          <span className={styles.metaItem}>
            <img
              className={styles.metaIcon}
              src="/icons/program-level.svg"
              width={12}
              height={12}
              alt=""
            />
            {program.level}
          </span>
        </div>

        <div className={styles.explore}>
          <span>Explore Program</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.article>
  );
}
