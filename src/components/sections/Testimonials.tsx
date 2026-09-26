import { useRef, useState } from "react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../../data/testimonials";
import { Section } from "../layout/Section";
import { TestimonialCard } from "../testimonials/TestimonialCard";
import styles from "./Testimonials.module.css";

const GAP = 20;
const CARD_WIDTH = 304;

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 18 9 12l6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m9 18 6-6-6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Testimonials() {
  const viewportRef = useRef<HTMLDivElement>(null);
  /* Duplicate so arrows can advance past the first set */
  const slides = [...TESTIMONIALS, ...TESTIMONIALS];
  const [offset, setOffset] = useState(0);

  function getStep() {
    const card = viewportRef.current?.querySelector<HTMLElement>("[data-testimonial-card]");
    return (card?.offsetWidth ?? CARD_WIDTH) + GAP;
  }

  function scrollByCard(direction: -1 | 1) {
    const step = getStep();
    const max = Math.max(0, (slides.length - 1) * step);
    setOffset((current) => {
      const next = current + direction * step;
      if (next < 0) return 0;
      if (next > max) return max;
      return next;
    });
  }

  const atStart = offset <= 0;
  const atEnd = offset >= Math.max(0, (slides.length - 1) * getStep());

  return (
    <Section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.div
            className={styles.heading}
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

        {/*
          Clip only — no overflow-x:auto scrollport, so vertical page
          scroll is never trapped over this section.
        */}
        <div className={styles.carousel} ref={viewportRef}>
          <div
            className={styles.track}
            style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
          >
            {slides.map((item, slideIndex) => (
              <TestimonialCard
                key={`${item.name}-${slideIndex}`}
                item={item}
                index={slideIndex % TESTIMONIALS.length}
              />
            ))}
          </div>
        </div>

        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navBtn}
            aria-label="Previous testimonial"
            disabled={atStart}
            onClick={() => scrollByCard(-1)}
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            className={styles.navBtn}
            aria-label="Next testimonial"
            disabled={atEnd}
            onClick={() => scrollByCard(1)}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </Section>
  );
}

