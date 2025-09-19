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
  Mail,
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
      {/* Top Contact Ribbon */}
      <header
        className={`fixed top-0 pt-0 mx-auto z-50 transition-all duration-300 w-screen font-sans ${
          isScrolled
            ? "bg-white backdrop-blur-lg shadow-xl py-2 border-gray-200"
            : "bg-primary-900/25 backdrop-blur-md py-2 border-gray-200/5"
        }`}
      >
        <div
          className={`w-full mb-2 mt-0 z-50 top-0 left-0 border-b transition-all duration-300 border-yellow-500/30 text-white text-sm py-1 px-4 sm:px-6 flex justify-end items-center ${
            isScrolled
              ? "bg-gradient-to-l from-green-950 to-[#3e3500] backdrop-blur-lg py-2 shadow-xl"
              : "bg-primary-900/25 backdrop-blur-md py-2"
          }`}
        >
          <div className="flex flex-row items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide w-full justify-end">
            <a
              href="tel:+919480022108"
              className="flex items-center min-w-0 hover:text-primary-200 flex-shrink-0"
            >
              <div className="bg-orange-500 mr-2 rounded-full w-6 h-6 flex items-center justify-center p-1 flex-shrink-0">
                <Phone size={14} className="text-white" />
              </div>
              <span className="text-sm sm:text-base truncate">
                +91 94800 22108
              </span>
            </a>
            <a
              href="mailto:info@Wildernestgoa.com"
              className="flex items-center min-w-0 hover:text-primary-200 flex-shrink-0"
            >
              <div className="bg-orange-500 mr-2 rounded-full w-6 h-6 flex items-center justify-center p-1 flex-shrink-0">
                <Mail size={14} className="text-white" />
              </div>
              <span className="text-sm sm:text-base truncate">
                info@Wildernestgoa.com
              </span>
            </a>
          </div>
        </div>

        <div className="w-full mx-auto flex items-center justify-between px-10 sm:px-8">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-base sm:text-lg">
                W
              </span>
            </div>
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent ${
                isScrolled ? "" : "text-white"
              }`}
            >
              Wildernest
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex  items-center font-semibold  uppercase space-x-3">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-base transition-colors ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : `${
                        isScrolled
                          ? "text-gray-700 hover:text-orange-500"
                          : "text-white hover:text-orange-500"
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
                className={`px-4 py-2 rounded-lg text-base transition-colors uppercase flex items-center gap-1 ${
                  location.pathname.startsWith("/accommodation")
                    ? "text-orange-600 font-semibold"
                    : `${
                        isScrolled
                          ? "text-gray-700 hover:text-orange-500"
                          : "text-white hover:text-orange-500"
                      }`
                }`}
              >
                Accommodation
                <ChevronDown
                  size={16}
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
                  className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200"
                >
                  <Link
                    to="/ForestView"
                    className="block px-4 py-3 text-base text-gray-700 hover:bg-amber-50"
                    onClick={() => setIsAccommodationOpen(false)}
                  >
                    Forest View Cottage
                  </Link>
                  <Link
                    to="/ValleyView"
                    className="block px-4 py-3 text-base text-gray-700 hover:bg-amber-50"
                    onClick={() => setIsAccommodationOpen(false)}
                  >
                    Valley View Cottage
                  </Link>
                  <Link
                    to="/FamilyValley"
                    className="block px-4 py-3 text-base text-gray-700 hover:bg-amber-50"
                    onClick={() => setIsAccommodationOpen(false)}
                  >
                    Family Valley View
                  </Link>
                  <Link
                    to="/PlungePool"
                    className="block px-4 py-3 text-base text-gray-700 hover:bg-amber-50"
                    onClick={() => setIsAccommodationOpen(false)}
                  >
                    Private Plunge Pool
                  </Link>
                  <Link
                    to="/PlungePool_Ac"
                    className="block px-4 py-3 text-base text-gray-700 hover:bg-amber-50"
                    onClick={() => setIsAccommodationOpen(false)}
                  >
                    Private Plunge Pool (AC)
                  </Link>
                </motion.div>
              )}
            </div>

            <NavLink
              to="/activities"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-base transition-colors ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : `${
                        isScrolled
                          ? "text-gray-700 hover:text-orange-500"
                          : "text-white hover:text-orange-500"
                      }`
                }`
              }
            >
              Activities
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-base transition-colors ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : `${
                        isScrolled
                          ? "text-gray-700 hover:text-orange-500"
                          : "text-white hover:text-orange-500"
                      }`
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/how-to-reach"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-base transition-colors ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : `${
                        isScrolled
                          ? "text-gray-700 hover:text-orange-500"
                          : "text-white hover:text-orange-500"
                      }`
                }`
              }
            >
              Location
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-base transition-colors ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : `${
                        isScrolled
                          ? "text-gray-700 hover:text-orange-500"
                          : "text-white hover:text-orange-500"
                      }`
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/book"
              className={`px-5 py-2.5 rounded-lg text-base font-semibold transition-all shadow-sm hover:shadow-md bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white`}
            >
              PLAN YOUR TRIP
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
              className="fixed h-screen w-screen top-0 left-0 inset-0 bg-black z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              transition={{ duration: 0.3 }}
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-screen w-80 bg-white z-50 shadow-2xl rounded-l-3xl"
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
                          ? "bg-amber-50 text-orange-600 font-semibold"
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
                          ? "bg-amber-50 text-orange-600 font-semibold"
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
                          ? "bg-amber-50 text-orange-600 font-semibold"
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
                            to="/accommodation"
                            className="block py-2 px-4 text-base text-gray-700 hover:bg-amber-50 rounded-lg"
                            onClick={() => {
                              setIsAccommodationOpen(false);
                              setIsSidebarOpen(false);
                            }}
                          >
                            Forest View Cottage
                          </Link>
                          <Link
                            to="/accommodation"
                            className="block py-2 px-4 text-base text-gray-700 hover:bg-amber-50 rounded-lg"
                            onClick={() => {
                              setIsAccommodationOpen(false);
                              setIsSidebarOpen(false);
                            }}
                          >
                            Valley View Cottage
                          </Link>
                          <Link
                            to="/accommodation"
                            className="block py-2 px-4 text-base text-gray-700 hover:bg-amber-50 rounded-lg"
                            onClick={() => {
                              setIsAccommodationOpen(false);
                              setIsSidebarOpen(false);
                            }}
                          >
                            Family Valley View
                          </Link>
                          <Link
                            to="/accommodation"
                            className="block py-2 px-4 text-base text-gray-700 hover:bg-amber-50 rounded-lg"
                            onClick={() => {
                              setIsAccommodationOpen(false);
                              setIsSidebarOpen(false);
                            }}
                          >
                            Private Plunge Pool
                          </Link>
                          <Link
                            to="/accommodation"
                            className="block py-2 px-4 text-base text-gray-700 hover:bg-amber-50 rounded-lg"
                            onClick={() => {
                              setIsAccommodationOpen(false);
                              setIsSidebarOpen(false);
                            }}
                          >
                            Private Plunge Pool (AC)
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
                          ? "bg-amber-50 text-orange-600 font-semibold"
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
                          ? "bg-amber-50 text-orange-600 font-semibold"
                          : "text-gray-800 hover:bg-gray-100"
                      }`
                    }
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Image size={20} />
                    Gallery
                  </NavLink>
                  <NavLink
                    to="/how-to-reach"
                    className={({ isActive }) =>
                      `py-3 px-4 text-lg rounded-lg flex items-center gap-3 ${
                        isActive
                          ? "bg-amber-50 text-orange-600 font-semibold"
                          : "text-gray-800 hover:bg-gray-100"
                      }`
                    }
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <MapPin size={20} />
                    Location
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `py-3 px-4 text-lg rounded-lg flex items-center gap-3 ${
                        isActive
                          ? "bg-amber-50 text-orange-600 font-semibold"
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
                    className="block py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-lg text-center font-semibold text-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-3"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Calendar size={20} />
                    Book Now
                  </Link>
                  <a
                    href="tel:+919480022108"
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
