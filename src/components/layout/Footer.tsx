import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">
                  W
                </span>
              </div>
              <h2 className="text-xl font-display font-bold text-white">
                Wilderest
              </h2>
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              Experience luxury eco-tourism at Wilderest Nature Resort in Goa,
              where modern comfort meets natural beauty.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/accommodation"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  to="/how-to-reach"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  How to Reach
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/book"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellation"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="text-primary-400 mt-1 mr-3 flex-shrink-0"
                />
                <span className="text-gray-400">
                  Bardez, North Goa,
                  <br />
                  Goa 403507, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="text-primary-400 mr-3 flex-shrink-0"
                />
                <a
                  href="tel:+918574963214"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  +91 857 496 3214
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="text-primary-400 mr-3 flex-shrink-0"
                />
                <a
                  href="mailto:info@wilderestresort.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  info@wilderestresort.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="text-center text-gray-500 text-sm">
          <p>© {currentYear} Wilderest Nature Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
