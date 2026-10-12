import { CP_ASSETS, CP_QUOTE } from "../../data/careerPaths";
import styles from "./CareerQuote.module.css";
import invertedComma from "../../assets/InvertedComma.png";

export function CareerQuote() {
  return (
    <section className={styles.section} data-node-id="1021:4603">
      <div className={styles.frame}>
        <img className={styles.bg} src={CP_ASSETS.quoteBg} alt="" />
        <div className={styles.scrim} aria-hidden="true" />
        <div className={styles.content}>
          <img className={styles.mark} src={invertedComma} width={32} height={32} alt="" />
          <blockquote className={styles.quote}>{CP_QUOTE.text}</blockquote>
          <p className={styles.attr}>{CP_QUOTE.attribution}</p>
          <p className={styles.tracks}>
            {CP_QUOTE.tracks.map((track, index) => (
              <span key={track}>
                {index > 0 ? <span className={styles.dot}> · </span> : null}
                {track}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
