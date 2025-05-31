import { Helmet } from "react-helmet";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Users, MapPin, Clock } from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import { toast } from "../components/ui/Toaster";

const BookPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    arrivalDate: "",
    departureDate: "",
    adults: 1,
    children: 0,
    roomType: "",
    specialRequests: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Clear error when user types
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
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.arrivalDate)
      newErrors.arrivalDate = "Arrival date is required";
    if (!formData.departureDate)
      newErrors.departureDate = "Departure date is required";
    if (!formData.roomType) newErrors.roomType = "Please select a room type";

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        console.log("Booking submitted:", formData);

        // Show success message
        toast({
          type: "success",
          title: "Booking Request Received",
          message:
            "We've sent a confirmation to your email. Our team will contact you shortly to finalize your reservation.",
          duration: 8000,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          arrivalDate: "",
          departureDate: "",
          adults: 1,
          children: 0,
          roomType: "",
          specialRequests: "",
        });
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book Your Stay | Wilderest Nature Resort</title>
        <meta
          name="description"
          content="Book your stay at Wilderest Nature Resort in Goa. Choose from our luxurious accommodations and experience nature's beauty in comfort."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-6">Book Your Stay</h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Reserve your perfect getaway at Wilderest Nature Resort. Fill out
            the form below and we'll confirm your booking shortly.
          </p>
        </div>
      </div>

      {/* Booking Form and Info */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">
                Reservation Details
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border ${
                        formErrors.name
                          ? "border-error-500 focus:ring-error-500"
                          : "border-gray-300 dark:border-gray-600 focus:ring-primary-500"
                      } px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-error-500">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                            ? "border-error-500 focus:ring-error-500"
                            : "border-gray-300 dark:border-gray-600 focus:ring-primary-500"
                        } px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-error-500">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border ${
                          formErrors.phone
                            ? "border-error-500 focus:ring-error-500"
                            : "border-gray-300 dark:border-gray-600 focus:ring-primary-500"
                        } px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-error-500">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="arrivalDate"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Arrival Date*
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="arrivalDate"
                          name="arrivalDate"
                          value={formData.arrivalDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split("T")[0]}
                          className={`w-full rounded-lg border ${
                            formErrors.arrivalDate
                              ? "border-error-500 focus:ring-error-500"
                              : "border-gray-300 dark:border-gray-600 focus:ring-primary-500"
                          } px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                        />
                        <Calendar
                          className="absolute right-3 top-2.5 text-gray-400"
                          size={18}
                        />
                      </div>
                      {formErrors.arrivalDate && (
                        <p className="mt-1 text-sm text-error-500">
                          {formErrors.arrivalDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="departureDate"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Departure Date*
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="departureDate"
                          name="departureDate"
                          value={formData.departureDate}
                          onChange={handleInputChange}
                          min={
                            formData.arrivalDate ||
                            new Date().toISOString().split("T")[0]
                          }
                          className={`w-full rounded-lg border ${
                            formErrors.departureDate
                              ? "border-error-500 focus:ring-error-500"
                              : "border-gray-300 dark:border-gray-600 focus:ring-primary-500"
                          } px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                        />
                        <Calendar
                          className="absolute right-3 top-2.5 text-gray-400"
                          size={18}
                        />
                      </div>
                      {formErrors.departureDate && (
                        <p className="mt-1 text-sm text-error-500">
                          {formErrors.departureDate}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="adults"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Adults*
                      </label>
                      <div className="relative">
                        <select
                          id="adults"
                          name="adults"
                          value={formData.adults}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Adult" : "Adults"}
                            </option>
                          ))}
                        </select>
                        <User
                          className="absolute right-3 top-2.5 text-gray-400"
                          size={18}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="children"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Children
                      </label>
                      <div className="relative">
                        <select
                          id="children"
                          name="children"
                          value={formData.children}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          {[0, 1, 2, 3, 4].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Child" : "Children"}
                            </option>
                          ))}
                        </select>
                        <Users
                          className="absolute right-3 top-2.5 text-gray-400"
                          size={18}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="roomType"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Room Type*
                    </label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border ${
                        formErrors.roomType
                          ? "border-error-500 focus:ring-error-500"
                          : "border-gray-300 dark:border-gray-600 focus:ring-primary-500"
                      } px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                    >
                      <option value="">Select Room Type</option>
                      <option value="Forest View Cottage">
                        Forest View Cottage
                      </option>
                      <option value="Luxury Tent">Luxury Tent</option>
                      <option value="Riverfront Villa">Riverfront Villa</option>
                      <option value="Family Suite">Family Suite</option>
                      <option value="Premium Treehouse">
                        Premium Treehouse
                      </option>
                    </select>
                    {formErrors.roomType && (
                      <p className="mt-1 text-sm text-error-500">
                        {formErrors.roomType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="specialRequests"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Special Requests
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Dietary restrictions, accessibility needs, celebration plans, etc."
                    ></textarea>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full"
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
                          Processing...
                        </span>
                      ) : (
                        "Confirm Booking Request"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Booking Information */}
          <div>
            <h2 className="mb-6">
              Booking <span className="text-gradient">Information</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Our booking process is simple and transparent. Here's what you
              need to know before making your reservation.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock
                    size={20}
                    className="text-primary-600 dark:text-primary-400"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Booking Policy</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    • Check-in: 2:00 PM | Check-out: 11:00 AM
                    <br />
                    • Minimum stay: 2 nights (3 nights on weekends)
                    <br />
                    • 30% deposit required to confirm booking
                    <br />• Free cancellation up to 7 days before arrival
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin
                    size={20}
                    className="text-primary-600 dark:text-primary-400"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Getting Here</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Address:</strong> Wilderest Nature Resort, Bardez,
                    North Goa, Goa 403507, India
                    <br />
                    <strong>Nearest Airport:</strong> Goa International Airport
                    (35km)
                    <br />
                    <strong>Nearest Railway:</strong> Thivim Station (18km)
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-900/30">
                <h3 className="font-semibold text-lg text-blue-700 dark:text-blue-300 mb-3">
                  Why Book Directly?
                </h3>
                <ul className="space-y-2 text-blue-600 dark:text-blue-200">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Best price guarantee - no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Priority for room upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Exclusive direct booking benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Flexible cancellation policy</span>
                  </li>
                </ul>
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
        </div>
      </Section>

      {/* Room Types Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">
            Our <span className="text-gradient">Accommodations</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Choose from our selection of unique accommodations, each designed to
            blend seamlessly with nature while providing modern comforts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Forest View Cottage",
              description:
                "Cozy cottages nestled in the forest with private verandas and stunning canopy views.",
              capacity: "2 Adults",
              price: "₹8,500/night",
            },
            {
              name: "Luxury Tent",
              description:
                "Spacious safari-style tents with king beds, private bathrooms, and outdoor showers.",
              capacity: "2 Adults",
              price: "₹12,000/night",
            },
            {
              name: "Riverfront Villa",
              description:
                "Private villas along the river with floor-to-ceiling windows and deck access.",
              capacity: "4 Adults",
              price: "₹18,000/night",
            },
            {
              name: "Family Suite",
              description:
                "Two-bedroom suites with living area, perfect for families or small groups.",
              capacity: "4 Adults + 2 Children",
              price: "₹22,000/night",
            },
            {
              name: "Premium Treehouse",
              description:
                "Elevated luxury among the trees with panoramic views and modern amenities.",
              capacity: "2 Adults",
              price: "₹15,000/night",
            },
            {
              name: "Extended Stay Bungalow",
              description:
                "Full kitchen, workspace, and separate living area for longer stays.",
              capacity: "2 Adults",
              price: "₹10,000/night (weekly rate)",
            },
          ].map((room, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-600"></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{room.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {room.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {room.capacity}
                  </span>
                  <span className="font-medium text-primary-600 dark:text-primary-400">
                    {room.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default BookPage;
