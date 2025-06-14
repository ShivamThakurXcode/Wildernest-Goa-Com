import { Helmet } from "react-helmet";
import Section from "../components/ui/Section";
import { motion } from "framer-motion";

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Cancellation Policy | Wilderest Nature Resort</title>
        <meta
          name="description"
          content="Learn about the cancellation policies for bookings at Wilderest Nature Resort in Goa, including refund and penalty details."
        />
      </Helmet>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('./cta-bg.svg')`,
        }}
        className="relative pt-40 pb-32 bg-cover bg-center bg-[url('./cta-bg.svg')] "
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl text-white font-handwriting mb-2">
              Understand our cancellation terms
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold text-white relative mb-6">
              Cancellation Policy
            </h1>
            <p className="text-gray-100 text-lg max-w-3xl mx-auto">
              Familiarize yourself with the cancellation policies for your stay
              at Wilderest Nature Resort
            </p>
          </motion.div>
        </div>
      </div>
      <Section className="bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="prose prose-orange dark:prose-invert prose-lg">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-orange-800 border-b-2 border-orange-200 pb-2">
                Booking & Reservation Terms
              </h2>

              <h3 className="text-orange-700">1. Booking Confirmation</h3>
              <p className="text-orange-900">
                A reservation is only confirmed upon receipt of a 50% advance
                payment. Confirmation will be sent via email once payment is
                received. The remaining balance is due at check-in.
              </p>

              <h3 className="text-orange-700">2. Age Requirement</h3>
              <p className="text-orange-900">
                Guests must be 18 years or older to make a reservation. Guests
                under 18 must be accompanied by an adult.
              </p>

              <h3 className="text-orange-700">3. Room Allocation</h3>
              <p className="text-orange-900">
                While we make every effort to honor specific room requests, room
                allocation is subject to availability and at the discretion of
                management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <h2 className="text-orange-800 border-b-2 border-orange-200 pb-2">
                Check-in & Check-out
              </h2>

              <h3 className="text-orange-700">1. Check-in Time</h3>
              <p className="text-orange-900">
                Check-in time is from 2:00 PM to 10:00 PM. Early check-in is
                subject to availability and may incur additional charges.
              </p>

              <h3 className="text-orange-700">2. Check-out Time</h3>
              <p className="text-orange-900">
                Check-out time is 11:00 AM. Late check-out may be arranged based
                on availability and may incur additional charges.
              </p>

              <h3 className="text-orange-700">3. Identification</h3>
              <p className="text-orange-900">
                Guests are required to present valid government-issued ID
                (passport, driver's license, etc.) at check-in.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <h2 className="text-orange-800 border-b-2 border-orange-200 pb-2">
                Resort Policies
              </h2>

              <h3 className="text-orange-700">1. Noise Policy</h3>
              <p className="text-orange-900">
                To maintain the peaceful environment of our resort, we enforce a
                quiet policy from 10:00 PM to 7:00 AM.
              </p>

              <h3 className="text-orange-700">2. Smoking Policy</h3>
              <p className="text-orange-900">
                Smoking is prohibited inside all accommodation units and
                enclosed areas of the resort. Designated smoking areas are
                available.
              </p>

              <h3 className="text-orange-700">3. Pet Policy</h3>
              <p className="text-orange-900">
                Pets are welcome in select accommodations with prior
                arrangement. A pet fee applies, and pet owners are responsible
                for any damage caused by their pets.
              </p>

              <h3 className="text-orange-700">4. Property Damage</h3>
              <p className="text-orange-900">
                Guests will be held responsible for any damage to the property
                or its contents during their stay and will be charged
                accordingly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <h2 className="text-orange-800 border-b-2 border-orange-200 pb-2">
                Health & Safety
              </h2>

              <h3 className="text-orange-700">1. Medical Emergencies</h3>
              <p className="text-orange-900">
                The resort maintains first aid facilities and has arrangements
                with nearby medical facilities for emergencies. We recommend
                guests have appropriate travel insurance.
              </p>

              <h3 className="text-orange-700">2. Natural Hazards</h3>
              <p className="text-orange-900">
                As a nature resort, guests should be aware of and take
                precautions against natural elements such as insects, wildlife,
                and weather conditions. The resort provides necessary
                information and amenities to mitigate these risks.
              </p>

              <h3 className="text-orange-700">3. Swimming & Activities</h3>
              <p className="text-orange-900">
                Use of the swimming pool and participation in resort activities
                is at the guest's own risk. Children must be supervised at all
                times.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-orange-800 border-b-2 border-orange-200 pb-2">
                General Terms
              </h2>

              <h3 className="text-orange-700">1. Liability</h3>
              <p className="text-orange-900">
                Wilderest Nature Resort is not liable for any loss, damage, or
                theft of personal belongings. The use of safes provided in rooms
                is recommended.
              </p>

              <h3 className="text-orange-700">2. Right of Admission</h3>
              <p className="text-orange-900">
                The resort reserves the right to refuse service or accommodation
                to any guest who violates the resort's policies or engages in
                disruptive behavior.
              </p>

              <h3 className="text-orange-700">3. Photography</h3>
              <p className="text-orange-900">
                The resort may take photographs of its premises, which may
                include guests, for promotional purposes. Please notify the
                management if you do not wish to be included.
              </p>

              <h3 className="text-orange-700">4. Amendments</h3>
              <p className="text-orange-900">
                These terms and conditions may be amended by the resort at any
                time. The current version will always be available on our
                website.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm italic mt-12 text-orange-600"
            >
              Last Updated: September 2023
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPage;
