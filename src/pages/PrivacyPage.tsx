import { Helmet } from 'react-helmet';
import Section from '../components/ui/Section';

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Wilderest Nature Resort</title>
        <meta 
          name="description" 
          content="Read our privacy policy to understand how Wilderest Nature Resort collects, uses, and protects your personal information."
        />
      </Helmet>

      {/* Header */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-200 text-lg">
            How we collect, use, and protect your information
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto prose dark:prose-invert prose-lg">
          <h2>Introduction</h2>
          <p>
            At Wilderest Nature Resort, we respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
            our website or stay at our resort.
          </p>
          
          <h2>Information We Collect</h2>
          
          <h3>1. Personal Information</h3>
          <p>
            We may collect the following personal information when you make a reservation, sign up for our newsletter, 
            or contact us:
          </p>
          <ul>
            <li>Name and contact details (email address, phone number, postal address)</li>
            <li>Payment information (credit card details, billing address)</li>
            <li>Identification information (passport or ID details as required by law)</li>
            <li>Demographic information (nationality, language preference)</li>
            <li>Special requests or preferences related to your stay</li>
          </ul>
          
          <h3>2. Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain information about your device, 
            including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Time and date of your visit</li>
            <li>Pages you viewed</li>
            <li>Time spent on pages</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul>
            <li>Processing and confirming your reservations</li>
            <li>Processing payments</li>
            <li>Providing customer service and responding to inquiries</li>
            <li>Personalizing your experience at our resort</li>
            <li>Sending promotional communications (if you have opted in)</li>
            <li>Improving our website and services</li>
            <li>Complying with legal obligations</li>
          </ul>
          
          <h2>Information Sharing and Disclosure</h2>
          <p>
            We may share your information with:
          </p>
          <ul>
            <li>Service providers who perform services on our behalf (payment processors, IT service providers, etc.)</li>
            <li>Business partners with whom we offer joint promotions or services (with your consent)</li>
            <li>Legal authorities when required by law</li>
          </ul>
          <p>
            We do not sell your personal information to third parties.
          </p>
          
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, 
            alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic 
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul>
            <li>The right to access the personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to opt out of marketing communications</li>
            <li>The right to data portability</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided at the end of this policy.
          </p>
          
          <h2>Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can set your browser to refuse cookies, 
            but this may limit some functionality of our website.
          </p>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes will be posted on this page with a revised 
            "Last Updated" date. We encourage you to review this Privacy Policy periodically.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p>
            Wilderest Nature Resort<br />
            Email: privacy@wilderestresort.com<br />
            Phone: +91 857 496 3214<br />
            Address: Bardez, North Goa, Goa 403507, India
          </p>
          
          <p className="text-sm italic mt-12">
            Last Updated: September 2023
          </p>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPage;