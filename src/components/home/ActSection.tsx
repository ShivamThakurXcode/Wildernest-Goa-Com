import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Mountain, Bike, Waves, Camera, Star } from "lucide-react";
import Section from "../ui/Section";

interface ActivityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  delay: number;
}

const Activity = ({
  icon,
  title,
  description,
  image,
  delay,
}: ActivityProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: delay * 0.1,
          },
        },
      }}
      className="relative group overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
          <div className="text-primary-600 dark:text-primary-400">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const ActivitiesSection = () => {
  const activities = [
    {
      icon: <Mountain size={24} />,
      title: "Mountain Hiking",
      description:
        "Embark on guided treks through breathtaking mountain trails, suitable for all skill levels, with stunning panoramic views.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Bike size={24} />,
      title: "Mountain Biking",
      description:
        "Ride through rugged terrains and scenic paths on our high-quality mountain bikes, perfect for thrill-seekers.",
      image:
        "https://images.unsplash.com/photo-1534732806146-6b6a63c38175?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Waves size={24} />,
      title: "Kayaking & Canoeing",
      description:
        "Paddle through serene lakes and rivers, experiencing nature up close with our guided water adventures.",
      image:
        "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Camera size={24} />,
      title: "Wildlife Photography",
      description:
        "Capture the beauty of local wildlife with guided photography tours, led by expert photographers.",
      image:
        "https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Star size={24} />,
      title: "Campfire Nights",
      description:
        "Gather around the campfire for storytelling, marshmallow roasting, and stargazing under the clear night sky.",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Star size={24} />,
      title: "Adventure Workshops",
      description:
        "Learn survival skills, knot-tying, and outdoor cooking in our hands-on workshops designed for all ages.",
      image:
        "https://images.unsplash.com/photo-1529269660081-6e678aab950e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="text-center mb-16">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Adventure Awaits at <span className="text-gradient">Wilderest</span>
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            },
          }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Dive into thrilling activities that bring you closer to nature. From
          hiking to kayaking, our resort offers unforgettable experiences for
          adventurers of all levels.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {activities.map((activity, index) => (
          <Activity
            key={index}
            icon={activity.icon}
            title={activity.title}
            description={activity.description}
            image={activity.image}
            delay={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default ActivitiesSection;
