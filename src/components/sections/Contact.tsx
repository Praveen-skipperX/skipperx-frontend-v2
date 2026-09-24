import { motion } from "motion/react";
import { ContactForm } from "../contact/ContactForm";
import { Section } from "../layout/Section";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <Section id="contact" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.rule} />
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.kicker}>07 — Enroll</p>
          <h2 className={styles.title}>
            Your next chapter{" "}
            <span className={styles.accent}>starts here.</span>
          </h2>
          <p className={styles.lede}>
            Drop your details — our team will reach out with everything you need
            to begin.
          </p>
        </motion.div>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className={styles.cardShine} aria-hidden="true" />
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  );
}
