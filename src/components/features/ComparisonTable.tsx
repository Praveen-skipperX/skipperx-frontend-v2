import { motion } from "motion/react";
import { COMPARISON_ROWS } from "../../data/features";
import styles from "./ComparisonTable.module.css";

export function ComparisonTable() {
  return (
    <motion.div
      className={styles.table}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.22 }}
    >
      <div className={styles.head}>
        <div className={styles.headTraditional}>Traditional</div>
        <div className={styles.headSkipper}>SkipperX</div>
      </div>
      {COMPARISON_ROWS.map(([traditional, skipperx], index) => (
        <div
          key={traditional}
          className={`${styles.row} ${index % 2 === 0 ? styles.rowAlt : ""}`}
        >
          <div className={styles.traditional}>{traditional}</div>
          <div className={styles.skipperx}>{skipperx}</div>
        </div>
      ))}
    </motion.div>
  );
}
