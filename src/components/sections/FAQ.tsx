import { useState } from "react";
import { motion } from "motion/react";
import { FAQ_ITEMS } from "../../data/faq";
import { FAQItem } from "../faq/FAQItem";
import { Section } from "../layout/Section";
import { scrollToId } from "../../lib/scrollToId";
import styles from "./FAQ.module.css";

function ArrowRightIcon() {
  return (
    <svg
      className={styles.ctaIcon}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.rule} />
        <div className={styles.header}>
          <div>
            <motion.p
              className={styles.kicker}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Questions? Answered.
            </motion.p>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Before you <span className={styles.accent}>apply.</span>
            </motion.h2>
          </div>
          <motion.p
            className={styles.lede}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            We get it — committing to a program is a real decision. These are the
            questions every serious applicant asks. If yours isn&apos;t here,
            we&apos;re one message away.
          </motion.p>
        </div>

        <motion.div
          className={styles.list}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.q}
              item={item}
              index={index}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </motion.div>

        <motion.div
          className={styles.ctaWrap}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <button
            type="button"
            className={styles.cta}
            onClick={() => scrollToId("contact")}
          >
            Still have questions? Apply and ask us directly
            <ArrowRightIcon />
          </button>
        </motion.div>
      </div>
    </Section>
  );
}
