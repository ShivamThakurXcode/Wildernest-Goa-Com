import { Helmet } from 'react-helmet';
import Section from '../components/ui/Section';

const CancellationPage = () => {
  return (
    <>
      <Helmet>
        <title>Cancellation Policy | Wilderest Nature Resort</title>
        <meta 
          name="description" 
          content="Read our cancellation policy for bookings at Wilderest Nature Resort. Learn about our refund terms and process."
        />
      </Helmet>

      {/* Header */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-2">Cancellation Policy</h1>
          <p className="text-gray-200 text-lg">
            Our booking cancellation and refund terms
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto prose dark:prose-invert prose-lg">
          <h2>Cancellation Policy</h2>
          <p>
            At Wilderest Nature Resort, we understand that plans can change. Our cancellation policy is designed 
            to be fair and transparent. Please review the following terms before making your reservation.
          </p>
          
          <h3>Standard Reservations</h3>
          <ul>
            <li><strong>More than 7 days prior to arrival:</strong> Full refund of the advance payment.</li>
            <li><strong>4-7 days prior to arrival:</strong> 70% refund of the advance payment.</li>
            <li><strong>1-3 days prior to arrival:</strong> 50% refund of the advance payment.</li>
            <li><strong>Less than 24 hours prior to arrival or no-show:</strong> No refund.</li>
          </ul>
          
          <h3>Peak Season Reservations (December 20 - January 10, and during major Indian holidays)</h3>
          <ul>
            <li><strong>More than 14 days prior to arrival:</strong> Full refund of the advance payment.</li>
            <li><strong>7-14 days prior to arrival:</strong> 70% refund of the advance payment.</li>
            <li><strong>3-6 days prior to arrival:</strong> 50% refund of the advance payment.</li>
            <li><strong>Less than 3 days prior to arrival or no-show:</strong> No refund.</li>
          </ul>
          
          <h3>Group Bookings (3 or more rooms)</h3>
          <ul>
            <li><strong>More than 30 days prior to arrival:</strong> Full refund of the advance payment.</li>
            <li><strong>15-30 days prior to arrival:</strong> 70% refund of the advance payment.</li>
            <li><strong>7-14 days prior to arrival:</strong> 50% refund of the advance payment.</li>
            <li><strong>Less than 7 days prior to arrival or no-show:</strong> No refund.</li>
          </ul>
          
          <h2>Modification of Reservations</h2>
          <p>
            Modifications to existing reservations are subject to availability and may result in rate changes.
          </p>
          <ul>
            <li><strong>Date Changes:</strong> If you need to change your dates, we will try to accommodate your request based on availability. If the new dates are within the same rate period, no additional fees will apply. If the new dates fall within a higher rate period, the difference will be charged.</li>
            <li><strong>Shortening Stay:</strong> Shortening your stay is considered a partial cancellation and is subject to the cancellation policy above.</li>
            <li><strong>Extending Stay:</strong> Extensions are subject to availability and current rates.</li>
          </ul>
          
          <h2>Refund Process</h2>
          <p>
            Refunds will be processed within 7-10 business days and will be issued to the original payment method. 
            Bank charges or currency exchange differences may apply and are not refundable.
          </p>
          
          <h2>Force Majeure</h2>
          <p>
            In the event of circumstances beyond our control (natural disasters, government actions, etc.), 
            we may offer the option to reschedule your stay or provide a credit for future use, even if standard 
            cancellation policies would otherwise apply.
          </p>
          
          <h2>Early Departure</h2>
          <p>
            No refunds will be issued for early departure once you have checked in.
          </p>
          
          <h2>How to Cancel or Modify a Reservation</h2>
          <p>
            To cancel or modify your reservation, please contact our reservations team:
          </p>
          <ul>
            <li>Email: reservations@wilderestresort.com</li>
            <li>Phone: +91 857 496 3214</li>
          </ul>
          <p>
            Please include your booking reference number in all communications.
          </p>
          
          <p className="text-sm italic mt-12">
            Last Updated: September 2023
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Note: This policy is subject to change. The cancellation policy in effect at the time of your booking will apply.
          </p>
        </div>
      </Section>
    </>
  );
};

export default CancellationPage;