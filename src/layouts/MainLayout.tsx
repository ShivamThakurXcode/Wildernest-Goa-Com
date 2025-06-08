import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

interface MainLayoutProps {
  toggleTheme: () => void;
  theme: "light" | "dark";
}

const MainLayout = ({ toggleTheme, theme }: MainLayoutProps) => {
  return (
    <div className="flex bg-transparent flex-col min-h-screen">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <motion.main
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default MainLayout;
