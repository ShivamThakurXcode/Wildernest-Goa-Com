import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Section from "../ui/Section";
import Button from "../ui/Button";

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section
      className="py-20 w-[99%] mx-auto rounded-2xl bottom-5 mt-10  mb-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('./Home/4.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center text-white"
      >
        <h2 className="mb-6">
          Ready for Your Unforgettable{" "}
          <span className="text-gradient">Wildernest Experience?</span>
        </h2>
        <p className="text-gray-200 text-lg mb-8">
          Book your stay now and enjoy special rates for the upcoming season.
          Experience the perfect blend of luxury and nature at Wildernest
          Resort.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button as={Link} to="/book" size="lg" className="w-full sm:w-auto">
            Book Your Stay
          </Button>
          <Button
            as={Link}
            to="/contact"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto !text-white !border-white hover:!bg-white/10"
          >
            Contact Us
            <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};

export default CTASection;
