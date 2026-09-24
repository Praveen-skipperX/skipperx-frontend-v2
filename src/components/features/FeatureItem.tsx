import { motion } from "motion/react";
import type { FeatureItem as FeatureItemData } from "../../data/features";
import styles from "./FeatureItem.module.css";

type FeatureItemProps = {
  item: FeatureItemData;
  index: number;
};

export function FeatureItem({ item, index }: FeatureItemProps) {
  return (
    <motion.div
      className={styles.item}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.row}>
        <span className={styles.number}>{item.number}</span>
        <div>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.body}>{item.body}</p>
        </div>
      </div>
    </motion.div>
  );
}
