import React from 'react'
import product1 from '../assets/img/product1.png'
const ProductDetail = () => {
  return (
    <div className='container mx-auto p-4'>
        <div className='flex flex-col md:flex-row gap-4'>
            {/* Product Image */}
            <div className='md:w-1/2'>
            <img src={product1} alt="" width={500} height={500}
            className='rounded-md'
            />
            </div>

            {/* Product Details */}
            <div className='md:w-1/2'>
            <h1 className='text-3xl font-bold mb-2'>One Life Graphic T-shirt</h1>
            <div className='flex items-center mb-2'>
                <span className='text-xl font-bold'>$260</span>
                <span className='text-gray-500 line-through ml-2'>$300</span>
                <span className='text-green-500 ml-2'>-40%</span>
            </div>
            <div className='flex-items-center mb-2'>
                <span className='text-yellow-500'>*****</span>
                <span className='text-gray-500 ml-2'>4.5/5</span>
            </div>
            <p className='mb-4'>
                This graphic t-shirt is perfect for  any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style 
                </p>
            
            {/* Color Selection */}
            <div className='mb-4'>
                <h2 className='text-lg fony-bold mb-2'>Select Color</h2>
                <div className='flex gap-2'>
                    <div className='relative w-10 h-10 rounded-full border-2 border-gray-40- cursor-pointer'>
                        <input
                        type="radio"
                        name="color"
                        value="black"
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 appearance-none h-4 w-4 rounded-full bg-black'
                        />     
                    </div>
                </div>
            </div>

            {/* size selection*/}
            <div className='mb-4'>
                <h2 className='text-lg font-bold mb-2'>Select Size</h2>
                <select className='border rounded-md p-2'>
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>

            {/* Add to Cart Button */}
            <button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
                Add to Cart
            </button>
            </div>
        </div>
    </div>
  );
};

export default ProductDetail
