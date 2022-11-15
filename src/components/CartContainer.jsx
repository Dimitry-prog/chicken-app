import React from "react";
import {MdOutlineKeyboardBackspace, MdCancel} from 'react-icons/md';
import {motion} from 'framer-motion';
import {useDispatch, useSelector} from "react-redux";
import {clearCart, setIsShowCart} from "../store/cartSlice";
import emptyCart from '../images/emptyCart.svg';
import {CartItem} from "./index";

const CartContainer = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(setIsShowCart());
  }

  const subTotalPrice = () => {
    const subPrice = cart.cartItems.reduce((sum, item) => sum += parseFloat(item.price) * item.quantity, 0);
    return subPrice.toFixed(2);
  }

  return (
    <motion.section
      initial={{opacity: 0, x: 200}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: 200}}
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex flex-col items-end gap-4 drop-shadow-md z-[100]">

      <div className="relative w-full h-screen md:w-[380px] p-4 flex flex-col gap-6 bg-primary">

        <div className="flex items-center justify-between">
          <motion.button
            whileTap={{scale: 0.6}}
            onClick={closeCart}
            className="group flex items-center justify-center gap-2 p-2 bg-orange-500 rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all">
            <MdOutlineKeyboardBackspace className="w-5 h-5 text-white group-hover:text-orange-500"/>
          </motion.button>

          <p className="text-textColor text-lg font-semibold">Cart</p>

          <motion.button
            whileTap={{scale: 0.6}}
            onClick={() => dispatch(clearCart())}
            className="group flex items-center justify-center gap-2 p-2 bg-orange-500 text-base text-textColor rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all">
            Clear
            <MdCancel className="w-5 h-5 text-white group-hover:text-orange-500"/>
          </motion.button>
        </div>

        {cart.cartItems.length > 0
          ? (
            <div className="flex flex-col rounded-t-3xl">

              <ul className="h-[340px] flex flex-col gap-3 p-2 overflow-y-scroll scrollbar-none">
                {cart.cartItems.map(cartItem => (
                  <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}/>
                ))}
              </ul>

              <div className="flex flex-col gap-2 p-2 rounded-t-3xl bg-cardOverlay">
                <div className="flex items-start justify-between">
                  <p className="text-lg text-textColor">Sub Total:</p>
                  <p className="text-lg text-textColor"> <span className="text-lg text-red-500">$</span> {subTotalPrice()}</p>
                </div>

                <div className="flex items-start justify-between">
                  <p className="text-lg text-textColor">Delivery:</p>
                  <p className="text-lg text-textColor"> <span className="text-lg text-red-500">$</span> 2.5</p>
                </div>

                <div className="w-full border-b border-gray-500"></div>

                <div className="flex items-start justify-between">
                  <p className="text-lg text-headingColor font-semibold">Total: </p>
                  <p className="text-lg text-headingColor font-semibold"> <span className="text-lg text-red-500">$</span> {(Number(subTotalPrice()) + 2.5).toFixed(2)}</p>
                </div>

                <motion.button
                  whileTap={{scale: 0.6}}
                  type='button'
                  className="w-full flex items-center justify-center p-1 capitalize bg-orange-500 rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all">
                  Check out
                </motion.button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6 justify-center items-center">
              <img src={emptyCart} alt="empty cart" className='w-[300px]'/>
              <p className="text-lg text-textColor font-semibold">You have not added items to your shopping cart yet</p>
            </div>
          )}

      </div>
    </motion.section>
  );
};

export default CartContainer;