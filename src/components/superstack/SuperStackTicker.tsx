import { motion } from "motion/react";
import styles from "./SuperStackTicker.module.css";

type SuperStackTickerProps = {
  items: string;
  color: string;
};

export function SuperStackTicker({ items, color }: SuperStackTickerProps) {
  const doubled = `${items}   ·   ${items}`;

  return (
    <div className={styles.ticker} style={{ borderTop: `1px solid ${color}18` }}>
      <motion.div
        className={styles.track}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ color: `${color}80` }}
      >
        <span className={styles.chunk}>{doubled}</span>
        <span className={styles.chunk}>{doubled}</span>
      </motion.div>
    </div>
  );
}
