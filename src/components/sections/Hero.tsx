import { motion, useScroll, useTransform } from "motion/react";
import { AmbientGlow } from "../ui/AmbientGlow";
import { Badge } from "../ui/Badge";
import { GradientText } from "../ui/GradientText";
import { scrollToId } from "../../lib/scrollToId";
import heroBg from "../../assets/hero-bg.jpeg";
import styles from "./Hero.module.css";

const EASE = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: "10,000+", label: "Students Trained" },
  { value: "3", label: "Career Tracks" },
  { value: "50+", label: "Industry Mentors" },
  { value: "95%", label: "Placement Rate" },
];

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], ["0%", "18%"]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.08]);
  const imageOpacity = useTransform(scrollY, [0, 700], [1, 0.55]);

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <motion.div className={styles.media} style={{ y, scale, opacity: imageOpacity }}>
        <img
          className={styles.bg}
          src={heroBg}
          alt=""
          aria-hidden="true"
        />
        <div className={styles.dim} aria-hidden="true" />
        <div className={styles.overlay} aria-hidden="true" />
        <AmbientGlow className={styles.glow} />
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.badgeWrap}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge pulse>Cohort 4 — Applications Open</Badge>
        </motion.div>

        <div className={styles.titleWrap}>
          <motion.h1
            id="hero-heading"
            className={styles.title}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          >
            The Only School
            <br />
            That Prepares You
            <br />
            For The <GradientText>World That Exists.</GradientText>
          </motion.h1>
        </div>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Not theory. Not certificates. Not another course you&apos;ll never
          finish. SkipperX trains India&apos;s next founders, engineers, and
          self-starters with real skills, real mentors, and real outcomes.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a
            className={styles.primaryCta}
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              scrollToId("contact");
            }}
          >
            Apply for April Cohort
            <ArrowRight />
          </a>
          <a
            className={styles.secondaryCta}
            href="#programs"
            onClick={(event) => {
              event.preventDefault();
              scrollToId("programs");
            }}
          >
            Explore Programs →
          </a>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          {STATS.map((stat, index) => (
            <div key={stat.label} className={styles.stat}>
              {index > 0 ? <span className={styles.divider} aria-hidden="true" /> : null}
              <div className={styles.statCopy}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      className={styles.arrow}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
