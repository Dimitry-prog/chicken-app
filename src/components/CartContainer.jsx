import React from "react";
import {MdOutlineKeyboardBackspace, MdCancel} from 'react-icons/md';
import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai';
import {motion} from 'framer-motion';

const CartContainer = () => {
  return (
    <section className='fixed top-0 right-0 w-full md:w-[380px] p-4 bg-white h-screen flex flex-col drop-shadow-md z-[100]'>
      <div className='flex items-center justify-between'>
        <motion.button
          whileTap={{scale: 0.6}}
          className='group flex items-center justify-center gap-2 p-2 bg-orange-500 rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all'>
          <MdOutlineKeyboardBackspace className='w-5 h-5 text-white group-hover:text-orange-500'/>
        </motion.button>
        <p className='text-textColor text-lg font-semibold'>Cart</p>
        <motion.button
          whileTap={{scale: 0.6}}
          className='group flex items-center justify-center gap-2 p-2 bg-orange-500 text-base text-textColor rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all'>
          Clear
          <MdCancel className='w-5 h-5 text-white group-hover:text-orange-500'/>
        </motion.button>
      </div>

      <div className='h-full flex flex-col rounded-t-3xl bg-primary'>

        <div className='h-[340px] px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
          <div className='p-1 flex items-center justify-between gap-2 rounded-lg bg-cardOverlay'>
            <img src="" alt=""/>
            <div className='flex flex-col gap-2'>
              <h4 className='text-base text-headingColor capitalize'>vanilla</h4>
              <p className='text-sm text-textColor'> <span className='text-sm text-red-500'>$</span>8.5</p>
            </div>

            <div className='flex items-center gap-2'>
              <motion.button
                whileTap={{scale: 0.6}}
                className='group flex items-center justify-center p-1 bg-orange-500 rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all'>
                <AiFillMinusCircle className='w-4 h-4 text-white group-hover:text-orange-500'/>
              </motion.button>
              <p className='text-sm text-textColor'>1</p>
              <motion.button
                whileTap={{scale: 0.6}}
                className='group flex items-center justify-center p-1 bg-orange-500 rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all'>
                <AiFillPlusCircle className='w-4 h-4 text-white group-hover:text-orange-500'/>
              </motion.button>
            </div>
          </div>
        </div>

        <div className='flex flex-col px-8 py-2 items-center justify-evenly rounded-t-3xl bg-cardOverlay'>
          <div className='flex  items-center justify-between'>
            <p className='text-lg text-headingColor'>Sub Total</p>
            <p className='text-lg text-headingColor'> Amout total</p>
          </div>

          <div className='flex  items-center justify-between'>
            <p className='text-lg text-headingColor'>Delivery</p>
            <p className='text-lg text-headingColor'> $2.5</p>
          </div>

          <div className='w-full border-b border-gray-500 my-2'></div>

          <div className='flex  items-center justify-between'>
            <p className='text-lg text-headingColor'>Total: </p>
            <p className='text-lg text-headingColor'> $12.5</p>
          </div>

          <motion.button
            whileTap={{scale: 0.6}}
            className='w-full flex items-center justify-center my-2 p-1 capitalize bg-orange-500 rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all'>
            Check out
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;