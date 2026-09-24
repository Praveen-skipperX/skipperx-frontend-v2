import { AnimatePresence, motion } from "motion/react";
import { useState, type CSSProperties } from "react";
import { TRACK_ORDER, TRACKS, type TrackKey } from "../../data/programs";
import { Section } from "../layout/Section";
import { CareerQuizModal } from "../programs/CareerQuizModal";
import { ProgramCard } from "../programs/ProgramCard";
import styles from "./Programs.module.css";

export function Programs() {
  const [active, setActive] = useState<TrackKey>("entrepreneurs");
  const [quizOpen, setQuizOpen] = useState(false);
  const track = TRACKS[active];

  return (
    <Section id="programs" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>03 — Programs</span>
          <h2 className={styles.title}>
            Three tracks.
            <br />
            One <span className={styles.gradient}>direction.</span>
          </h2>
          <p className={styles.lede}>
            Pick the track that matches your ambition. Every path leads to the
            same place — the top.
          </p>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="Career tracks">
          {TRACK_ORDER.map((key) => {
            const item = TRACKS[key];
            const selected = active === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={selected}
                className={styles.tab}
                onClick={() => setActive(key)}
                style={{
                  background: selected ? item.colorDim : "transparent",
                  color: selected ? item.colorText : "#9ca3af",
                  borderColor: selected ? item.colorBorder : "transparent",
                }}
              >
                <span aria-hidden="true">{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={styles.panel}
            style={
              {
                "--track-color": track.color,
                "--track-border": track.colorBorder,
                "--track-text": track.colorText,
                "--track-badge": track.badgeBg,
              } as CSSProperties
            }
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            <div className={styles.trackHead}>
              <span className={styles.tagline}>{track.tagline}</span>
              <h3 className={styles.trackTitle}>{track.label}</h3>
              <p className={styles.trackCopy}>{track.description}</p>
              <div className={styles.rule} />
              <div className={styles.stats}>
                {track.stats.map((stat) => (
                  <div key={stat.label} className={styles.stat}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.cards}>
              {track.programs.map((program, index) => (
                <ProgramCard
                  key={program.name}
                  program={program}
                  track={track}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className={styles.cta}>
          <p className={styles.ctaCopy}>
            Not sure which track fits you? Let us help you decide in 2 minutes.
          </p>
          <button
            type="button"
            className={styles.quizButton}
            onClick={() => setQuizOpen(true)}
          >
            Take the Career Quiz
            <svg
              className={styles.quizArrow}
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
          </button>
        </div>
      </div>

      <CareerQuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </Section>
  );
}
