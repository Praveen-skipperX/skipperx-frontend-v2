import { motion } from "motion/react";
import { StatItem, type Stat } from "../stats/StatItem";
import { Section } from "../layout/Section";
import styles from "./Stats.module.css";

const STATS: Stat[] = [
  {
    value: 10,
    suffix: "K+",
    label: "Students Who Said No To Average",
    sub: "Across all programs & cohorts",
  },
  {
    value: 95,
    suffix: "%",
    label: "Placed Within 90 Days",
    sub: "Of completing their program",
  },
  {
    value: 50,
    suffix: "+",
    label: "Industry Mentors & Builders",
    sub: "People who've actually done it",
  },
  {
    prefix: "",
    value: 4.9,
    suffix: "/5",
    decimals: 1,
    label: "Average Program Rating",
    sub: "From 10,000+ student reviews",
  },
];

export function Stats() {
  return (
    <Section id="stats" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.kicker}>01 — By The Numbers</p>
            <h2 className={styles.title}>Results don&apos;t lie.</h2>
          </motion.div>
          <motion.p
            className={styles.lede}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Every number below is a student who chose ambition over average. This
            is what happens when you stop waiting and start building.
          </motion.p>
        </div>
        <div className={styles.rule} />
        <div className={styles.grid}>
          {STATS.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
