'use client';

import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const NewsletterCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-10 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Sports Community
          </h2>

          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter and get the latest updates on new sports
            kits, exclusive discounts, and training tips.
          </p>

          {/* CTA Form */}
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:flex-1 px-5 py-3 rounded-full text-gray-800 outline-none"
              required
            />

            <button
              type="submit"
              className="flex items-center gap-2 bg-black hover:bg-gray-900 px-6 py-3 rounded-full font-semibold transition"
            >
              Subscribe
              <FaPaperPlane />
            </button>
          </form>

          <p className="text-xs text-white/80 mt-4">
            We respect your privacy. No spam, unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
