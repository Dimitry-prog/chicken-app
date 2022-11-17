import React, {useState} from "react";
import {IoFastFood} from "react-icons/io5";
import {categories} from "../initData/initCategories";
import {motion} from 'framer-motion';
import {useSelector} from "react-redux";
import {RowContainer} from "./index";

const MenuContainer = () => {
  const [filter, setFilter] = useState('chicken');
  const {products} = useSelector(state => state.products);

  return (
    <section id='menu'>
      <div className='w-full flex flex-col'>
        <h2 className="text-2xl font-semibold capitalize relative
              before:absolute before:rounded-lg before:content before:w-[90px] before:h-1
              before:-bottom-2 before:left-0 before:bg-orange-500 transition-all
              ">
          Our hot dishes
        </h2>
      </div>

      <div
        className="w-full flex flex-wrap items-center lg:justify-center gap-4 md:gap-8 py-6">
        {categories.map(category => (
          <motion.button
            whileTap={{scale: 0.6}}
            key={category.id}
            onClick={() => setFilter(category.urlParamName)}
            type='button'
            className={`group ${filter === category.urlParamName ? "bg-orange-500" : "bg-card"} w-24 min-w-[140px] md:min-w-[100px] h-28 rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-orange-500 transition-all`}>
            <IoFastFood
              className={`w-8 h-8 p-2 shadow-md rounded-full text-textColor ${filter === category.urlParamName ? "bg-orange-100" : "bg-orange-500"} group-hover:text-orange-500 group-hover:bg-orange-100`}/>
            <p
              className={`text-sm ${filter === category.urlParamName ? "text-white" : "text-textColor"} group-hover:text-white`}>{category.name}</p>
          </motion.button>
        ))}
      </div>

      <ul className='flex flex-wrap gap-2 justify-center w-full'>
        <RowContainer products={products?.filter(item => item.category === filter)}/>
      </ul>
    </section>
  );
};

export default MenuContainer;