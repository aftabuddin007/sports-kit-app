'use client';

import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  // Create stars based on rating
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < product.rating ? <FaStar key={i} className="text-amber-500" /> : <FaRegStar key={i} className="text-gray-300" />
  );

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Product Image */}
      <img
        src={product.images}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.brand}</p>

        <div className="flex items-center mt-2 mb-2">{stars}</div>

        <p className="text-amber-600 font-semibold text-lg">${product.price}</p>
        <p className="text-sm text-gray-600">{product.stock}</p>

        {/* CTA Button */}
        <Link href={`/products/${product.id}`} className="mt-4 btn w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-semibold transition">
          View Details
        </Link>
        
      </div>
    </div>
  );
};

export default ProductCard;
