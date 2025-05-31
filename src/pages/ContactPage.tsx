import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { toast } from '../components/ui/Toaster';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        // In a real app, we would submit the form data to a backend
        console.log('Form submitted:', formData);
        
        // Show success message
        toast({
          type: 'success',
          title: 'Message Sent',
          message: 'We\'ll get back to you as soon as possible.',
          duration: 6000
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Wilderest Nature Resort</title>
        <meta 
          name="description" 
          content="Contact Wilderest Nature Resort in Goa for inquiries, reservations, or special requests. We're here to help make your stay perfect."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-6">Contact Us</h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Have questions or special requests? We're here to help make your stay at Wilderest perfect.
          </p>
        </div>
      </div>

      {/* Contact Information and Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="mb-6">Get in <span className="text-gradient">Touch</span></h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              We're always ready to assist with any questions about our accommodations, 
              activities, or services. Reach out through any of the channels below.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Wilderest Nature Resort,<br />
                    Bardez, North Goa,<br />
                    Goa 403507, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="tel:+918574963214" className="hover:text-primary-600 dark:hover:text-primary-400">
                      +91 857 496 3214
                    </a>
                    <br />
                    <a href="tel:+918574963215" className="hover:text-primary-600 dark:hover:text-primary-400">
                      +91 857 496 3215
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="mailto:info@wilderestresort.com" className="hover:text-primary-600 dark:hover:text-primary-400">
                      info@wilderestresort.com
                    </a>
                    <br />
                    <a href="mailto:reservations@wilderestresort.com" className="hover:text-primary-600 dark:hover:text-primary-400">
                      reservations@wilderestresort.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Office Hours</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday - Sunday: 24 hours<br />
                    (Front desk always available)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-lg h-[250px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61538.789588542036!2d73.76019024863282!3d15.592269899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc0cf0b5b0d5f%3A0xeafd7bd22c55c94c!2sBardez%2C%20Goa!5e0!3m2!1sen!2sin!4v1662452689754!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Wilderest Resort Location"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border ${
                        formErrors.name 
                          ? 'border-error-500 focus:ring-error-500' 
                          : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                      } px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-error-500">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border ${
                        formErrors.email 
                          ? 'border-error-500 focus:ring-error-500' 
                          : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                      } px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-error-500">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border ${
                        formErrors.subject 
                          ? 'border-error-500 focus:ring-error-500' 
                          : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                      } px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                    >
                      <option value="">Select a subject</option>
                      <option value="Booking Inquiry">Booking Inquiry</option>
                      <option value="Cancellation/Modification">Cancellation/Modification</option>
                      <option value="Special Request">Special Request</option>
                      <option value="General Information">General Information</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                    {formErrors.subject && (
                      <p className="mt-1 text-sm text-error-500">{formErrors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full rounded-lg border ${
                        formErrors.message 
                          ? 'border-error-500 focus:ring-error-500' 
                          : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                      } px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-error-500">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                            <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send size={16} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-gray-600 dark:text-gray-400">
            Find quick answers to common questions about Wilderest Nature Resort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              question: "What is the check-in and check-out time?",
              answer: "Check-in time is from 2:00 PM to 10:00 PM, and check-out time is until 11:00 AM. Early check-in or late check-out may be arranged based on availability."
            },
            {
              question: "Is there WiFi available at the resort?",
              answer: "Yes, complimentary high-speed WiFi is available throughout the resort, including all rooms, public areas, and even some outdoor spaces."
            },
            {
              question: "Are pets allowed at Wilderest?",
              answer: "We welcome pets in select accommodations with prior arrangement. A pet fee applies. Please contact us in advance to make arrangements for your furry companion."
            },
            {
              question: "What dining options are available?",
              answer: "Our resort features a main restaurant serving local and international cuisine, a poolside café, and in-room dining. All meals are prepared using fresh, locally-sourced ingredients."
            },
            {
              question: "Is airport transfer available?",
              answer: "Yes, we provide airport transfers at additional cost. Please provide your flight details at least 24 hours prior to arrival."
            },
            {
              question: "What activities are available at the resort?",
              answer: "We offer guided nature walks, yoga sessions, cooking classes, wildlife spotting, nearby beach trips, and cultural experiences with local communities."
            }
          ].map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md"
            >
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default ContactPage;