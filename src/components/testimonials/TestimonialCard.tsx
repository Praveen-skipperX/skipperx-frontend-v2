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
      data-testimonial-card
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className={styles.quoteMark} style={{ color }} aria-hidden="true">
        “
      </div>
      <p className={styles.quote}>{item.quote}</p>
      <div
        className={styles.badge}
        style={
          {
            borderColor: `${color}55`,
            color,
          } as CSSProperties
        }
      >
        {item.role} · {item.track}
      </div>
      <div className={styles.person}>
        <div
          className={styles.avatar}
          style={{
            background: `${color}28`,
            border: `1px solid ${color}45`,
            color: "#fff",
          }}
        >
          {item.name[0]}
        </div>
        <div className={styles.name}>{item.name}</div>
      </div>
    </motion.article>
  );
}
