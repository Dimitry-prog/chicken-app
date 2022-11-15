import React from "react";
import {motion} from "framer-motion";
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {addItemToCart, removeItemFromCart} from "../store/cartSlice";

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();

  return (
    <li
      className="p-1 flex items-center justify-between gap-2 rounded-lg bg-cardOverlay">
      <img src={cartItem.imageURL} alt={cartItem.name} className="w-20 h-20 object-contain"/>
      <div className="flex flex-col gap-2">
        <h4 className="text-base text-headingColor capitalize">{cartItem.title}</h4>
        <p className="text-sm text-textColor"><span className="text-sm text-red-500">$</span> {(parseFloat(cartItem.price) * cartItem.quantity).toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <motion.button
          whileTap={{scale: 0.6}}
          onClick={() => dispatch(removeItemFromCart(cartItem.id))}
          className="group flex items-center justify-center p-1 bg-orange-500 rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all">
          <AiFillMinusCircle className="w-4 h-4 text-white group-hover:text-orange-500"/>
        </motion.button>
        <p className="text-sm text-textColor">{cartItem.quantity}</p>
        <motion.button
          whileTap={{scale: 0.6}}
          onClick={() => dispatch(addItemToCart(cartItem))}
          className="group flex items-center justify-center p-1 bg-orange-500 rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all">
          <AiFillPlusCircle className="w-4 h-4 text-white group-hover:text-orange-500"/>
        </motion.button>
      </div>
    </li>
  );
};

export default CartItem;