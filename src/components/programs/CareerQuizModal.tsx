import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  QUIZ_QUESTIONS,
  QUIZ_RESULTS,
  type TrackKey,
} from "../../data/programs";
import styles from "./CareerQuizModal.module.css";

const OPTION_THEME: Record<TrackKey, { color: string; dim: string; border: string }> = {
  entrepreneurs: {
    color: "#FF6B6B",
    dim: "rgba(255,107,107,0.1)",
    border: "rgba(255,107,107,0.3)",
  },
  innovators: {
    color: "#00D4FF",
    dim: "rgba(0,212,255,0.08)",
    border: "rgba(0,212,255,0.25)",
  },
  hustlers: {
    color: "#A855F7",
    dim: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.25)",
  },
};

type CareerQuizModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function winningTrack(answers: TrackKey[]): TrackKey {
  const tally: Record<TrackKey, number> = {
    entrepreneurs: 0,
    innovators: 0,
    hustlers: 0,
  };
  answers.forEach((answer) => {
    tally[answer] += 1;
  });
  return (Object.entries(tally) as [TrackKey, number][]).sort(
    (a, b) => b[1] - a[1],
  )[0][0];
}

export function CareerQuizModal({ isOpen, onClose }: CareerQuizModalProps) {
  const [phase, setPhase] = useState<"quiz" | "result">("quiz");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<TrackKey[]>([]);
  const [picked, setPicked] = useState<TrackKey | null>(null);
  const [direction, setDirection] = useState(1);
  const [resultKey, setResultKey] = useState<TrackKey | null>(null);

  const total = QUIZ_QUESTIONS.length;
  const question = QUIZ_QUESTIONS[step];
  const result = resultKey ? QUIZ_RESULTS[resultKey] : null;

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  function reset() {
    setPhase("quiz");
    setStep(0);
    setAnswers([]);
    setPicked(null);
    setDirection(1);
    setResultKey(null);
  }

  function close() {
    onClose();
    window.setTimeout(reset, 400);
  }

  function choose(track: TrackKey) {
    if (picked) return;
    setPicked(track);
    window.setTimeout(() => {
      const next = [...answers, track];
      if (step < total - 1) {
        setDirection(1);
        setAnswers(next);
        setStep((value) => value + 1);
        setPicked(null);
      } else {
        setResultKey(winningTrack(next));
        setPhase("result");
      }
    }, 320);
  }

  function back() {
    if (step === 0) return;
    setDirection(-1);
    setAnswers((value) => value.slice(0, -1));
    setStep((value) => value - 1);
    setPicked(null);
  }

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          />
          <motion.div
            className={styles.layer}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className={styles.dialog}
              role="dialog"
              aria-modal="true"
              aria-labelledby="quiz-title"
            >
              <div
                className={styles.topLine}
                style={{
                  background:
                    phase === "result" && result
                      ? `linear-gradient(90deg, transparent, ${result.color}, transparent)`
                      : "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
                }}
              />

              {phase === "quiz" ? (
                <div className={styles.progressTrack}>
                  <motion.div
                    className={styles.progress}
                    initial={false}
                    animate={{ width: `${(step / total) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              ) : null}

              <button
                type="button"
                className={styles.close}
                aria-label="Close quiz"
                onClick={close}
              >
                <CloseIcon />
              </button>

              {phase === "quiz" && question ? (
                <div className={styles.quizBody}>
                  <div className={styles.quizNav}>
                    {step > 0 ? (
                      <button
                        type="button"
                        className={styles.back}
                        aria-label="Previous question"
                        onClick={back}
                      >
                        <BackIcon />
                      </button>
                    ) : null}
                    <div className={styles.stepMeta}>
                      <span className={styles.stepCount}>
                        {step + 1} / {total}
                      </span>
                      <span className={styles.dots}>
                        {QUIZ_QUESTIONS.map((item, index) => (
                          <span
                            key={item.id}
                            className={styles.dot}
                            style={{
                              background:
                                index < step
                                  ? "#FE8324"
                                  : index === step
                                    ? "rgba(255,255,255,0.5)"
                                    : "rgba(255,255,255,0.1)",
                            }}
                          />
                        ))}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={question.id}
                      initial={{ opacity: 0, x: direction * 32 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -32 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                      <p className={styles.kicker}>Career Quiz</p>
                      <h2 id="quiz-title" className={styles.question}>
                        {question.question}
                      </h2>
                      <p className={styles.subtext}>{question.subtext}</p>
                      <div className={styles.options}>
                        {question.options.map((option, index) => {
                          const theme = OPTION_THEME[option.track];
                          const selected = picked === option.track;
                          return (
                            <motion.button
                              key={option.label}
                              type="button"
                              disabled={Boolean(picked)}
                              onClick={() => choose(option.track)}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.07, duration: 0.25 }}
                              className={styles.option}
                              style={{
                                background: selected
                                  ? theme.dim
                                  : "rgba(255,255,255,0.03)",
                                borderColor: selected
                                  ? theme.border
                                  : "rgba(255,255,255,0.07)",
                              }}
                            >
                              <span
                                className={styles.emoji}
                                style={{
                                  background: selected
                                    ? theme.dim
                                    : "rgba(255,255,255,0.04)",
                                  borderColor: selected
                                    ? theme.border
                                    : "rgba(255,255,255,0.07)",
                                }}
                              >
                                {option.emoji}
                              </span>
                              <span
                                className={styles.optionLabel}
                                style={{
                                  color: selected ? "#fff" : "rgb(156,163,175)",
                                }}
                              >
                                {option.label}
                              </span>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : null}

              {phase === "result" && result ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  <div
                    className={styles.resultHero}
                    style={{
                      background: `linear-gradient(160deg, ${result.colorDim} 0%, rgba(12,12,14,0) 60%)`,
                    }}
                  >
                    <div
                      className={styles.resultOrb}
                      style={{
                        background: `radial-gradient(ellipse, ${result.colorDim} 0%, transparent 70%)`,
                      }}
                      aria-hidden="true"
                    />
                    <div className={styles.resultIdentity}>
                      <div
                        className={styles.resultIcon}
                        style={{
                          background: result.colorDim,
                          border: `1px solid ${result.colorBorder}`,
                          boxShadow: `0 0 24px ${result.colorDim}`,
                        }}
                      >
                        {result.icon}
                      </div>
                      <div>
                        <div
                          className={styles.resultTag}
                          style={{
                            background: result.colorDim,
                            color: result.color,
                            border: `1px solid ${result.colorBorder}`,
                          }}
                        >
                          {result.tagline}
                        </div>
                        <h3 className={styles.resultLabel}>{result.label}</h3>
                      </div>
                    </div>
                    <motion.p
                      className={styles.resultCopy}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span style={{ color: result.color }}>{result.headline}</span>{" "}
                      {result.description}
                    </motion.p>
                  </div>

                  <div className={styles.resultBody}>
                    <p className={styles.recommended}>Recommended Programs</p>
                    <div className={styles.programGrid}>
                      {result.programs.map((name, index) => (
                        <motion.div
                          key={name}
                          className={styles.programChip}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.25 + index * 0.06 }}
                        >
                          <span
                            className={styles.chipDot}
                            style={{ background: result.color }}
                          />
                          <span>{name}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className={styles.resultActions}>
                      <a
                        href="#programs"
                        className={styles.explore}
                        style={{
                          background: result.color,
                          boxShadow: `0 4px 24px ${result.colorDim}`,
                        }}
                        onClick={(event) => {
                          event.preventDefault();
                          close();
                          window.setTimeout(() => {
                            document
                              .getElementById("programs")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }, 300);
                        }}
                      >
                        Explore Programs
                        <ArrowIcon />
                      </a>
                      <button
                        type="button"
                        className={styles.retake}
                        title="Retake quiz"
                        aria-label="Retake quiz"
                        onClick={reset}
                      >
                        <RetakeIcon />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RetakeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
