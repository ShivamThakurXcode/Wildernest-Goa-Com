import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  toggleTheme: () => void;
  theme: "light" | "dark";
}

const Header = ({ toggleTheme, theme }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-7xl  ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg rounded-xl py-2 border border-white/20"
          : "bg-white/5 text-white dark:bg-gray-900/5 backdrop-blur-xl rounded-xl py-2 border border-white/20"
      }`}
    >
      <div className="w-full mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-300">
            Wilderest Goa
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex   items-center space-x-3">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-lg transition-colors   ${
                isActive
                  ? "text-primary-600 dark:text-primary-400 font-medium bg-primary-50/50 dark:bg-gray-800/50"
                  : "text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 hover:bg-gray-100/30 dark:hover:bg-gray-800/30"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/accommodation"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-lg transition-colors ${
                isActive
                  ? "text-primary-600 dark:text-primary-400 font-medium bg-primary-50/50 dark:bg-gray-800/50"
                  : "text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 hover:bg-gray-100/30 dark:hover:bg-gray-800/30"
              }`
            }
          >
            Accommodation
          </NavLink>
          <NavLink
            to="/accommodation"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-lg transition-colors ${
                isActive
                  ? "text-primary-600 dark:text-primary-400 font-medium bg-primary-50/50 dark:bg-gray-800/50"
                  : "text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 hover:bg-gray-100/30 dark:hover:bg-gray-800/30"
              }`
            }
          >
            Photo Gallery
          </NavLink>
          <NavLink
            to="/how-to-reach"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-lg transition-colors  ${
                isActive
                  ? "text-primary-600 dark:text-primary-400 font-medium bg-primary-50/50 dark:bg-gray-800/50"
                  : "text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 hover:bg-gray-100/30 dark:hover:bg-gray-800/30"
              }`
            }
          >
            How to Reach
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-lg transition-colors  ${
                isActive
                  ? "text-primary-600 dark:text-primary-400 font-medium bg-primary-50/50 dark:bg-gray-800/50"
                  : "text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 hover:bg-gray-100/30 dark:hover:bg-gray-800/30"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center gap-2 ml-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link
            to="/book"
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
          >
            Book Now
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-gray-800/50 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-40 pt-24"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-[80%] mx-auto flex flex-col items-center space-y-3 py-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `w-full text-center py-3 text-lg rounded-lg ${
                    isActive
                      ? "bg-primary-50 text-primary-600 dark:bg-gray-800 dark:text-primary-400 font-medium"
                      : "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `w-full text-center py-3 text-lg rounded-lg ${
                    isActive
                      ? "bg-primary-50 text-primary-600 dark:bg-gray-800 dark:text-primary-400 font-medium"
                      : "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/accommodation"
                className={({ isActive }) =>
                  `w-full text-center py-3 text-lg rounded-lg ${
                    isActive
                      ? "bg-primary-50 text-primary-600 dark:bg-gray-800 dark:text-primary-400 font-medium"
                      : "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accommodation
              </NavLink>
              <NavLink
                to="/how-to-reach"
                className={({ isActive }) =>
                  `w-full text-center py-3 text-lg rounded-lg ${
                    isActive
                      ? "bg-primary-50 text-primary-600 dark:bg-gray-800 dark:text-primary-400 font-medium"
                      : "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How to Reach
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `w-full text-center py-3 text-lg rounded-lg ${
                    isActive
                      ? "bg-primary-50 text-primary-600 dark:bg-gray-800 dark:text-primary-400 font-medium"
                      : "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
              <Link
                to="/book"
                className="w-full mt-4 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-center transition-colors shadow-sm hover:shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
