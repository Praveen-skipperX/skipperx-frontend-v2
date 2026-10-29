import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CareerPathsPage } from "./pages/CareerPathsPage";
import { WhySkipperXPage } from "./pages/WhySkipperXPage";
import { RouteScroll } from "./components/layout/RouteScroll";

export default function App() {
  return (
    <BrowserRouter>
      <RouteScroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career-paths" element={<CareerPathsPage />} />
        <Route path="/why-skipperx" element={<WhySkipperXPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
