import type { CSSProperties } from "react";
import { motion } from "motion/react";
import type { SuperStackItem } from "../../data/superstack";
import {
  CreatorIllustration,
  MedicalIllustration,
  StartupIllustration,
  TechIllustration,
} from "./Illustrations";
import { SuperStackTicker } from "./SuperStackTicker";
import styles from "./SuperStackCard.module.css";

const ILLUSTRATIONS = {
  creator: CreatorIllustration,
  tech: TechIllustration,
  medical: MedicalIllustration,
  startup: StartupIllustration,
};

type SuperStackCardProps = {
  item: SuperStackItem;
  index: number;
};

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function SuperStackCard({ item, index }: SuperStackCardProps) {
  const Illustration = ILLUSTRATIONS[item.illustration];
  const color = item.categoryColor;

  return (
    <motion.article
      className={styles.card}
      style={
        {
          "--accent": color,
          "--arrow-bg": `${color}18`,
          "--arrow-border": `${color}55`,
          "--arrow-bg-hover": `${color}32`,
          "--arrow-border-hover": `${color}80`,
        } as CSSProperties
      }
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className={styles.media}>
        <Illustration />
        <div
          className={styles.fade}
          style={{ background: "linear-gradient(to top, #111113, transparent)" }}
        />
      </div>

      <div className={styles.body}>
        <span
          className={styles.tag}
          style={{
            color,
            background: `${color}10`,
            borderColor: `${color}55`,
          }}
        >
          {item.category}
        </span>

        <h3 className={styles.title}>{item.title}</h3>

        <div className={styles.metaRow}>
          <p className={styles.programs}>{item.programs}</p>
          <div className={styles.arrow} aria-hidden="true">
            <span className={styles.arrowIcon}>
              <ArrowRightIcon />
            </span>
          </div>
        </div>
      </div>

      <SuperStackTicker items={item.ticker} color={color} />
    </motion.article>
  );
}
