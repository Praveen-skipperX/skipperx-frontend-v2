import { useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import '../components/career/fonts.css';
import { Header } from '../components/layout/Header';
import { AnnouncementBanner } from '../components/layout/AnnouncementBanner';
import { Footer } from '../components/layout/Footer';
import { ContactForm } from '../components/contact/ContactForm';
import { SkillIndiaLogo } from '../components/accreditation/Logos';
import { TESTIMONIALS, TESTIMONIAL_COMPANIES } from '../data/testimonials';
import { FAQ_ITEMS } from '../data/faq';
import s from './WhySkipperXPage.module.css';

const asset = (name: string) => `/why-skipperx/${name}.png`;
const principles = [
  ['building', 'Learn by building', 'Every week ends with something shipped — a landing page, a prototype, a pitch, a paying client. Theory only shows up when you need it.'],
  ['practitioners', 'Taught by practitioners', 'Founders, engineers and freelancers who’ve done the work teach the work. You learn the shortcuts, the mistakes and the real numbers.'],
  ['feedback', 'Feedback, not grades', 'Live sessions and mentor reviews replace multiple-choice quizzes. Your work gets critiqued the way it would in the real world.'],
  ['community', 'A community that stays', 'Cohort-mates become co-founders, clients and collaborators. The network keeps working long after the last session.'],
];
const comparison = [
  ['Who teaches', 'Instructors who explain', 'Practitioners who’ve built something real'],
  ['What you ship', 'Quizzes and completion badges', 'Real projects that go into your portfolio'],
  ['The certificate', 'A PDF anyone can claim', 'NSDC and Skill India recognised, verifiable online with a unique DiceID'],
  ['When you’re stuck', 'A forum post and a long wait', 'Live sessions and mentor reviews'],
  ['After the course', 'It ends and you’re on your own', 'An active community and career support that continue after you finish'],
];
const tracks = [
  ['entrepreneurs', 'Entrepreneurs', 'You have an idea and want to turn it into revenue.', '#ff6b6b'],
  ['innovators', 'Innovators', 'You want to build with drones, AI and hardware - not just read about it.', '#00d4ff'],
  ['hustlers', 'Hustlers', 'You want skills that pay — freelancing, sales, content — fast.', '#a855f7'],
];
const faqs = [
  FAQ_ITEMS[0],
  { q: 'How is SkipperX different from other online courses?', a: 'You learn by building real projects, with live mentor reviews and feedback from practitioners. Your work becomes your portfolio, and your cohort remains a community after the program.' },
  { q: 'Who teaches the programs?', a: 'Founders, engineers and freelancers who have done the work teach the programs, sharing practical experience, feedback and real-world examples.' },
  FAQ_ITEMS[2],
  { q: 'What will I walk out with?', a: 'Real projects for your portfolio, practical skills, a recognised certificate and a community of mentors and fellow builders.' },
  FAQ_ITEMS[4], FAQ_ITEMS[5], FAQ_ITEMS[6],
];
function Label({ children }: { children: React.ReactNode }) { return <span className={s.label}>● {children}</span>; }
function Check() { return <span className={s.check} aria-hidden="true">✓</span>; }

export function WhySkipperXPage() {
  const [slide, setSlide] = useState(0);
  return <div className={`page ${s.page}`}>
    <AnnouncementBanner /><Header />
    <main>
      <section className={`${s.container} ${s.hero}`} id="why">
        <div className={s.heroCopy}><Label>Why SkipperX</Label>
          <h1>School taught you<br />to remember.<br /><em>We teach you to build.</em></h1>
          <p>SkipperX is a learn-by-doing school for entrepreneurs, innovators and hustlers.<br />No rote, no filler — just real projects, real mentors, and skills that compound.</p>
          <div className={s.actions}><a className={s.button} href="#contact">Request a Call Back <span>→</span></a><Link className={s.textLink} to="/career-paths">Explore Programs <span>→</span></Link></div>
        </div>
        <div className={s.heroPhotos}><img src={asset('hero-classroom')} alt="A live classroom session" /><img src={asset('hero-team')} alt="Students collaborating on a project" /><img src={asset('hero-library')} alt="Builders working together in a library" /></div>
      </section>
      <div className={s.manifesto}>Skip the lectures. <strong>Ship the <em>work.</em></strong> Learn<br className={s.desktopBreak} /> from people who already have.</div>
      <section className={`${s.container} ${s.comparison}`}><Label>Side by side</Label><h2>Typical online course vs SkipperX</h2>
        <div className={s.tableWrap}><table><thead><tr><th aria-label="Comparison criterion" /><th>Typical course</th><th>SkipperX</th></tr></thead><tbody>{comparison.map(([title, typical, skipper]) => <tr key={title}><th scope="row">{title}</th><td>{typical}</td><td><div><Check />{skipper}</div></td></tr>)}</tbody></table></div>
      </section>
      <section className={`${s.container} ${s.teaching}`}><div className={s.teachingIntro}><Label>How we teach</Label><h2>Four ideas behind<br />every program</h2><p>Whichever track you choose, these principles shape how each week is designed, taught and reviewed.</p><Link className={s.button} to="/career-paths">Find my Track <span>✧</span></Link></div>
        <div className={s.principles}>{principles.map(([image, title, description], i) => <article className={s.principle} key={title}><img loading="lazy" src={asset(`teach-${image}`)} alt={title} /><div><span className={s.number}>0{i + 1}</span><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      </section>
      <section className={`${s.container} ${s.cohort}`} id="community"><div className={s.sectionHead}><div><Label>Inside SkipperX</Label><h2>What a cohort feels like</h2></div><p>Live builds, honest critiques, late-night launches and demo days with people who get it.</p></div>
        <div className={s.gallery}>{[['cohort-demo-days', 'Demo days'], ['cohort-live-builds', 'Live build sessions'], ['cohort-mentor-reviews', 'Mentor reviews'], ['cohort-meetups', 'Cohort meetups']].map(([image, title]) => <figure key={image}><img loading="lazy" src={asset(image)} alt={title} /><figcaption>{title}</figcaption></figure>)}</div>
      </section>
      <section className={`${s.container} ${s.recognition}`}><Label>Recognition</Label><h2>Officially <em>Recognised.</em> Globally Credible.</h2><div className={s.credentials}>
        <article><Check /><h3>NSDC &amp; Skill India recognized</h3><p>Official recognition from the Government of India, meeting national standards for skill development.</p><div className={s.logos}><div><img src={asset('recognition-nsdc')} alt="National Skill Development Corporation" /></div><div><SkillIndiaLogo /></div></div></article>
        <article><Check /><h3>Built for the real world</h3><p>A credential that works beyond the classroom - recognised where it matters.</p><ul><li>Recognised by 500+ hiring partners across India.</li><li>DiceID lets any recruiter verify your skills online in seconds.</li></ul></article>
        <article><Check /><h3>Google &amp; Startup India certified</h3><p>Recognized by Google for Education and Startup India — credentials that carry weight beyond the classroom.</p><div className={s.logos}><div><img src={asset('recognition-startup-india')} alt="Startup India" /></div><div><img src={asset('recognition-google')} alt="Google for Education Partner" /></div></div></article>
      </div></section>
      <section className={`${s.container} ${s.voices}`}><div className={s.sectionHead}><div><Label>Student voices</Label><h2>Don’t take our word for it.</h2></div><p>These aren't success stories we picked. They're the kind of outcomes that happen when you stop studying for exams and start training for real life.</p></div>
        <div className={s.testimonials}>{Array.from({ length: 4 }, (_, i) => { const t = TESTIMONIALS[(slide + (i === 3 ? 1 : i)) % TESTIMONIALS.length]; return <article key={i} style={{ '--accent': t.trackColor } as CSSProperties}><span className={s.quote} aria-hidden="true">“</span><p>{t.quote}</p><span className={s.trackBadge}>{t.role} · {t.track}</span><div className={s.author}><span>{t.name[0]}</span><strong>{t.name}</strong></div></article>; })}</div>
        <div className={s.carouselControls}><button aria-label="Previous testimonials" onClick={() => setSlide((slide + 2) % 3)}>‹</button><button aria-label="Next testimonials" onClick={() => setSlide((slide + 1) % 3)}>›</button></div>
        <p className={s.companyLabel}>Our students are building and working at</p><div className={s.companies}>{TESTIMONIAL_COMPANIES.map(name => <span key={name}>{name}</span>)}</div>
      </section>
      <section className={`${s.container} ${s.tracks}`} id="programs"><Label>Is this for you?</Label><h2>Built for three kinds of people</h2><div className={s.trackGrid}>{tracks.map(([key, title, description, color]) => <article key={key} style={{ '--accent': color } as CSSProperties}><img loading="lazy" src={asset(`track-${key}`)} alt={`${title} track`} /><div><span className={s.trackLine} /><h3>{title}</h3><p>{description}</p><Link to={`/career-paths#${key}`}>See Programs <span>→</span></Link></div></article>)}</div></section>
      <section className={`${s.container} ${s.faq}`}><div className={s.sectionHead}><div><Label>Questions? Answered.</Label><h2>Before you <em>apply.</em></h2></div><p>We get it — committing to a program is a real decision. These are the questions every serious applicant asks. If yours isn't here, we're one message away.</p></div><div className={s.questions}>{faqs.map(item => <details key={item.q}><summary>{item.q}<span aria-hidden="true">⌄</span></summary><p>{item.a}</p></details>)}</div><a className={s.button} href="#contact">Still got questions ?</a></section>
      <section className={`${s.enroll} ${s.container}`} id="contact"><p className={s.enrollLabel}>07 — Enroll</p><h2>Your next chapter <em>starts here.</em></h2><p>Drop your details — our team will reach out with everything you need to begin.</p><div className={s.form}><ContactForm /></div></section>
    </main><Footer />
  </div>;
}

