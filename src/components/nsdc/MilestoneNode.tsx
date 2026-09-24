import { motion } from "motion/react";
import type { NsdcMilestone } from "../../data/nsdc";
import styles from "./MilestoneNode.module.css";

type MilestoneNodeProps = {
  milestone: NsdcMilestone;
  index: number;
  nextAccent?: string;
};

export function MilestoneNode({
  milestone,
  index,
  nextAccent,
}: MilestoneNodeProps) {
  const Icon = milestone.icon;

  return (
    <div className={styles.node}>
      {nextAccent ? (
        <div
          className={styles.connector}
          style={{
            background: `linear-gradient(90deg, ${milestone.accent}55 0%, ${nextAccent}33 100%)`,
          }}
        >
          <div
            className={styles.connectorDot}
            style={{
              background: milestone.accent,
              boxShadow: `0 0 6px ${milestone.accent}`,
            }}
          />
        </div>
      ) : null}

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.55,
          delay: index * 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className={styles.iconWrap}>
          <motion.div
            className={styles.pulse}
            style={{ background: milestone.ring, scale: 1.6 }}
            animate={{ opacity: [0.5, 0.15, 0.5] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          />
          <div
            className={styles.circle}
            style={{
              background: `radial-gradient(circle at 35% 35%, ${milestone.accent}22, ${milestone.accent}08)`,
              border: `1.5px solid ${milestone.accent}55`,
              boxShadow: `0 0 24px ${milestone.glow}, 0 0 60px ${milestone.ring}, inset 0 1px 0 ${milestone.accent}33`,
            }}
          >
            <div
              className={styles.circleSheen}
              style={{
                background: `radial-gradient(circle at 40% 35%, ${milestone.accent}18, transparent 65%)`,
              }}
            />
            <Icon
              size={28}
              style={{
                color: milestone.accent,
                filter: `drop-shadow(0 0 8px ${milestone.glow})`,
              }}
            />
          </div>
          <div
            className={styles.badge}
            style={{ background: milestone.accent }}
          >
            {index + 1}
          </div>
        </div>
        <h3 className={styles.title}>{milestone.title}</h3>
        <p className={styles.body}>{milestone.body}</p>
      </motion.div>
    </div>
  );
}
