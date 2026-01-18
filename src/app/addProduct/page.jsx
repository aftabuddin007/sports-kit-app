'use client';

import { useState } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    images: "",
    price: "",
    rating: "",
    stock: "In Stock",
    shortDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const name = e.target.name.value
     const price = parseFloat(e.target.price.value);
    const rating = parseInt(e.target.rating.value);
    const brand = e.target.brand.value
    const category = e.target.category.value
    const images = e.target.images.value
    const stock = e.target.stock.value
    const shortDescription = e.target.shortDescription.value
    try{
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/addProduct`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name,price,brand,category,images,rating,stock,shortDescription})
    })
    if (!res.ok) {
      console.error(`API error: ${res.status}`);
      return []; 
    }
     const data = await res.json()
     if (data.res.insertedId) {
      toast.success("Product added successfully");
      e.target.reset(); 
    }
    }catch(error){
console.error('Error fetching products:', error);
    return []; 
    }
    
   
  
    


};
  return (
    <section className="bg-[#0f172a] min-h-screen py-16 text-white">
      <div className="max-w-3xl mx-auto bg-[#020617] p-8 rounded-xl shadow-lg">
        
        <h2 className="text-3xl font-bold mb-8 text-center">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Product Name */}
          <div>
            <label className="block mb-2 text-sm">Product Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-amber-500"
              placeholder="Professional Football Jersey"
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block mb-2 text-sm">Brand</label>
            <input
              type="text"
              name="brand"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-amber-500"
              placeholder="SportPro"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 text-sm">Category</label>
            <select
              name="category"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-amber-500"
            >
              <option value="">Select Category</option>
              <option value="Football">Football</option>
              <option value="Cricket">Cricket</option>
              <option value="Basketball">Basketball</option>
              <option value="Gym">Gym</option>
              <option value="Running">Running</option>
              <option value="Yoga">Yoga</option>
            </select>
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-2 text-sm">Image URL</label>
            <input
              type="url"
              name="images"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-amber-500"
              placeholder="https://i.ibb.co.com/xxxx/image.png"
            />
          </div>

          {/* Price & Rating */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm">Price ($)</label>
              <input
                type="number"
                step="0.01"
                name="price"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Rating (1–5)</label>
              <input
                type="number"
                min="1"
                max="5"
                name="rating"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-2 text-sm">Stock Status</label>
            <select
              name="stock"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-amber-500"
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          {/* Short Description */}
          <div>
            <label className="block mb-2 text-sm">Short Description</label>
            <textarea
              name="shortDescription"
              rows="4"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-amber-500"
              placeholder="High-quality breathable football jersey..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 py-3 rounded-lg font-semibold transition"
          >
            Add Product
          </button>

        </form>
      </div>
    </section>
  );
};

export default AddProduct;
