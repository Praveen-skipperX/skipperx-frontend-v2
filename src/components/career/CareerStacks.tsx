import type { CSSProperties } from "react";
import { motion } from "motion/react";
import { SUPERSTACK_ITEMS } from "../../data/superstack";
import { SuperStackCard } from "../superstack/SuperStackCard";
import styles from "./CareerStacks.module.css";

export function CareerStacks() {
  return (
    <section className={styles.section} id="super-stack" data-node-id="1662:8103">
      <div className={styles.inner}>
        <div className={styles.divider} />
        <header className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.eyebrow}>Bundles</p>
            <p className={styles.leadIn}>Can’t choose track? Stack them.</p>
            <h2>
              Super <span>Stack</span>
            </h2>
            <p className={styles.descriptionSolo}>
              All-in-one bundles to grow and create
            </p>
          </motion.div>
          <motion.div
            className={styles.description}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <p>Can’t choose track? Stack them.</p>
            <p>All-in-one bundles to grow and create</p>
          </motion.div>
        </header>
        <div className={styles.cards}>
          {SUPERSTACK_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={styles.cardSlot}
              style={{ "--accent": item.categoryColor } as CSSProperties}
            >
              <SuperStackCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
