import React from 'react';

const getSingleProd = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/addProduct/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();

  return data.addProd; 
};

const ProductDetails = async ({ params }) => {
  const { id } =await params;

  const product = await getSingleProd(id);
console.log(product)
  if (!product) {
    return (
      <h2 className="text-center text-red-500 text-xl mt-10">
        Product not found
      </h2>
    );
  }
// console.log( id,product)
    return (
        <div>
            <h2 className="text-2xl text-center my-4">Product details for {product.name}</h2>
           <div className="">
<div className="flex items-center justify-center min-h-screen bg-neutral-950 p-6">
      <div className="max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Product Image Section */}
        <div className="relative w-full md:w-1/2 h-80 md:h-auto overflow-hidden group">
          <img
            src={product.images}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wider">
            {product.category}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <span className="text-emerald-500 font-medium text-sm tracking-widest uppercase">
                {product.brand}
              </span>
              <span className="text-zinc-500 text-sm italic">{product.stock}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-white mt-2 mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < product.rating ? "fill-current" : "text-zinc-700"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-zinc-400 text-sm">({product.rating}.0 Rating)</span>
            </div>

            <p className="text-zinc-400 leading-relaxed mb-6">
              {product.shortDescription}
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="text-4xl font-light text-white">
                ${product.price}
              </span>
            </div>

            <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-colors duration-200 uppercase tracking-widest text-sm">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
           </div>
        </div>
    );
};

export default ProductDetails;