import { AnimatePresence, motion } from "motion/react";
import type { FaqItem as FaqItemData } from "../../data/faq";
import styles from "./FAQItem.module.css";

type FAQItemProps = {
  item: FaqItemData;
  index: number;
  open: boolean;
  onToggle: () => void;
};

function ChevronDownIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function FAQItem({ item, index, open, onToggle }: FAQItemProps) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className={styles.item}>
      <button
        id={buttonId}
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className={`${styles.question} ${open ? styles.questionOpen : ""}`}>
          {item.q}
        </span>
        <motion.span
          className={`${styles.icon} ${open ? styles.iconOpen : ""}`}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <ChevronDownIcon />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            className={styles.panel}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <p className={styles.answer}>{item.a}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
