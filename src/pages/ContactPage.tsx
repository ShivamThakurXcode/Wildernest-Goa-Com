import { Helmet } from "react-helmet";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import { toast } from "../components/ui/Toaster";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        console.log("Form submitted:", formData);
        toast({
          type: "success",
          title: "Message Sent",
          message: "We'll get back to you as soon as possible.",
          duration: 6000,
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);
      }, 1500);
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
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

      {/* Hero Section with  Gradient */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('/cta-bg.svg')`,
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
              Connect with Wilderest
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold text-white relative mb-6">
              Get in Touch
            </h1>
            <p className="text-orange-100 text-lg max-w-3xl mx-auto">
              Reach out to us for inquiries, reservations, or special requests.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information and Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - Enhanced with Orange */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 text-3xl font-bold"
            >
              Get in <span className="text-orange-600">Touch</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8"
            >
              We're always ready to assist with any questions about our
              accommodations, activities, or services. Reach out through any of
              the channels below.
            </motion.p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: <MapPin className="text-orange-600" size={20} />,
                  title: "Address",
                  content: (
                    <>
                      Wilderest Nature Resort,
                      <br />
                      Bardez, North Goa,
                      <br />
                      Goa 403507, India
                    </>
                  ),
                },
                {
                  icon: <Phone className="text-orange-600" size={20} />,
                  title: "Phone",
                  content: (
                    <>
                      <a
                        href="tel:+918574963214"
                        className="hover:text-orange-600 transition-colors"
                      >
                        +91 857 496 3214
                      </a>
                      <br />
                      <a
                        href="tel:+918574963215"
                        className="hover:text-orange-600 transition-colors"
                      >
                        +91 857 496 3215
                      </a>
                    </>
                  ),
                },
                {
                  icon: <Mail className="text-orange-600" size={20} />,
                  title: "Email",
                  content: (
                    <>
                      <a
                        href="mailto:info@wilderestresort.com"
                        className="hover:text-orange-600 transition-colors"
                      >
                        info@wilderestresort.com
                      </a>
                      <br />
                      <a
                        href="mailto:reservations@wilderestresort.com"
                        className="hover:text-orange-600 transition-colors"
                      >
                        reservations@wilderestresort.com
                      </a>
                    </>
                  ),
                },
                {
                  icon: <Clock className="text-orange-600" size={20} />,
                  title: "Office Hours",
                  content: (
                    <>
                      Monday - Sunday: 24 hours
                      <br />
                      (Front desk always available)
                    </>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-orange-50/50 p-4 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Google Map with Orange Border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg h-[250px] border-2 border-orange-200"
            >
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
            </motion.div>
          </div>

          {/* Contact Form - Orange Theme */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-orange-100">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                      } px-4 py-3 bg-white focus:outline-none focus:ring-2`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                      } px-4 py-3 bg-white focus:outline-none focus:ring-2`}
                      placeholder="your@email.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject*
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border ${
                          formErrors.subject
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                        } px-4 py-3 bg-white focus:outline-none focus:ring-2 appearance-none`}
                      >
                        <option value="">Select a subject</option>
                        <option value="Booking Inquiry">Booking Inquiry</option>
                        <option value="Cancellation/Modification">
                          Cancellation/Modification
                        </option>
                        <option value="Special Request">Special Request</option>
                        <option value="General Information">
                          General Information
                        </option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown size={20} />
                      </div>
                    </div>
                    {formErrors.subject && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                      } px-4 py-3 bg-white focus:outline-none focus:ring-2`}
                      placeholder="Type your message here..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
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
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section with Orange Accents */}
      <Section className="bg-orange-50">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold"
          >
            Frequently Asked <span className="text-orange-600">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600"
          >
            Find quick answers to common questions about Wilderest Nature
            Resort.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              question: "What is the check-in and check-out time?",
              answer:
                "Check-in time is from 2:00 PM to 10:00 PM, and check-out time is until 11:00 AM. Early check-in or late check-out may be arranged based on availability.",
            },
            {
              question: "Is there WiFi available at the resort?",
              answer:
                "Yes, complimentary high-speed WiFi is available throughout the resort, including all rooms, public areas, and even some outdoor spaces.",
            },
            {
              question: "Are pets allowed at Wilderest?",
              answer:
                "We welcome pets in select accommodations with prior arrangement. A pet fee applies. Please contact us in advance to make arrangements for your furry companion.",
            },
            {
              question: "What dining options are available?",
              answer:
                "Our resort features a main restaurant serving local and international cuisine, a poolside café, and in-room dining. All meals are prepared using fresh, locally-sourced ingredients.",
            },
            {
              question: "Is airport transfer available?",
              answer:
                "Yes, we provide airport transfers at additional cost. Please provide your flight details at least 24 hours prior to arrival.",
            },
            {
              question: "What activities are available at the resort?",
              answer:
                "We offer guided nature walks, yoga sessions, cooking classes, wildlife spotting, nearby beach trips, and cultural experiences with local communities.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    activeFaq === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeFaq === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-gray-600 pt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
