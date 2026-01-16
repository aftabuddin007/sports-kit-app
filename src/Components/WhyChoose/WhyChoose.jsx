'use client';

import { motion } from "framer-motion";
import {
  FaTrophy,
  FaShieldAlt,
  FaShippingFast,
  FaTags,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaTrophy />,
    title: "Top Quality Sports Gear",
    description:
      "We provide premium sports kits made with durable materials trusted by professional athletes.",
  },
  {
    icon: <FaShieldAlt />,
    title: "100% Genuine Products",
    description:
      "All our sports kits are original and quality-checked to ensure the best performance.",
  },
  {
    icon: <FaShippingFast />,
    title: "Fast & Reliable Delivery",
    description:
      "Get your sports gear delivered quickly and safely, right to your doorstep.",
  },
  {
    icon: <FaTags />,
    title: "Affordable Prices",
    description:
      "High-quality sports kits at competitive prices with regular discounts and offers.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-base-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-base-800">
            Why Choose Us
          </h2>
          <p className="text-base-600 mt-3 max-w-2xl mx-auto">
            We are committed to providing the best sports kits to help you
            perform at your best.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-base-100 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl text-amber-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-base-800 mb-2">
                {item.title}
              </h3>
              <p className="text-base-600 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
