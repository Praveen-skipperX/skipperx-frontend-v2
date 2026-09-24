import { useRef } from "react";
import { motion } from "motion/react";
import { TESTIMONIALS, TESTIMONIAL_COMPANIES } from "../../data/testimonials";
import { Section } from "../layout/Section";
import { TestimonialCard } from "../testimonials/TestimonialCard";
import styles from "./Testimonials.module.css";

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 18 9 12l6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m9 18 6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: -1 | 1) {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = Math.min(node.clientWidth * 0.85, 340);
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <Section id="testimonials" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.rule} />
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.kicker}>06 — Student Voices</p>
            <h2 className={styles.title}>Don&apos;t take our word for it.</h2>
          </motion.div>
          <motion.p
            className={styles.lede}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            These aren&apos;t success stories we picked. They&apos;re the kind of
            outcomes that happen when you stop studying for exams and start
            training for real life.
          </motion.p>
        </div>

        <div className={styles.carousel}>
          <div ref={scrollerRef} className={styles.track}>
            {TESTIMONIALS.map((item, index) => (
              <TestimonialCard key={item.name} item={item} index={index} />
            ))}
          </div>
          <div className={styles.nav}>
            <button
              type="button"
              className={styles.navBtn}
              aria-label="Previous testimonial"
              onClick={() => scrollByCard(-1)}
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              className={styles.navBtn}
              aria-label="Next testimonial"
              onClick={() => scrollByCard(1)}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.companiesLabel}>
            Our students are building and working at
          </p>
          <div className={styles.companies}>
            {TESTIMONIAL_COMPANIES.map((name) => (
              <span key={name} className={styles.company}>
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
