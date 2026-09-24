import { AnnouncementBanner } from "../components/layout/AnnouncementBanner";
import { Header } from "../components/layout/Header";

export function CareerPathsPage() {
  return (
    <div>
      <AnnouncementBanner />
      <Header />
      <main style={{ paddingTop: "36px" }}>
        <div style={{ minHeight: "50vh" }} />
      </main>
    </div>
  );
}
