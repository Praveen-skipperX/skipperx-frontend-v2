import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FOOTER_LEGAL,
  FOOTER_NAV,
  FOOTER_SIGNALS,
  FOOTER_STATS,
} from "../../data/footer";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { scrollToId } from "../../lib/scrollToId";
import styles from "./Footer.module.css";

function ArrowUpRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function CornerArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 2v8h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9H3.75v11.25H6.5V9ZM5.13 3.75A1.88 1.88 0 1 0 5.14 7.5 1.88 1.88 0 0 0 5.13 3.75ZM20.25 20.25h-2.74v-5.48c0-1.31-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.89v5.57H10.86V9h2.63v1.54h.04c.37-.7 1.26-1.82 2.6-1.82 2.78 0 3.29 1.83 3.29 4.21v7.32Z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");

  function onSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function onHash(id: string) {
    scrollToId(id);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.dots} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.rule} />

        <div className={styles.top}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge pulse className={styles.badge}>
              Cohort 4 — Enrolling Now
            </Badge>
            <h2 className={styles.title}>
              Stop scrolling.
              <br />
              Start building.
            </h2>
            <p className={styles.lede}>
              The 99% watch. The 1% do. SkipperX is where the doers come to
              level up — real skills, real mentors, real results.
            </p>
          </motion.div>

          <motion.dl
            className={styles.metrics}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            {FOOTER_STATS.map((stat) => (
              <div key={stat.label} className={styles.metric}>
                <dt className={styles.metricValue}>{stat.value}</dt>
                <dd className={styles.metricLabel}>{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className={styles.grid}>
          <motion.div
            className={styles.circle}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className={styles.kicker}>Inner Circle</p>
            <h3 className={styles.circleTitle}>
              The 99% scroll past. You didn&apos;t.
            </h3>
            <form className={styles.form} onSubmit={onSubscribe}>
              <label className={styles.srOnly} htmlFor="footer-email">
                Email
              </label>
              <input
                id="footer-email"
                className={styles.input}
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="Enter Your Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Button type="submit" variant="primary" className={styles.subscribe}>
                Subscribe
                <ArrowUpRightIcon />
              </Button>
            </form>
            <p className={styles.note}>No spam. Only signal. Unsubscribe whenever.</p>
            <ul className={styles.signals}>
              {FOOTER_SIGNALS.map((signal) => (
                <li key={signal.text} className={styles.signal}>
                  <span
                    className={styles.dot}
                    style={{ background: signal.color }}
                    aria-hidden="true"
                  />
                  {signal.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className={styles.cols}>
            <nav className={styles.col} aria-label="Footer">
              <p className={styles.colTitle}>Navigate</p>
              <ul className={styles.links}>
                {FOOTER_NAV.map((item) => (
                  <li key={item.label}>
                    {"to" in item ? (
                      <Link className={styles.link} to={item.to}>
                        <span className={styles.bullet} aria-hidden="true" />
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        className={styles.link}
                        href={`#${item.hash}`}
                        onClick={(event) => {
                          event.preventDefault();
                          onHash(item.hash);
                        }}
                      >
                        <span className={styles.bullet} aria-hidden="true" />
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.col}>
              <p className={styles.colTitle}>Reach Us</p>
              <ul className={styles.reach}>
                <li>
                  <a className={styles.mail} href="mailto:hello@skipperx.in">
                    <CornerArrowIcon />
                    hello@skipperx.in
                  </a>
                </li>
                <li>
                  <a
                    className={styles.mail}
                    href="mailto:partnerships@skipperx.in"
                  >
                    <CornerArrowIcon />
                    partnerships@skipperx.in
                  </a>
                </li>
              </ul>
              <div className={styles.socials}>
                <a className={styles.social} href="#" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a className={styles.social} href="#" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <ul className={styles.legal}>
          {FOOTER_LEGAL.map((item) => (
            <li key={item.label}>
              <a className={styles.legalLink} href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.brand}>
        <p className={styles.copy}>
          © 2026 SkipperX · All rights reserved · Built for the top 1%.
        </p>
        <p className={styles.wordmark} aria-hidden="true">
          SKIPPER<span className={styles.wordmarkX}>X</span>
        </p>
      </div>
    </footer>
  );
}
