import type { CSSProperties } from "react";
import { motion } from "motion/react";
import { CP_ASSETS, CP_HERO } from "../../data/careerPaths";
import styles from "./CareerHero.module.css";
type CareerHeroProps = {
    onQuiz: () => void;
};
export function CareerHero({ onQuiz }: CareerHeroProps) {
    return (<section className={styles.section} data-node-id="1004:4160">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <motion.h1 className={styles.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <span>{CP_HERO.titleLine1}</span>
            <span className={styles.titleLine2}>
              <span className={styles.gradZero}>Zero</span>{" "}
              <span className={styles.gradExcuses}>excuses.</span>
            </span>
          </motion.h1>

          <motion.p className={styles.body} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }}>
            {CP_HERO.body}
          </motion.p>

          <motion.div className={styles.ctaBlock} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.14 }}>
            <button type="button" className={styles.cta} onClick={onQuiz}>
              {CP_HERO.cta}
              <img src={CP_ASSETS.icons.shine} width={16} height={16} alt=""/>
            </button>
            <span className={styles.hint}>{CP_HERO.ctaHint}</span>
          </motion.div>

          <motion.ul className={styles.pills} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }}>
            {CP_HERO.pills.map((pill) => (<li key={pill.label} className={styles.pill}>
                <img src={pill.icon} width={14} height={14} alt=""/>
                <span>{pill.label}</span>
              </li>))}
          </motion.ul>
        </div>

        <motion.div className={styles.media} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} style={{ "--glow": "rgba(254,131,36,0.12)" } as CSSProperties}>
          <img className={styles.heroImage} src={CP_ASSETS.hero} alt="SkipperX career paths"/>
          <div className={styles.mediaFade} aria-hidden="true"/>
        </motion.div>
      </div>
    </section>);
}
