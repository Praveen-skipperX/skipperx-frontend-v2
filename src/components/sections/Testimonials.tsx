import { motion } from "motion/react";
import { TESTIMONIALS, TESTIMONIAL_COMPANIES } from "../../data/testimonials";
import { Section } from "../layout/Section";
import { TestimonialCard } from "../testimonials/TestimonialCard";
import styles from "./Testimonials.module.css";

export function Testimonials() {
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

        <div className={styles.grid}>
          {TESTIMONIALS.map((item, index) => (
            <TestimonialCard key={item.name} item={item} index={index} />
          ))}
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
