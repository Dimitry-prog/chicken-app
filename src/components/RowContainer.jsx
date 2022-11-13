import React from "react";
import {IoCart} from "react-icons/io5";
import {motion} from 'framer-motion';

const RowContainer = ({products}) => {
  const fruits = products?.filter(fruit => fruit.category === 'fruits');
  console.log(fruits);

  return (
    <>
      {fruits.map(fruit => (
        <div
          key={fruit.id}
          className='flex flex-col justify-end min-w-[296px] my-6 md:my-12 p-2 bg-cardOverlay shadow-md backdrop-blur-lg relative hover:drop-shadow-lg transition-all'>

          <motion.button
            whileTap={{scale: 0.6}}
            className='absolute top-0 flex items-center justify-center hover:shadow-lg transition-all'>
            <IoCart className='w-8 h-8 p-1 text-white bg-orange-500 rounded-full hover:bg-orange-100 hover:text-orange-500 transition-all'/>
          </motion.button>

          <div className='w-full flex flex-col gap-2 items-end'>
            <img src={fruit.imageURL} alt={fruit.title} className='w-[100px] sm:w-[150px] -mt-[50px]'/>
            <h3 className='text-textColor font-semibold text-base md:text-lg'>{fruit.title}</h3>
            <p className='text-sm text-gray-500'>{fruit.calories} Calories</p>
            <p className='text-sm text-textColor font-semibold'> <span className='text-xs text-red-500'>$</span> {fruit.price}</p>
          </div>

        </div>
      ))}
    </>
  );
};

export default RowContainer;