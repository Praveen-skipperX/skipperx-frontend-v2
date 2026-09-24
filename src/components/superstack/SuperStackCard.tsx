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

function ArrowUpRightIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export function SuperStackCard({ item, index }: SuperStackCardProps) {
  const Illustration = ILLUSTRATIONS[item.illustration];
  const color = item.categoryColor;

  return (
    <motion.article
      className={styles.card}
      style={{
        background: item.cardBg,
        border: `1px solid ${color}18`,
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.025, borderColor: `${color}45` }}
    >
      <div className={styles.media}>
        <Illustration />
        <div
          className={styles.fade}
          style={{ background: `linear-gradient(to top, ${item.cardBg}, transparent)` }}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.tagWrap}>
          <span
            className={styles.tag}
            style={{
              color,
              background: `${color}14`,
              border: `1px solid ${color}30`,
            }}
          >
            {item.category}
          </span>
        </div>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.programs}>{item.programs}</p>
        <div className={styles.arrowWrap}>
          <motion.div
            className={styles.arrow}
            style={{
              background: `${color}18`,
              border: `1px solid ${color}35`,
            }}
            whileHover={{ background: color, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <span className={styles.arrowIcon} style={{ color }}>
              <ArrowUpRightIcon />
            </span>
          </motion.div>
        </div>
      </div>
      <SuperStackTicker items={item.ticker} color={color} />
    </motion.article>
  );
}
