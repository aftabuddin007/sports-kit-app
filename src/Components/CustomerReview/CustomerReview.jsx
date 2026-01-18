'use client';

import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Football Player",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    comment:
      "SportsKit er product quality onek bhalo. Jersey ta comfortable ebong long-lasting."
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Fitness Enthusiast",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 4,
    comment:
      "Gym equipment gulo solid quality. Dark theme UI ta o onek clean lagse."
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    role: "Basketball Player",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    comment:
      "Basketball shoes ta perfect fit. Delivery fast chilo. Highly recommended!"
  }
];

const CustomerReviews = () => {
  return (
    <section className="bg-[#0f172a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real feedback from athletes and fitness lovers who trust SportsKit.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#020617] p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-amber-500"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 text-amber-500 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-300 text-sm leading-relaxed">
                “{review.comment}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
