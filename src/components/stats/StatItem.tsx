import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import styles from "./StatItem.module.css";

export type Stat = {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sub: string;
};

type StatItemProps = {
  stat: Stat;
  index: number;
};

function useCountUp(target: number, decimals: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const factor = Math.pow(10, decimals);
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target * factor) / factor);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, decimals, duration]);

  return value;
}

export function StatItem({ stat, index }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const counted = useCountUp(
    stat.value,
    stat.decimals ?? 0,
    2000 + index * 150,
    inView,
  );
  const display =
    stat.decimals != null
      ? counted.toFixed(stat.decimals)
      : Math.round(counted).toLocaleString();

  return (
    <motion.div
      ref={ref}
      className={styles.stat}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className={styles.bar} />
      <div className={styles.valueRow}>
        {stat.prefix !== undefined ? (
          <span className={styles.prefix}>{stat.prefix}</span>
        ) : null}
        <span className={styles.value}>{display}</span>
        <span className={styles.suffix}>{stat.suffix}</span>
      </div>
      <p className={styles.label}>{stat.label}</p>
      <p className={styles.sub}>{stat.sub}</p>
    </motion.div>
  );
}
