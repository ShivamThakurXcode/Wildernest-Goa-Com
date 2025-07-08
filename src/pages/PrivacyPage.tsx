import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Section from "../components/ui/Section";

const sections = [
  {
    title: "1. Data Collection",
    points: [
      "We collect personal information such as name, email, and phone number during bookings or form submissions.",
      "We also gather anonymized data to improve user experience and website performance.",
    ],
  },
  {
    title: "2. Use of Information",
    points: [
      "Personal data is used solely for communication, bookings, and improving services.",
      "We do not sell or share your personal information with third parties without consent.",
    ],
  },
  {
    title: "3. Cookies & Tracking",
    points: [
      "We use cookies to store session data, preferences, and enhance user experience.",
      "You can manage or disable cookies through your browser settings.",
    ],
  },
  {
    title: "4. Data Security",
    points: [
      "We implement standard security practices to safeguard user data.",
      "Despite our best efforts, we cannot guarantee absolute security of online transmissions.",
    ],
  },
  {
    title: "5. Third-Party Services",
    points: [
      "Our site may include links to external services or tools, which are governed by their respective privacy policies.",
      "We are not responsible for third-party content, terms, or data practices.",
    ],
  },
  {
    title: "6. Children's Privacy",
    points: [
      "We do not knowingly collect information from children under 13.",
      "If we become aware, we will delete such information immediately.",
    ],
  },
  {
    title: "7. Policy Updates",
    points: [
      "Our privacy policy may be updated occasionally.",
      "Significant changes will be posted on this page with a revised effective date.",
    ],
  },
  {
    title: "8. Contact Us",
    points: [
      "For any privacy-related questions or data access requests, contact us at support@wilderestresort.com.",
    ],
  },
];

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Wilderest Nature Resort</title>
        <meta
          name="description"
          content="Review our privacy practices, data collection policies, and how we safeguard your personal information at Wilderest Nature Resort."
        />
      </Helmet>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('./cta-bg.svg')`,
        }}
        className="relative pt-40 pb-32 bg-cover bg-center"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl text-white font-handwriting mb-2">
              Your trust matters
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-100 text-lg max-w-3xl mx-auto">
              Learn how we collect, use, and protect your data at Wilderest
              Nature Resort
            </p>
          </motion.div>
        </div>
      </div>

      {/* Privacy Sections */}
      <Section className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            >
              <h2 className="text-xl font-semibold text-orange-700 mb-4">
                {section.title}
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.p
            className="text-sm text-gray-500 italic text-center pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Last Updated: July 2025
          </motion.p>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPage;
