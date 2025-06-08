import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Leaf,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b rounded-t-3xl w-[99%] mx-auto  from-gray-800 to-cyan-950 pt-16 pb-8 border-t  border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand and Description */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Leaf className="text-white h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Wilderest Goa
              </h2>
            </Link>
            <p className=" text-gray-300 leading-relaxed">
              A sustainable luxury retreat nestled in Goa's pristine nature,
              where eco-conscious design meets unparalleled comfort.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                className="p-2 rounded-full  bg-gray-800 shadow-sm hover:shadow-md transition-all  hover:bg-gray-700  text-gray-300 hover:text-emerald-600"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                className="p-2 rounded-full  bg-gray-800 shadow-sm hover:shadow-md transition-all  hover:bg-gray-700  text-gray-300 hover:text-emerald-600"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                className="p-2 rounded-full  bg-gray-800 shadow-sm hover:shadow-md transition-all  hover:bg-gray-700  text-gray-300 hover:text-emerald-600"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6  text-gray-100 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Accommodation", path: "/accommodation" },
                { name: "Activities", path: "/activities" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className=" text-gray-400  hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6  text-gray-100 relative inline-block">
              Information
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Cancellation Policy", path: "/cancellation" },
                { name: "Sustainability", path: "/sustainability" },
                { name: "Careers", path: "/careers" },
                { name: "FAQs", path: "/faqs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className=" text-gray-400  hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6  text-gray-100 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="p-2 rounded-lg  bg-emerald-900/20 mr-4">
                  <MapPin className=" text-emerald-400 h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium  text-gray-200">Our Location</p>
                  <p className=" text-gray-400">
                    Bardez, North Goa,
                    <br />
                    Goa 403507, India
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-2 rounded-lg  bg-emerald-900/20 mr-4">
                  <Phone className=" text-emerald-400 h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium  text-gray-200">Call Us</p>
                  <a
                    href="tel:+918574963214"
                    className=" text-gray-400  hover:text-emerald-400 transition-colors"
                  >
                    +91 857 496 3214
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-2 rounded-lg  bg-emerald-900/20 mr-4">
                  <Mail className=" text-emerald-400 h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium  text-gray-200">Email Us</p>
                  <a
                    href="mailto:info@wilderestresort.com"
                    className=" text-gray-400  hover:text-emerald-400 transition-colors"
                  >
                    info@wilderestresort.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t  border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className=" text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Wilderest Goa. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link
              to="/sustainability"
              className="text-sm  text-emerald-400 hover:underline"
            >
              Sustainability Commitment
            </Link>
            <Link
              to="/blog"
              className="text-sm  text-emerald-400 hover:underline"
            >
              Our Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
