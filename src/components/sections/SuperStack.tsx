import { motion } from "motion/react";
import { SUPERSTACK_ITEMS } from "../../data/superstack";
import { Section } from "../layout/Section";
import { SuperStackCard } from "../superstack/SuperStackCard";
import styles from "./SuperStack.module.css";

export function SuperStack() {
  return (
    <Section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.rule} />
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.kicker}>05 — Bundles</p>
            <h2 className={styles.title}>
              Super <span className={styles.accent}>Stack</span>
            </h2>
          </motion.div>
          <motion.p
            className={styles.lede}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            All-in-one bundles
            <br />
            to grow and create
          </motion.p>
        </div>
        <div className={styles.grid}>
          {SUPERSTACK_ITEMS.map((item, index) => (
            <SuperStackCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
