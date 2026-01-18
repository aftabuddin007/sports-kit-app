
import ProductCard from '@/card/ProductCard';
import React from 'react';
const getAllProduct = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/addProduct`, {
      cache: 'no-store',
    });
    // console.log(res)
    if (!res.ok) {
      console.error(`API error: ${res.status}`);
      return []; 
    }
    
    const data = await res.json();
    return data.addProd || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; 
  }
};



const Products = async() => {
    const item = await getAllProduct()
    // console.log(item)

    return (
        <div className='max-w-7xl mx-auto '>
            <h2 className="text-3xl font bold text-center py-10">All products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-3  gap-6 mb-6'>
                {
                    item.map((product)=><ProductCard product={product} key={product._id}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;
