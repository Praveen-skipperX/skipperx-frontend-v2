import { motion } from "motion/react";
import { FEATURES } from "../../data/features";
import { ComparisonTable } from "../features/ComparisonTable";
import { FeatureItem } from "../features/FeatureItem";
import { Section } from "../layout/Section";
import styles from "./Features.module.css";

export function Features() {
  return (
    <Section id="why" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.rule} />
        <div className={styles.grid}>
          <div className={styles.sticky}>
            <motion.p
              className={styles.kicker}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              02 — Why SkipperX
            </motion.p>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Built for doers,
              <br />
              <span className={styles.accent}>not dreamers.</span>
            </motion.h2>
            <motion.p
              className={styles.lede}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Traditional education teaches you to pass tests. SkipperX trains you
              to pass the only test that matters — the real world. Here is what
              that looks like.
            </motion.p>
            <ComparisonTable />
          </div>
          <div className={styles.list}>
            {FEATURES.map((item, index) => (
              <FeatureItem key={item.number} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
