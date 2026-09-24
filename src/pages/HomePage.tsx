import { AnnouncementBanner } from "../components/layout/AnnouncementBanner";
import { Header } from "../components/layout/Header";

import { Accreditation } from "../components/sections/Accreditation";
import { Features } from "../components/sections/Features";
import { Hero } from "../components/sections/Hero";
import { Programs } from "../components/sections/Programs";
import { ScrollingTicker } from "../components/sections/ScrollingTicker";
import { Stats } from "../components/sections/Stats";

import { Footer } from "../components/layout/Footer";
import { ApplyNow } from "../components/sections/ApplyNow";
import { Community } from "../components/sections/Community";
import { Contact } from "../components/sections/Contact";
import { NSDCCertification } from "../components/sections/NSDCCertification";
import { SuperStack } from "../components/sections/SuperStack";
import { Testimonials } from "../components/sections/Testimonials";

export function HomePage() {
  return (
    <div className="page">
      <AnnouncementBanner />
      <Header />

      <main style={{ paddingTop: "36px" }}>
        <Hero />
        <Accreditation />
        <Stats />
        <Features />
        <ScrollingTicker />
        <Programs />
        <NSDCCertification />
        <SuperStack />
        <Testimonials />
        <Contact />
        <ApplyNow />
        <Community />
        {/* <FAQ /> */}
      </main>
      <Footer />
    </div>
  );
}