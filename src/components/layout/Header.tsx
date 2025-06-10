import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  Bed,
  MapPin,
  Image,
  Phone,
  Contact,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAccommodationOpen, setIsAccommodationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "100%", opacity: 0 },
  };

  const overlayVariants = {
    open: { opacity: 0.5 },
    closed: { opacity: 0 },
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] sm:w-[90%] max-w-7xl ${
          isScrolled
            ? "bg-white backdrop-blur-lg shadow-xl rounded-2xl py-2 border border-gray-200"
            : "bg-primary-900/25 backdrop-blur-lg rounded-2xl py-2 border border-gray-200/20"
        }`}
      >
        <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-base sm:text-lg">
                W
              </span>
            </div>
            <h1
              className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent ${
                isScrolled ? "" : "text-white"
              }`}
            >
              Wilderest Goa
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "text-primary-500 font-medium bg-primary-50/10"
                    : `${
                        isScrolled
                          ? "text-gray-700 hover:text-primary-500"
                          : "text-white hover:text-primary-300"
                      }`
                }`
              }
            >
              About
            </NavLink>

            {/* Accommodation Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAccommodationOpen(!isAccommodationOpen)}
                className={`px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-1 ${
                  location.pathname.startsWith("/accommodation")
                    ? "text-primary-600 font-medium bg-primary-50/50"
                    : `${
                        isScrolled
                          ? "text-gray-700 hover:text-primary-500"
                          : "text-white hover:text-primary-300"
                      }`
                }`}
              >
                Accommodation
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    isAccommodationOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isAccommodationOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200"
                >
                  <Link
                    to="/accommodation/room1"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsAccommodationOpen(false)}
                  >
                    Room 1
                  </Link>
                  <Link
                    to="/accommodation/room2"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsAccommodationOpen(false)}
                  >
                    Room 2
                  </Link>
                  <Link
                    to="/accommodation/room3"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsAccommodationOpen(false)}
                  >
                    Room 3
                  </Link>
                </motion.div>
              )}
            </div>

            <NavLink
              to="/activities"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "text-primary-500 font-medium bg-primary-50/10"
                    : `${
                        isScrolled
                          ? "text-gray-700 hover:text-primary-500"
                          : "text-white hover:text-primary-300"
                      }`
                }`
              }
            >
              Activities
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "text-primary-500 font-medium bg-primary-50/10"
                    : `${
                        isScrolled
                          ? "text-gray-700 hover:text-primary-500"
                          : "text-white hover:text-primary-300"
                      }`
                }`
              }
            >
              Photo Gallery
            </NavLink>
            <NavLink
              to="/how-to-reach"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "text-primary-500 font-medium bg-primary-50/10"
                    : `${
                        isScrolled
                          ? "text-gray-700 hover:text-primary-500"
                          : "text-white hover:text-primary-300"
                      }`
                }`
              }
            >
              How to Reach
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "text-primary-500 font-medium bg-primary-50/10"
                    : `${
                        isScrolled
                          ? "text-gray-700 hover:text-primary-500"
                          : "text-white hover:text-primary-300"
                      }`
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/book"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow-md ${
                isScrolled
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
              aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="absolute h-screen w-screen top-0 left-0 inset-0 bg-black z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              transition={{ duration: 0.3 }}
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="absolute top-0 right-0 h-screen w-80 bg-white z-50 shadow-2xl rounded-l-3xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                <nav className="flex divide-y divide-gray-200 flex-col space-y-2 flex-grow">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `py-3 px-4 text-lg rounded-lg flex items-center gap-3 ${
                        isActive
                          ? "bg-primary-50 text-primary-600 font-medium"
                          : "text-gray-800 hover:bg-gray-100"
                      }`
                    }
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Home size={20} />
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `py-3 px-4 text-lg rounded-lg flex items-center gap-3 ${
                        isActive
                          ? "bg-primary-50 text-primary-600 font-medium"
                          : "text-gray-800 hover:bg-gray-100"
                      }`
                    }
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Info size={20} />
                    About
                  </NavLink>

                  {/* Mobile Accommodation Dropdown */}
                  <div>
                    <button
                      onClick={() =>
                        setIsAccommodationOpen(!isAccommodationOpen)
                      }
                      className={`w-full py-3 px-4 text-lg rounded-lg flex items-center justify-between ${
                        location.pathname.startsWith("/accommodation")
                          ? "bg-primary-50 text-primary-600 font-medium"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Bed size={20} />
                        Accommodation
                      </div>
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          isAccommodationOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isAccommodationOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-8 mt-2"
                        >
                          <Link
                            to="/accommodation/room1"
                            className="block py-2 px-4 text-base text-gray-700 hover:bg-gray-100 rounded-lg"
                            onClick={() => {
                              setIsAccommodationOpen(false);
                              setIsSidebarOpen(false);
                            }}
                          >
                            Room 1
                          </Link>
                          <Link
                            to="/accommodation/room2"
                            className="block py-2 px-4 text-base text-gray-700 hover:bg-gray-100 rounded-lg"
                            onClick={() => {
                              setIsAccommodationOpen(false);
                              setIsSidebarOpen(false);
                            }}
                          >
                            Room 2
                          </Link>
                          <Link
                            to="/accommodation/room3"
                            className="block py-2 px-4 text-base text-gray-700 hover:bg-gray-100 rounded-lg"
                            onClick={() => {
                              setIsAccommodationOpen(false);
                              setIsSidebarOpen(false);
                            }}
                          >
                            Room 3
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <NavLink
                    to="/activities"
                    className={({ isActive }) =>
                      `py-3 px-4 text-lg rounded-lg flex items-center gap-3 ${
                        isActive
                          ? "bg-primary-50 text-primary-600 font-medium"
                          : "text-gray-800 hover:bg-gray-100"
                      }`
                    }
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Calendar size={20} />
                    Activities
                  </NavLink>
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      `py-3 px-4 text-lg rounded-lg flex items-center gap-3 ${
                        isActive
                          ? "bg-primary-50 text-primary-600 font-medium"
                          : "text-gray-800 hover:bg-gray-100"
                      }`
                    }
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Image size={20} />
                    Photo Gallery
                  </NavLink>
                  <NavLink
                    to="/how-to-reach"
                    className={({ isActive }) =>
                      `py-3 px-4 text-lg rounded-lg flex items-center gap-3 ${
                        isActive
                          ? "bg-primary-50 text-primary-600 font-medium"
                          : "text-gray-800 hover:bg-gray-100"
                      }`
                    }
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <MapPin size={20} />
                    How to Reach
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `py-3 px-4 text-lg rounded-lg flex items-center gap-3 ${
                        isActive
                          ? "bg-primary-50 text-primary-600 font-medium"
                          : "text-gray-800 hover:bg-gray-100"
                      }`
                    }
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Contact size={20} />
                    Contact
                  </NavLink>
                </nav>

                <div className="mt-4 space-y-3">
                  <Link
                    to="/book"
                    className="block py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center font-semibold text-lg transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-3"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Calendar size={20} />
                    Book Now
                  </Link>
                  <a
                    href="tel:+919876543210"
                    className="block py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg text-center font-semibold text-lg transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-3"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Phone size={20} />
                    Call Us
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
