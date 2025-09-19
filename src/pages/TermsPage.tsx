import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MdOutlinePrivacyTip } from "react-icons/md";
import Section from "../components/ui/Section";
import HeroBanner from "../layouts/hero-innerPage";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Booking & Resort Terms | Wildernest Goa</title>
        <meta
          name="description"
          content="Read the booking, check-in, resort, and general terms for Wildernest Nature Resort. Review our policies for a smooth and enjoyable stay."
        />
      </Helmet>
      <HeroBanner
        title="Booking & Reservation Terms"
        subTitle="Please Review Before Your Stay"
        paragraph="Our policies help ensure a harmonious and safe experience for all guests."
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
                To ensure a smooth and enjoyable experience, please review our
                policies prior to arrival. These terms help preserve harmony and
                safety. Thank you for your cooperation.
              </p>
            </div>
          </motion.div>

          {/* Booking Confirmation & Age Requirement */}
          <motion.div
            className="bg-white rounded-xl shadow-md border border-gray-200 p-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-orange-600 mb-3">
              Booking Confirmation
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                A reservation is only confirmed upon receipt of a 100% advance
                payment. Confirmation will be sent via email once payment is
                received.
              </li>
            </ul>
            <h2 className="text-lg md:text-xl font-semibold text-orange-600 mt-6 mb-3">
              Age Requirement
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Guests must be 18 years or older to make a reservation. Guests
                under 18 must be accompanied by an adult.
              </li>
            </ul>
          </motion.div>

          {/* Check-in & Check-out */}
          <motion.div
            className="bg-white rounded-xl shadow-md border border-gray-200 p-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-orange-600 mb-3">
              Check-in & Check-out
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Check-in Time:</span> Check-in
                time is from 1:30 PM. Early check-in is subject to availability
                and may incur additional charges.
              </li>
              <li>
                <span className="font-medium">Check-out Time:</span> Check-out
                time is 11:30 AM. Late check-out may be arranged, subject to
                availability, and may incur additional charges.
              </li>
              <li>
                <span className="font-medium">Identification:</span> Guests are
                required to present a valid government-issued identification
                (such as a passport or driver's license) at check-in.
              </li>
            </ul>
          </motion.div>

          {/* Resort Policies */}
          <motion.div
            className="bg-white rounded-xl shadow-md border border-gray-200 p-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-orange-600 mb-3">
              Resort Policies
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Noise Policy:</span> To maintain
                the peaceful environment of our resort, we enforce a quiet
                policy from 10:00 PM to 7:00 AM.
              </li>
              <li>
                <span className="font-medium">Smoking Policy:</span> Smoking is
                prohibited inside all accommodation units and enclosed areas of
                the resort. Designated smoking areas are available.
              </li>
              <li>
                <span className="font-medium">Property Damage:</span> Guests
                will be held responsible for any damage to the property or its
                contents during their stay and will be charged accordingly.
              </li>
            </ul>
          </motion.div>

          {/* Health & Safety */}
          <motion.div
            className="bg-white rounded-xl shadow-md border border-gray-200 p-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-orange-600 mb-3">
              Health & Safety
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Medical Emergencies:</span> The
                resort maintains first aid facilities and has arrangements with
                nearby medical facilities for emergencies. We recommend guests
                have appropriate travel & medical insurance.
              </li>
              <li>
                <span className="font-medium">Natural Hazards:</span> As a
                nature resort, guests should be aware of and take precautions
                against natural elements, including insects, wildlife, and
                adverse weather conditions. The resort provides necessary
                information and amenities to mitigate these risks.
              </li>
              <li>
                <span className="font-medium">Swimming & Activities:</span> Use
                of the swimming pool and participation in resort activities are
                at the guest's own risk. Children must be supervised at all
                times.
              </li>
            </ul>
          </motion.div>

          {/* General Terms */}
          <motion.div
            className="bg-white rounded-xl shadow-md border border-gray-200 p-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-orange-600 mb-3">
              General Terms
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Liability:</span> Wildernest
                Nature Resort is not liable for any loss, damage, or theft of
                personal belongings. The use of safes provided in rooms is
                recommended.
              </li>
              <li>
                <span className="font-medium">Right of Admission:</span> The
                resort reserves the right to refuse service or accommodation to
                any guest who violates the resort's policies or engages in
                disruptive behavior.
              </li>
              <li>
                <span className="font-medium">Photography:</span> The resort may
                take photographs of its premises, which may include guests, for
                promotional purposes. Please notify the management if you do not
                wish to be included.
              </li>
              <li>
                <span className="font-medium">Amendments:</span> These terms and
                conditions may be amended by the resort at any time. The current
                version will always be available on our website.
              </li>
              <li>
                <span className="font-medium">Stags & Group:</span> Stag’s Group
                Not Allowed.
              </li>
              <li>
                <span className="font-medium">Amenities:</span> Please note that
                our accommodations do not feature air conditioning, television,
                or room service. This allows for an authentic nature experience
                and helps preserve the tranquil atmosphere of the resort.
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              By proceeding with a reservation at Wildernest Nature Resort,
              guests acknowledge and agree to abide by the terms outlined above.
              We appreciate your understanding and support in helping us create
              a peaceful and respectful atmosphere for all our visitors.
            </p>
          </motion.div>

          {/* Contact/Assistance Section */}
          <motion.div
            className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200 shadow p-7 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-orange-600 mb-2">
              Need Assistance?
            </h2>
            <p className="text-gray-700 mb-2">
              Should you have any questions or require assistance, our team is
              always here to help. We look forward to welcoming you to a
              memorable stay in the heart of nature.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default TermsPage;
