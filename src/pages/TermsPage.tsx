import { Helmet } from 'react-helmet';
import Section from '../components/ui/Section';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Wilderest Nature Resort</title>
        <meta 
          name="description" 
          content="Read the terms and conditions for stays at Wilderest Nature Resort in Goa, including booking, cancellation, and property policies."
        />
      </Helmet>

      {/* Header */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-2">Terms & Conditions</h1>
          <p className="text-gray-200 text-lg">
            Please review our terms and policies before booking
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto prose dark:prose-invert prose-lg">
          <h2>Booking & Reservation Terms</h2>
          
          <h3>1. Booking Confirmation</h3>
          <p>
            A reservation is only confirmed upon receipt of a 50% advance payment. Confirmation will be sent via email once payment is received. The remaining balance is due at check-in.
          </p>
          
          <h3>2. Age Requirement</h3>
          <p>
            Guests must be 18 years or older to make a reservation. Guests under 18 must be accompanied by an adult.
          </p>
          
          <h3>3. Room Allocation</h3>
          <p>
            While we make every effort to honor specific room requests, room allocation is subject to availability and at the discretion of management.
          </p>
          
          <h2>Check-in & Check-out</h2>
          
          <h3>1. Check-in Time</h3>
          <p>
            Check-in time is from 2:00 PM to 10:00 PM. Early check-in is subject to availability and may incur additional charges.
          </p>
          
          <h3>2. Check-out Time</h3>
          <p>
            Check-out time is 11:00 AM. Late check-out may be arranged based on availability and may incur additional charges.
          </p>
          
          <h3>3. Identification</h3>
          <p>
            Guests are required to present valid government-issued ID (passport, driver's license, etc.) at check-in.
          </p>
          
          <h2>Resort Policies</h2>
          
          <h3>1. Noise Policy</h3>
          <p>
            To maintain the peaceful environment of our resort, we enforce a quiet policy from 10:00 PM to 7:00 AM.
          </p>
          
          <h3>2. Smoking Policy</h3>
          <p>
            Smoking is prohibited inside all accommodation units and enclosed areas of the resort. Designated smoking areas are available.
          </p>
          
          <h3>3. Pet Policy</h3>
          <p>
            Pets are welcome in select accommodations with prior arrangement. A pet fee applies, and pet owners are responsible for any damage caused by their pets.
          </p>
          
          <h3>4. Property Damage</h3>
          <p>
            Guests will be held responsible for any damage to the property or its contents during their stay and will be charged accordingly.
          </p>
          
          <h2>Health & Safety</h2>
          
          <h3>1. Medical Emergencies</h3>
          <p>
            The resort maintains first aid facilities and has arrangements with nearby medical facilities for emergencies. We recommend guests have appropriate travel insurance.
          </p>
          
          <h3>2. Natural Hazards</h3>
          <p>
            As a nature resort, guests should be aware of and take precautions against natural elements such as insects, wildlife, and weather conditions. The resort provides necessary information and amenities to mitigate these risks.
          </p>
          
          <h3>3. Swimming & Activities</h3>
          <p>
            Use of the swimming pool and participation in resort activities is at the guest's own risk. Children must be supervised at all times.
          </p>
          
          <h2>General Terms</h2>
          
          <h3>1. Liability</h3>
          <p>
            Wilderest Nature Resort is not liable for any loss, damage, or theft of personal belongings. The use of safes provided in rooms is recommended.
          </p>
          
          <h3>2. Right of Admission</h3>
          <p>
            The resort reserves the right to refuse service or accommodation to any guest who violates the resort's policies or engages in disruptive behavior.
          </p>
          
          <h3>3. Photography</h3>
          <p>
            The resort may take photographs of its premises, which may include guests, for promotional purposes. Please notify the management if you do not wish to be included.
          </p>
          
          <h3>4. Amendments</h3>
          <p>
            These terms and conditions may be amended by the resort at any time. The current version will always be available on our website.
          </p>
          
          <p className="text-sm italic mt-12">
            Last Updated: September 2023
          </p>
        </div>
      </Section>
    </>
  );
};

export default TermsPage;