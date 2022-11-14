import React from "react";
import {IoCart} from "react-icons/io5";
import {motion} from 'framer-motion';
import notFound from '../images/NotFound.svg';

const RowContainer = ({products}) => {

  return (
    <>
      {products.length > 0
      ? (
          products.map(elem => (
            <li
              key={elem.id}
              className='flex flex-col justify-end min-w-[296px] my-6 md:my-12 p-2 rounded-lg bg-cardOverlay shadow-md backdrop-blur-lg relative hover:drop-shadow-lg transition-all'>

              <motion.button
                whileTap={{scale: 0.6}}
                className='absolute top-6 flex items-center justify-center hover:shadow-lg transition-all'>
                <IoCart className='w-8 h-8 p-1 text-white bg-orange-500 rounded-full hover:bg-orange-100 hover:text-orange-500 transition-all'/>
              </motion.button>

              <div className='w-full flex flex-col gap-2 items-end'>
                <img src={elem.imageURL} alt={elem.title} className='h-28 md:h-40 -mt-[50px]'/>
                <h3 className='text-textColor font-semibold text-base md:text-lg'>{elem.title}</h3>
                <p className='text-sm text-gray-500'>{elem.calories} Calories</p>
                <p className='text-sm text-textColor font-semibold'> <span className='text-xs text-red-500'>$</span> {elem.price}</p>
              </div>

            </li>
          ))
        )
      : (
          <div className='flex flex-col gap-2 items-center justify-center'>
            <img src={notFound} alt="not found" className='h-28 md:h-40'/>
            <p className='text-lg font-semibold text-textColor'>Today there are no dishes in this category =(</p>
          </div>
        )}
    </>
  );
};

export default RowContainer;