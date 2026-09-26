import type { CSSProperties } from "react";
import { motion } from "motion/react";
import type { Testimonial } from "../../data/testimonials";
import styles from "./TestimonialCard.module.css";

type TestimonialCardProps = {
  item: Testimonial;
  index: number;
};

function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = Number.parseInt(full, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

export function TestimonialCard({ item, index }: TestimonialCardProps) {
  const color = item.trackColor;
  const rgb = hexToRgb(color);

  return (
    <motion.article
      className={styles.card}
      data-testimonial-card
      style={
        {
          "--track": color,
          "--track-rgb": rgb,
        } as CSSProperties
      }
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <span className={styles.topBloom} aria-hidden="true" />
      <span className={styles.topEdge} aria-hidden="true" />

      <div className={styles.quoteMark} style={{ color }} aria-hidden="true">
        “
      </div>
      <p className={styles.quote}>{item.quote}</p>
      <div
        className={styles.badge}
        style={{
          color,
          borderColor: `rgb(${rgb} / 0.35)`,
          background: `rgb(${rgb} / 0.1)`,
        }}
      >
        {item.role} · {item.track}
      </div>
      <div className={styles.person}>
        <div
          className={styles.avatar}
          style={{
            color: "#fff",
            background: color,
          }}
        >
          {item.name[0]}
        </div>
        <div className={styles.name}>{item.name}</div>
      </div>
    </motion.article>
  );
}
