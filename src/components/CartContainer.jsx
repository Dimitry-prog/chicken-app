import React from "react";
import {MdOutlineKeyboardBackspace, MdCancel} from 'react-icons/md';
import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai';
import {motion} from 'framer-motion';
import {useDispatch} from "react-redux";
import {setIsShowCart} from "../store/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(setIsShowCart());
  }

  return (
    <motion.section
      initial={{opacity: 0, x: 200}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: 200}}
      className='fixed top-0 left-0 w-full h-full bg-black/50 flex flex-col items-end gap-4 drop-shadow-md z-[100]'>

      <div className='relative w-full md:w-[380px] p-4 bg-primary'>

        <div className='flex items-center justify-between'>
          <motion.button
            whileTap={{scale: 0.6}}
            onClick={closeCart}
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

          <div className='h-[340px] flex flex-col gap-3 p-2 overflow-y-scroll scrollbar-none'>
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

          <div className='flex flex-col gap-2 p-2 rounded-t-3xl bg-cardOverlay'>
            <div className='flex items-start justify-between'>
              <p className='text-lg text-textColor'>Sub Total:</p>
              <p className='text-lg text-textColor'> Amout total</p>
            </div>

            <div className='flex items-start justify-between'>
              <p className='text-lg text-textColor'>Delivery:</p>
              <p className='text-lg text-textColor'> $2.5</p>
            </div>

            <div className='w-full border-b border-gray-500'></div>

            <div className='flex items-start justify-between'>
              <p className='text-lg text-headingColor'>Total: </p>
              <p className='text-lg text-headingColor'> $12.5</p>
            </div>

            <motion.button
              whileTap={{scale: 0.6}}
              className='w-full flex items-center justify-center p-1 capitalize bg-orange-500 rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all'>
              Check out
            </motion.button>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default CartContainer;