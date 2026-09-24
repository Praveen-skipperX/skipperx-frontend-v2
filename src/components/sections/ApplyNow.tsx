import { motion } from "motion/react";
import type { MouseEvent } from "react";
import { scrollToId } from "../../lib/scrollToId";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import styles from "./ApplyNow.module.css";

const PERKS = [
  "No entrance test",
  "EMI available",
  "Money-back guarantee",
  "Placement support",
] as const;

function CheckIcon() {
  return (
    <svg
      className={styles.check}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.2 7.2 5.4 10.3 11.8 3.7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ApplyNow() {
  function goToEnroll(
    event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) {
    event.preventDefault();
    scrollToId("contact");
  }

  return (
    <Section id="apply" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
        >
          <p className={styles.kicker}>08 — Apply Now</p>
          <h2 className={styles.title}>
            Your Cohort Starts
            <br />
            <span className={styles.accent}>April 1. Don&apos;t Miss It.</span>
          </h2>
          <p className={styles.lede}>
            Applications take 3 minutes. No entrance exam. No prerequisites. Just
            ambition, and a commitment to stop being average. Seats are limited —
            every cohort sells out.
          </p>
          <div className={styles.actions}>
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className={styles.primary}
              onClick={goToEnroll}
            >
              Apply Now –It&apos;s Free →
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              className={styles.secondary}
              onClick={goToEnroll}
            >
              Schedule a Call Instead →
            </Button>
          </div>
          <ul className={styles.perks}>
            {PERKS.map((perk, index) => (
              <motion.li
                key={perk}
                className={styles.perk}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.16 + index * 0.08 }}
              >
                <CheckIcon />
                {perk}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
