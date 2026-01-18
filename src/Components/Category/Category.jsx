'use client';

import Link from "next/link";
import { motion } from "framer-motion";

import { FaFootballBall } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { TbCricket } from "react-icons/tb";
const categories = [
  {
    name: "Football",
    icon: <FaFootballBall />,
    image: "https://i.ibb.co.com/Q3gs5hnM/Untitled-2.png",
  },
  {
    name: "Cricket",
    icon: <TbCricket />,
    image: "https://i.ibb.co.com/hJksv4jh/Untitled-1.png",
  },
  {
    name: "Basketball",
    icon: <FaBasketballBall />,
    image: "https://i.ibb.co.com/PGjdWRK2/g-2.png",
  },
  {
    name: "Gym & Fitness",
    icon: <FaDumbbell />,
    image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
  },
  {
    name: "Running",
    icon: <FaRunning />,
    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
  },
];

const CategorySection = () => {
  return (
    <section className="bg-[#0b0b0b] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Explore premium sports kits designed for performance, durability,
            and comfort.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="h-56 w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition" />

              {/* Content */}
              <Link
                href={`/products?category=${cat.name}`}
                className="absolute inset-0 flex flex-col items-center justify-center text-white"
              >
                <div className="text-4xl mb-3 text-amber-500">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-wide">
                  {cat.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
