import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CP_ASSETS, CP_TRACK_DETAIL, trackProgramCount, } from "../../data/careerPaths";
import { TRACK_ORDER, TRACKS, type TrackKey } from "../../data/programs";
import { CAREER_IMAGES, type CareerImage } from "../../data/careerImages";
import styles from "./CareerExplore.module.css";
import invertedComma from "../../assets/InvertedComma.png";
import invertedCommaCyan from "../../assets/Inverted-comma-cyan.png";
import invertedCommaPurple from "../../assets/Inverted-comma-purple.png";
export function CareerExplore() {
    const [active, setActive] = useState<TrackKey>("entrepreneurs");
    const track = TRACKS[active];
    const detail = CP_TRACK_DETAIL[active];
    const stats = active === "innovators"
      ? [{ value: "4", label: "Programs" }, { value: "₹18L+", label: "Avg. Package" }, { value: "94%", label: "Placed" }]
      : active === "hustlers"
        ? [{ value: "2", label: "Programs" }, { value: "₹50K+", label: "Monthly Earnings" }, { value: "800+", label: "Active Hustlers" }]
        : track.stats;
    return (<>
      <section className={styles.pickerSection} data-node-id="1056:2798">
        <div className={styles.pickerInner}>
          <div className={styles.pickerRule}/>
          <p className={styles.eyebrow}>Explore Programs</p>
          <h2 className={styles.pickerTitle}>Choose your track.</h2>

          <div className={styles.trackTabs} role="tablist" aria-label="Career tracks">
            {TRACK_ORDER.map((key) => {
              const item = TRACKS[key];
              const selected = active === key;
              return (
                <button
                  key={`tab-${key}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`${styles.trackTab} ${selected ? styles.trackTabActive : ""}`}
                  style={
                    {
                      "--track": item.color,
                      "--track-dim": item.colorDim,
                      "--track-border": item.colorBorder,
                    } as CSSProperties
                  }
                  onClick={() => setActive(key)}
                >
                  <span aria-hidden="true">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className={styles.trackGrid} role="tablist" aria-label="Career tracks">
            {TRACK_ORDER.map((key) => {
            const item = TRACKS[key];
            const selected = active === key;
            return (<button key={key} type="button" role="tab" aria-selected={selected} className={`${styles.trackCard} ${selected ? styles.trackCardActive : ""}`} style={{
                    "--track": item.color,
                    "--track-dim": item.colorDim,
                    "--track-border": selected
                        ? item.colorBorder.replace("0.22", "0.35").replace("0.28", "0.35")
                        : "rgba(255,255,255,0.07)",
                    "--track-glow": selected
                        ? `0 0 8px 0 ${item.colorBorder}`
                        : "none",
                    "--img-opacity": selected ? 0.6 : 0.35,
                } as CSSProperties} onClick={() => setActive(key)}>
                  <img className={styles.trackBg} style={(CAREER_IMAGES.picker[key] as CareerImage).style} src={CAREER_IMAGES.picker[key].src} alt=""/>
                  <div className={styles.trackScrim} aria-hidden="true"/>
                  <div className={styles.trackBody}>
                    <span className={styles.trackEmoji} aria-hidden="true">
                      {item.icon}
                    </span>
                    <h3 className={styles.trackName}>{item.label}</h3>
                    <p className={styles.trackDesc}>{item.description}</p>
                    <div className={styles.trackMeta}>
                      <span style={{ color: item.color }}>
                        {trackProgramCount(key)} programs
                      </span>
                      {selected ? (<img src={CP_ASSETS.icons.chevron} width={14} height={14} alt=""/>) : null}
                    </div>
                  </div>
                </button>);
        })}
          </div>
        </div>
      </section>

      <section className={styles.detailSection} data-node-id="1250:2874" data-track={active}>
        <div className={styles.detailInner} style={{ "--track": track.color, "--track-dim": track.colorDim, "--track-border": track.colorBorder } as CSSProperties}>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }}>
              <div className={styles.trackHero} style={{
            "--track": track.color,
            "--track-dim": track.colorDim,
            "--track-border": track.colorBorder,
        } as CSSProperties}>
                <img className={styles.trackHeroBg} style={(CAREER_IMAGES.hero[active] as CareerImage).style} src={CAREER_IMAGES.hero[active].src} alt=""/>
                <div className={styles.trackHeroScrim} aria-hidden="true"/>
                <div className={styles.trackHeroCopy}>
                  <div className={styles.trackHeroTop}>
                    <span className={styles.tagline}>{detail.eyebrow}</span>
                    <span className={styles.available}>
                      {track.programs.length} programs available
                    </span>
                  </div>
                  <h2 className={styles.trackHeroTitle}>{track.label}</h2>
                  <p className={styles.trackHeroBody}>{detail.longDescription}</p>
                  <p className={styles.pullquote}>
                    <img className={styles.pullIcon} src={active === "innovators" ? invertedCommaCyan : active === "hustlers" ? invertedCommaPurple : invertedComma} alt="" />
                    <span>{detail.pullquote}</span>
                  </p>
                </div>
                <div className={styles.trackStats}>
                  {stats.map((stat) => (<div key={stat.label} className={styles.stat}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>))}
                </div>
              </div>

              <div className={styles.programGrid}>
                {track.programs.map((program, index) => (<article key={program.name} className={styles.programCard}>
                    <div className={styles.programMedia}>
                      <img src={CAREER_IMAGES.programs[active][index].src} alt="" className={styles.programImage} style={(CAREER_IMAGES.programs[active][index] as CareerImage).style}/>
                      <div className={styles.programOverlay} aria-hidden="true"/>
                      {program.tag ? (<span className={styles.programTag} style={{
                    color: track.color,
                    background: track.colorDim,
                    borderColor: track.colorBorder,
                }}>
                          {program.tag}
                        </span>) : null}
                      <span className={styles.programIcon} aria-hidden="true">
                        {program.icon}
                      </span>
                    </div>
                    <div className={styles.programFooter}>
                      <div>
                        <h3 className={styles.programName}>{program.name}</h3>
                        <div className={styles.programMeta}>
                          <span>
                            <img src={CP_ASSETS.icons.clock} width={12} height={12} alt=""/>
                            {program.duration}
                          </span>
                          <span>
                            <img src={CP_ASSETS.icons.level} width={12} height={12} alt=""/>
                            {program.level}
                          </span>
                        </div>
                      </div>
                      <button type="button" className={styles.programBtn} aria-label={`Explore ${program.name}`} style={{ borderColor: track.colorBorder, color: track.color }}>
                        <span aria-hidden="true" className={styles.programArrow} style={{ maskImage: `url(${CP_ASSETS.icons.arrow})` }}/>
                      </button>
                    </div>
                  </article>))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>);
}
