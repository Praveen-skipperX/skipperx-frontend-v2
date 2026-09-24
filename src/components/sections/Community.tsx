import { motion } from "motion/react";
import type { MouseEvent } from "react";
import { COMMUNITY_FEED, COMMUNITY_PILLARS, COMMUNITY_QUOTES, COMMUNITY_STATS } from "../../data/community";
import { scrollToId } from "../../lib/scrollToId";
import {
  ArrowUpRightIcon,
  GrowthIcon,
  MembersIcon,
  MessagesIcon,
} from "../community/CommunityIcons";
import { CommunityPillarCard } from "../community/CommunityPillarCard";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import styles from "./Community.module.css";

const STAT_ICONS = {
  members: MembersIcon,
  messages: MessagesIcon,
  growth: GrowthIcon,
};

export function Community() {
  function goToEnroll(
    event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) {
    event.preventDefault();
    scrollToId("contact");
  }

  return (
    <Section id="community" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.kicker}>09 — Community</p>
            <h2 className={styles.title}>
              The People Who&apos;ll{" "}
              <span className={styles.accent}>Build Tomorrow</span>
              {" — Are Already Here"}
            </h2>
          </motion.div>
          <motion.div
            className={styles.aside}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className={styles.lede}>
              India&apos;s boldest community of learners and creators — building,
              growing, and winning together.
            </p>
            <div className={styles.members}>
              <img
                className={styles.avatarStack}
                src="/community/avatar-stack.jpg"
                alt=""
                width={184}
                height={44}
              />
              <span className={styles.membersLabel}>active members</span>
            </div>
          </motion.div>
        </div>

        <div className={styles.stage}>
          <motion.figure
            className={styles.photoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <img
              className={styles.photo}
              src="/community/community-photo.jpg"
              alt="SkipperX community members together"
            />
            <div className={styles.photoFade} aria-hidden="true" />
            <figcaption className={styles.caption}>
              Not just another WhatsApp group — this is where your influence
              learns to lead.
            </figcaption>
            <ul className={styles.feed} aria-hidden="true">
              {COMMUNITY_FEED.map((item) => (
                <li key={item} className={styles.feedChip}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.figure>

          <div className={styles.pillars}>
            {COMMUNITY_PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.12 + index * 0.08,
                  ease: [0, 0, 0.2, 1],
                }}
              >
                <CommunityPillarCard pillar={pillar} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.quotes}>
          {COMMUNITY_QUOTES.map((item, index) => (
            <motion.blockquote
              key={item.name}
              className={styles.quote}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 + index * 0.06 }}
            >
              <p className={styles.quoteName}>{item.name}</p>
              <p className={styles.quoteRole}>{item.role}</p>
              <p className={styles.quoteText}>&ldquo;{item.quote}&rdquo;</p>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          className={styles.bar}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          <ul className={styles.stats}>
            {COMMUNITY_STATS.map((stat) => {
              const Glyph = STAT_ICONS[stat.icon];
              return (
                <li key={stat.label} className={styles.stat}>
                  <span
                    className={styles.statIcon}
                    style={{ color: stat.color, background: `${stat.color}1A` }}
                  >
                    <Glyph size={16} />
                  </span>
                  <span>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </span>
                </li>
              );
            })}
          </ul>
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className={styles.cta}
            onClick={goToEnroll}
          >
            Join the Movement
            <ArrowUpRightIcon size={16} />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
