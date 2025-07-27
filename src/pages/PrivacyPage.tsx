import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MdOutlinePrivacyTip } from "react-icons/md";

import Section from "../components/ui/Section";
import HeroBanner from "../layouts/hero-innerPage";

const sections = [
  {
    title: "1. Information We Collect",
    points: [
      "Personal information (name, contact details, government-issued ID, etc.)",
      "Booking and payment details",
      "Preferences and feedback",
      "Usage data (IP address, browser type, device information)",
    ],
  },
  {
    title: "2. Use of Information",
    points: [
      "Process reservations and payments",
      "Communicate updates and special offers",
      "Improve our services based on guest feedback and patterns",
      "Ensure site security and technical functioning",
      "Comply with legal obligations",
    ],
  },
  {
    title: "3. Children’s Privacy",
    points: [
      "We do not knowingly collect information from children under 18 without parental consent.",
      "Our services are not directed at minors.",
      "If you believe a minor has provided us with information without proper consent, please contact us, and we will take appropriate action.",
    ],
  },
  {
    title: "4. Data Security",
    points: [
      "We employ technical and organizational measures to protect your information from unauthorized access or disclosure.",
      "These include encryption, firewalls, regular security assessments, staff training, and secure payment systems.",
      "Procedures are also in place for managing data breaches.",
      "While we prioritize your data's security, no method of transmission or storage is 100% secure.",
      "We encourage you to take precautions, such as using strong passwords and safeguarding your own devices.",
    ],
  },
  {
    title: "5. Sharing of Information",
    points: [
      "We do not sell your personal data.",
      "Information may be shared with trusted third parties (such as payment processors and service partners) only as required to fulfill your request or comply with legal requirements, with appropriate safeguards in place.",
    ],
  },
  {
    title: "6. Your Rights & Choices",
    points: [
      "You may review, update, or request deletion of your personal information by contacting us.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    points: [
      "We may update this privacy policy as needed.",
      "Significant changes will be communicated on our website.",
      "We encourage you to review this page periodically.",
    ],
  },
];

const contactDetails = {
  address: "[Resort Address]",
  email: "[Email]",
  phone: "[Phone Number]",
};

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Wildernest Goa</title>
        <meta
          name="description"
          content="Learn how Wildernest Goa collects, uses, and protects your personal information. Read our privacy policy for details on data collection, security, and your rights."
        />
      </Helmet>
      <HeroBanner
        title="Privacy Policy"
        subTitle="Your Data, Our Priority"
        paragraph="Learn how we protect your personal information"
      />

      {/* Privacy Sections */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4  space-y-10">
          {" "}
          <motion.p
            className="text-sm text-gray-500 italic text-center pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Last Updated: July 2025
          </motion.p>
          <motion.div
            className="bg-white rounded-xl shadow-md border divide-x-2 border-gray-200 p-7 mb-2 flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <MdOutlinePrivacyTip className="w-16 h-16 mr-4 text-orange-500" />
            <div className="flex-1 px-4">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                At Wildernest Goa, we value your privacy and are committed to
                protecting your personal information. This policy outlines how
                we collect, use, disclose, and safeguard your data when you
                visit our website or use our services, in accordance with the
                applicable laws of India.
              </p>
            </div>
          </motion.div>
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-7"
            >
              <h2 className="text-lg md:text-xl font-semibold text-orange-600 mb-3">
                {section.title}
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
          {/* Contact Section */}
          <motion.div
            className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200 shadow p-7 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-orange-600 mb-2">
              8. Contact Us
            </h2>
            <p className="text-gray-700 mb-2">
              If you have questions about this policy or your data, please
              contact us:
            </p>
            <ul className="text-gray-700 text-base space-y-1">
              <li>
                <span className="font-medium">Address:</span>{" "}
                {contactDetails.address}
              </li>
              <li>
                <span className="font-medium">Email:</span>{" "}
                {contactDetails.email}
              </li>
              <li>
                <span className="font-medium">Phone:</span>{" "}
                {contactDetails.phone}
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPage;
