import { motion } from "motion/react";
import styles from "./SuperStackTicker.module.css";

type SuperStackTickerProps = {
  items: string;
  color: string;
  duration?: number;
  repeatContent?: boolean;
};

export function SuperStackTicker({ items, color, duration = 18, repeatContent = true }: SuperStackTickerProps) {
  const doubled = repeatContent ? `${items}   ·   ${items}` : items;

  return (
    <div
      className={styles.ticker}
      style={{ borderTop: `1px solid ${color}22` }}
    >
      <motion.div
        className={styles.track}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        style={{ color }}
      >
        <span className={styles.chunk}>{doubled}</span>
        <span className={styles.chunk}>{doubled}</span>
      </motion.div>
    </div>
  );
}
