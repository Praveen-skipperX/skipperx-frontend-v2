import { CP_ASSETS, CP_CTA } from "../../data/careerPaths";
import styles from "./CareerCta.module.css";

type CareerCtaProps = {
  onQuiz: () => void;
};

export function CareerCta({ onQuiz }: CareerCtaProps) {
  return (
    <section className={styles.section} data-node-id="1277:3739">
      <div className={styles.card}>
        <h2 className={styles.title}>{CP_CTA.title}</h2>
        <p className={styles.body}>{CP_CTA.body.replace(" No sign-up required.", "\nNo sign-up required.")}</p>
        <button type="button" className={styles.button} onClick={onQuiz}>
          {CP_CTA.button}
          <img src={CP_ASSETS.icons.shine} width={16} height={16} alt="" />
        </button>
        <p className={styles.footnote}>{CP_CTA.footnote}</p>
      </div>
    </section>
  );
}
