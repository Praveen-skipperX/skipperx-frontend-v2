import { useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../ui/Logo";
import { Container } from "./Container";
import { scrollToId } from "../../lib/scrollToId";
import styles from "./Header.module.css";

const NAV = [
  { label: "Career Paths", to: "/career-paths" },
  { label: "Why SkipperX", hash: "why" },
  { label: "Community", hash: "community" },
  { label: "Contact", hash: "contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  function onHash(id: string) {
    setOpen(false);
    scrollToId(id);
  }

  function onEnquire(event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
    event.preventDefault();
    onHash("contact");
  }

  return (
    <header className={styles.header}>
      <Container as="div" className={styles.inner}>
        <div className={styles.bar}>
          <Link
            to="/"
            className={styles.brand}
            aria-label="SkipperX home"
            onClick={() => setOpen(false)}
          >
            <Logo size={24} />
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
          {NAV.map((item) =>
            "to" in item ? (
              <Link key={item.label} className={styles.navLink} to={item.to}>
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                className={styles.navLink}
                href={`#${item.hash}`}
                onClick={(event) => {
                  event.preventDefault();
                  onHash(item.hash);
                }}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className={styles.desktopCta}>
          <a href="#contact" className={styles.enquire} onClick={onEnquire}>
            Enquire Now →
          </a>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className={styles.mobilePanel}>
          <nav className={styles.mobileNav} aria-label="Mobile">
            {NAV.map((item) =>
              "to" in item ? (
                <Link
                  key={item.label}
                  className={styles.mobileLink}
                  to={item.to}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  className={styles.mobileLink}
                  href={`#${item.hash}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onHash(item.hash);
                  }}
                >
                  {item.label}
                </a>
              ),
            )}
            <a href="#contact" className={styles.mobileEnquire} onClick={onEnquire}>
              Enquire Now →
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

