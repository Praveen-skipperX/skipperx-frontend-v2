import type { CSSProperties } from "react";
import { motion } from "motion/react";
import type { Testimonial } from "../../data/testimonials";
import styles from "./TestimonialCard.module.css";

type TestimonialCardProps = {
  item: Testimonial;
  index: number;
};

export function TestimonialCard({ item, index }: TestimonialCardProps) {
  const color = item.trackColor;

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div
        className={styles.glow}
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${color}10 0%, transparent 65%)`,
        }}
        aria-hidden="true"
      />
      <div
        className={styles.edge}
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
        aria-hidden="true"
      />
      <div className={styles.quoteMark} style={{ color }} aria-hidden="true">
        "
      </div>
      <p className={styles.quote}>{item.quote}</p>
      <div
        className={styles.outcome}
        style={
          {
            background: `${color}15`,
            border: `1px solid ${color}35`,
            color,
          } as CSSProperties
        }
      >
        ↑ {item.outcome}
      </div>
      <div className={styles.person}>
        <div
          className={styles.avatar}
          style={{
            background: `${color}25`,
            border: `1px solid ${color}40`,
          }}
        >
          {item.name[0]}
        </div>
        <div>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.meta}>
            {item.role} · {item.track}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
