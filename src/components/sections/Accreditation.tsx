import { motion } from "motion/react";
import type { ReactNode } from "react";
import { GoogleEduLogo, NsdcLogo, SkillIndiaLogo, StartupIndiaLogo } from "../accreditation/Logos";
import styles from "./Accreditation.module.css";

function AccreditationCard({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Accreditation() {
  return (
    <section id="accreditation" className={styles.section} aria-labelledby="accreditation-heading">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <motion.h2
          id="accreditation-heading"
          className={styles.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          We are{" "}
          <span className={styles.accent}>accredited</span> by
        </motion.h2>

        <div className={styles.grid}>
          <AccreditationCard delay={0.1}>
            <SkillIndiaLogo />
          </AccreditationCard>
          <AccreditationCard delay={0.18}>
            <NsdcLogo />
          </AccreditationCard>
          <AccreditationCard delay={0.26}>
            <StartupIndiaLogo />
          </AccreditationCard>
          <AccreditationCard delay={0.34}>
            <GoogleEduLogo />
          </AccreditationCard>
        </div>
      </div>
    </section>
  );
}
