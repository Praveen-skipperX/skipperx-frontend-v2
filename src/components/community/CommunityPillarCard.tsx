import type { CommunityPillar } from "../../data/community";
import {
  AllianceIcon,
  EngageIcon,
  ProfileIcon,
  PurposeIcon,
} from "./CommunityIcons";
import styles from "./CommunityPillarCard.module.css";

const ICONS = {
  purpose: PurposeIcon,
  alliance: AllianceIcon,
  engage: EngageIcon,
  profile: ProfileIcon,
};

type CommunityPillarCardProps = {
  pillar: CommunityPillar;
};

export function CommunityPillarCard({ pillar }: CommunityPillarCardProps) {
  const Glyph = ICONS[pillar.icon];

  return (
    <article
      className={styles.card}
      style={{
        borderColor: `${pillar.color}22`,
        background: `linear-gradient(180deg, ${pillar.color}0A 0%, rgb(17 17 19 / 0.92) 42%)`,
      }}
    >
      <div
        className={styles.icon}
        style={{
          color: pillar.color,
          background: `${pillar.color}1A`,
        }}
      >
        <Glyph size={16} />
      </div>
      <h3 className={styles.title}>{pillar.title}</h3>
      <p className={styles.copy}>{pillar.copy}</p>
    </article>
  );
}
