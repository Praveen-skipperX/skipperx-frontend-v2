import type { CSSProperties } from "react";
import { motion } from "motion/react";
import type { Track } from "../../data/programs";
import styles from "./CategoryColumn.module.css";

type CategoryColumnProps = {
  track: Track;
};

export function CategoryColumn({ track }: CategoryColumnProps) {
  return (
    <motion.article
      className={styles.header}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={
        {
          "--track-color": track.color,
          "--track-dim": track.colorDim,
          "--track-border": track.colorBorder,
          "--track-text": track.colorText,
          "--track-badge": track.badgeBg,
        } as CSSProperties
      }
    >
      <div className={styles.identity}>
        <span className={styles.emoji} aria-hidden="true">
          {track.icon}
        </span>
        <div className={styles.titles}>
          <div className={styles.tagline}>{track.tagline}</div>
          <h3 className={styles.label}>{track.label}</h3>
        </div>
      </div>
      <p className={styles.description}>{track.description}</p>
    </motion.article>
  );
}
