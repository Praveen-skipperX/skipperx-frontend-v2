import type { CSSProperties } from "react";
import { motion } from "motion/react";
import { CP_PROCESS } from "../../data/careerPaths";
import styles from "./CareerProcess.module.css";

export function CareerProcess() {
  return (
    <section className={styles.section} data-node-id="1012:2828">
      <div className={styles.inner}>
        <div className={styles.divider} />
        <header className={styles.header}>
          <p className={styles.eyebrow}>The Process</p>
          <h2 className={styles.title}>
            From zero to <span className={styles.gradient}>unstoppable.</span>
          </h2>
        </header>

        <ol className={styles.timeline}>
          {CP_PROCESS.map((step, index) => (
            <li
              key={step.num}
              className={`${styles.row} ${step.side === "right" ? styles.rowRight : styles.rowLeft}`}
            >
              <motion.article
                className={styles.card}
                style={
                  {
                    "--accent": step.accent,
                    "--border": step.border,
                    "--fill": step.fill,
                    "--num": step.numColor,
                  } as CSSProperties
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className={styles.iconBox}>
                  <img src={step.icon} width={24} height={24} alt="" />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTitleRow}>
                    <span className={styles.num}>{step.num}</span>
                    <h3 className={styles.cardTitle}>{step.title}</h3>
                  </div>
                  <p className={styles.cardText}>{step.body}</p>
                </div>
              </motion.article>

              <div className={styles.spine} aria-hidden="true">
                <span className={styles.spineDot}>
                  <img src={step.iconSmall} width={16} height={16} alt="" />
                </span>
                {index < CP_PROCESS.length - 1 ? (
                  <span className={styles.spineLine} />
                ) : null}
              </div>

              <div className={styles.spacer} aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
