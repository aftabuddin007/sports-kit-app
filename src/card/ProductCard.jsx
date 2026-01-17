'use client';

import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  // Create stars based on rating
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < product.rating ? (
      <FaStar key={i} className="text-amber-400" />
    ) : (
      <FaRegStar key={i} className="text-zinc-600" />
    )
  );

  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.2)]">
      
      {/* Badge for Stock */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-black/50 backdrop-blur-md text-amber-500 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider border border-white/10">
          {product.stock === "In Stock" ? "Ready to Ship" : "Out of Stock"}
        </span>
      </div>

      {/* Product Image Container */}
      <div className="relative h-64 overflow-hidden bg-zinc-800">
        <img
          src={product.images}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-1">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
            {product.brand}
          </p>
          <div className="flex text-xs gap-0.5">{stars}</div>
        </div>

        <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-amber-500 transition-colors duration-300 line-clamp-1">
          {product.name}
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-zinc-500 text-[10px] uppercase font-bold">Price</span>
            <span className="text-2xl font-light text-white tracking-tight">
              ${product.price}
            </span>
          </div>

          <Link 
            href={`/products/${product.id}`} 
            className="flex items-center justify-center bg-white text-black h-12 px-6 rounded-xl font-bold text-sm hover:bg-amber-500 hover:text-white transition-all duration-300 active:scale-95"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;