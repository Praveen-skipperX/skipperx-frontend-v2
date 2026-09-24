import { motion } from "motion/react";
import { NSDC_CHIPS, NSDC_MILESTONES } from "../../data/nsdc";
import { Section } from "../layout/Section";
import { MilestoneNode } from "../nsdc/MilestoneNode";
import { AwardIcon, CheckCircleIcon } from "../nsdc/NsdcIcons";
import styles from "./NSDCCertification.module.css";

export function NSDCCertification() {
  return (
    <Section className={styles.section}>
      <div className={styles.glowTop} aria-hidden="true" />
      <div className={styles.glowBottom} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.rule} />

        <div className={styles.intro}>
          <div>
            <motion.p
              className={styles.kicker}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              04 — Recognition
            </motion.p>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Officially{" "}
              <span className={styles.accent}>NSDC</span>
              <br />
              Certified.
            </motion.h2>
          </div>

          <div>
            <motion.p
              className={styles.lede}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
            >
              SkipperX is an official NSDC-certified partner — meaning every
              certificate you earn here carries the weight of the Government of
              India&apos;s National Skill Development Corporation behind it.
              That&apos;s not a badge. That&apos;s a career asset.
            </motion.p>
            <motion.div
              className={styles.chips}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
            >
              {NSDC_CHIPS.map((chip) => (
                <div key={chip} className={styles.chip}>
                  <CheckCircleIcon size={14} className={styles.chipIcon} />
                  <span className={styles.chipLabel}>{chip}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.partner}>
            <AwardIcon size={12} className={styles.partnerIcon} />
            <span className={styles.partnerLabel}>NSDC PARTNER</span>
          </div>

          <motion.p
            className={styles.journey}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Your certification journey
          </motion.p>

          <div className={styles.desktopTrack}>
            {NSDC_MILESTONES.map((milestone, index) => (
              <MilestoneNode
                key={milestone.id}
                milestone={milestone}
                index={index}
                nextAccent={NSDC_MILESTONES[index + 1]?.accent}
              />
            ))}
          </div>

          <div className={styles.mobileTrack}>
            {NSDC_MILESTONES.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.id}
                  className={styles.mobileItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={styles.mobileCircle}
                    style={{
                      background: `radial-gradient(circle, ${milestone.accent}18, ${milestone.accent}06)`,
                      border: `1.5px solid ${milestone.accent}44`,
                      boxShadow: `0 0 20px ${milestone.glow}`,
                    }}
                  >
                    <Icon size={24} style={{ color: milestone.accent }} />
                    <div
                      className={styles.badge}
                      style={{ background: milestone.accent }}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <h3 className={styles.mobileTitle}>{milestone.title}</h3>
                  <p className={styles.mobileBody}>{milestone.body}</p>
                </motion.div>
              );
            })}
          </div>

          <div className={styles.impact}>
            <div className={styles.impactRow}>
              <span className={styles.impactLabel}>CERTIFICATION IMPACT</span>
              <span className={styles.impactValue}>3.2x avg. salary uplift</span>
            </div>
            <div className={styles.barTrack}>
              <motion.div
                className={styles.barFill}
                initial={{ width: "0%" }}
                whileInView={{ width: "82%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
