import type { CSSProperties } from "react";
import { CP_REVIEWS, CP_VALUE } from "../../data/careerPaths";
import styles from "./CareerValue.module.css";
import invertedComma from "../../assets/InvertedComma.png";
import invertedCommaCyan from "../../assets/Inverted-comma-cyan.png";
import invertedCommaPurple from "../../assets/Inverted-comma-purple.png";

export function CareerValue() {
  return (
    <section className={styles.section} data-node-id="1277:3560">
      <div className={styles.inner}>
        <div className={styles.divider} />
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={styles.title}>
              {CP_VALUE.titleBefore}
              <span className={styles.gradOrange}>{CP_VALUE.titlePrepared}</span>
              <br />
              {CP_VALUE.titleMid}
              <span className={styles.gradTracks}>{CP_VALUE.titleCapable}</span>
            </h2>
            <p className={styles.body}>{CP_VALUE.body}</p>
            <ul className={styles.points}>
              {CP_VALUE.points.map((point) => (
                <li key={point.title} className={styles.point}>
                  <span
                    className={styles.dot}
                    style={{ background: point.color } as CSSProperties}
                  />
                  <div>
                    <p className={styles.pointTitle}>{point.title}</p>
                    <p className={styles.pointBody}>{point.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.reviews}>
            {CP_REVIEWS.map((review) => (
              <article
                key={review.name}
                className={styles.review}
                style={
                  {
                    "--accent": review.accent,
                    "--fill": review.fill,
                    "--border": review.border,
                    "--border-hover": review.borderHover,
                  } as CSSProperties
                }
              >
                <img className={styles.quoteMark} src={review.tag === "Innovators" ? invertedCommaCyan : review.tag === "Hustlers" ? invertedCommaPurple : invertedComma} width={24} height={24} alt="" />
                <p className={styles.reviewText}>{review.quote}</p>
                <div className={styles.reviewFooter}>
                  <div className={styles.author}>
                    <span className={styles.avatar}>{review.initial}</span>
                    <span className={styles.name}>{review.name}</span>
                  </div>
                  <span className={styles.tag}>{review.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
