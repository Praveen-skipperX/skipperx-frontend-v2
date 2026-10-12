import { useState } from "react";
import "../components/career/fonts.css";
import { CareerCta } from "../components/career/CareerCta";
import { CareerExplore } from "../components/career/CareerExplore";
import { CareerHero } from "../components/career/CareerHero";
import { CareerProcess } from "../components/career/CareerProcess";
import { CareerQuote } from "../components/career/CareerQuote";
import { CareerValue } from "../components/career/CareerValue";
import { CareerStacks } from "../components/career/CareerStacks";
import styles from "./CareerPathsPage.module.css";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { AnnouncementBanner } from "../components/layout/AnnouncementBanner";
import { CareerQuizModal } from "../components/programs/CareerQuizModal";
export function CareerPathsPage() {
    const [quizOpen, setQuizOpen] = useState(false);
    return (<div className={`page ${styles.page}`}>
      <AnnouncementBanner />
      <Header />
      <main>
        <CareerHero onQuiz={() => setQuizOpen(true)}/>
        <CareerProcess />
        <CareerQuote />
        <CareerExplore />
        <CareerStacks />
        <CareerValue />
        <CareerCta onQuiz={() => setQuizOpen(true)}/>
      </main>
      <Footer />
      <CareerQuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)}/>
    </div>);
}
