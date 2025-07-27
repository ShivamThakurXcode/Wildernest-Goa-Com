import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MdOutlinePrivacyTip } from "react-icons/md";
import Section from "../components/ui/Section";
import HeroBanner from "../layouts/hero-innerPage";

const CancellationPage = () => {
  return (
    <>
      <Helmet>
        <title>Cancellation Policy | Wildernest Goa</title>
        <meta
          name="description"
          content="Read the cancellation and refund policy for Wildernest Nature Resort. Learn about refund eligibility, early departure, no-show, and important notes for your booking."
        />
      </Helmet>
      <HeroBanner
        title="Cancellation Policy"
        subTitle="Travel Plans Change, We Understand"
        paragraph="Review our clear and fair cancellation terms before booking."
      />

      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
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
                At WILDERNEST Nature Resort, we understand that travel plans can
                sometimes change unexpectedly. To assist you better, we have
                outlined our cancellation policy clearly below:
              </p>
            </div>
          </motion.div>

          {/* Refund Policy Section */}
          <motion.div
            className="bg-white rounded-xl shadow-md border border-gray-200 p-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-orange-600 mb-3">
              Refund Policy
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Full Refund:</span> Cancellations
                made 20 days or more prior to the check-in date are eligible for
                a 100% refund of the booking amount.
              </li>
              <li>
                <span className="font-medium">No Refund:</span> Cancellations
                made within 19 days of the check-in date will incur full
                retention charges, and a refund will not be provided.
              </li>
            </ul>
          </motion.div>

          {/* Important Notes Section */}
          <motion.div
            className="bg-orange-50 rounded-xl border border-orange-200 shadow p-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-orange-600 mb-2">
              Important Notes
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Please note that the above terms may vary based on the source of
                your booking. We encourage all guests to verify the applicable
                cancellation policy stated in their booking confirmation
                voucher, especially if booked through a third-party platform or
                travel agent.
              </li>
              <li>
                In cases of cancellations or delays caused by flight
                disruptions, adverse weather, or natural calamities, the same
                cancellation policy will apply.
              </li>
              <li>
                The resort reserves the right to revise, suspend, or modify any
                package or tariff at its sole discretion and without prior
                notice.
              </li>
              <li>
                For added protection, we strongly recommend purchasing travel
                insurance, especially when traveling during unpredictable
                seasons.
              </li>
            </ul>
          </motion.div>

          {/* Early Departure / Shortened Stay Section */}
          <motion.div
            className="bg-white rounded-xl shadow-md border border-gray-200 p-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-orange-600 mb-3">
              Early Departure / Shortened Stay
            </h2>
            <p className="text-gray-700 mb-2">
              In the event of an early departure or if you choose to shorten
              your stay, charges will apply for the full reserved duration,
              regardless of the actual length of your stay.
            </p>
            <p className="text-gray-700">
              If your travel plans change, please inform us at the earliest
              opportunity so we can assist in minimizing any applicable charges
              whenever possible.
            </p>
          </motion.div>

          {/* No-Show Policy Section */}
          <motion.div
            className="bg-white rounded-xl shadow-md border border-gray-200 p-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-orange-600 mb-3">
              No-Show Policy
            </h2>
            <p className="text-gray-700 mb-2">
              In the event of a no-show or cancellation without prior notice or
              consent from the resort, full retention charges will be applied.
              These charges will be billed to the individual or company
              responsible for the reservation.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200 shadow p-7 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-orange-600 mb-2">
              Need Assistance?
            </h2>
            <p className="text-gray-700 mb-2">
              Should you require any clarification or assistance regarding our
              cancellation terms, please do not hesitate to contact our Customer
              Care Center. We’re here to help you with your travel needs and
              ensure a seamless experience with us.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default CancellationPage;
