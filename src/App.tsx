import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toaster } from "./components/ui/Toaster";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ActivityPage from "./pages/ActivitiesPage";
import AboutPage from "./pages/AboutPage";
import HowToReachPage from "./pages/HowToReachPage";
import BookPage from "./pages/BookPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import AccommodationPage from "./pages/AccommodationPage";
import CancellationPage from "./pages/CancellationPage";
import NotFoundPage from "./pages/NotFoundPage";
import FamilyValley from "./pages/FamilyValley";
import ValleyView from "./pages/ValleyView";
import ForestView from "./pages/ForestView";
import PlungePool from "./pages/PlungePool";
import PlungePool_Ac from "./pages/PlungePool_Ac";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MainLayout toggleTheme={toggleTheme} theme={theme} />}
        >
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<GalleryPage />} />

          {"/* Accommodation Package Routes *?/}"}
          <Route path="FamilyValley" element={<FamilyValley />} />
          <Route path="ForestView" element={<ForestView />} />
          <Route path="ValleyView" element={<ValleyView />} />
          <Route path="PlungePool" element={<PlungePool />} />
          <Route path="PlungePool_Ac" element={<PlungePool_Ac />} />
          <Route path="accommodation" element={<AccommodationPage />} />

          <Route path="activities" element={<ActivityPage />} />
          <Route path="how-to-reach" element={<HowToReachPage />} />
          <Route path="book" element={<BookPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="cancellation" element={<CancellationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
