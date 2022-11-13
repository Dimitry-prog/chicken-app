import React from "react";
import {IoCart} from "react-icons/io5";
import {motion} from 'framer-motion';

const RowContainer = ({flag}) => {
  return (
    <div className={`w-full my-12 ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>

      <div className='w-[350px] my-12 p-2 bg-cardOverlay shadow-md backdrop-blur-lg hover:drop-shadow-lg transition-all'>

        <div className='w-full flex items-center justify-between'>
          <img src="" alt="" className='w-40 -mt-8'/>
        </div>

        <motion.button
          whileTap={{scale: 0.6}}
          className='flex items-center justify-center hover:shadow-lg transition-all'>
          <IoCart className='w-8 h-8 p-1 text-white bg-orange-500 rounded-full hover:bg-orange-100 hover:text-orange-500 transition-all'/>
        </motion.button>

        <div className='w-full flex flex-col gap-2 items-end justify-end'>
          <h3 className='text-textColor font-semibold text-base md:text-lg'>Something</h3>
          <p className='text-sm text-gray-500'>45 Calories</p>
          <p className='text-sm text-textColor font-semibold'> <span className='text-xs text-red-500'>$</span> 5.25</p>
        </div>

      </div>

    </div>
  );
};

export default RowContainer;