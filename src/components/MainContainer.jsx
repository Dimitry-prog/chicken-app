import React, {useRef} from "react";
import {HomeContainer, MenuContainer, RowContainer} from "./index";
import {motion} from 'framer-motion';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {useDispatch, useSelector} from "react-redux";
import ContainerWithRef from "./ContainerWithRef";

const MainContainer = () => {
  const {products} = useSelector(state => state.products);
  const dispatch = useDispatch();
  const rowContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    rowContainerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <HomeContainer/>

      <section className="w-full p-3 md:p-6">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl font-semibold capitalize relative
              before:absolute before:rounded-lg before:content before:w-[90px] before:h-1
              before:-bottom-2 before:left-0 before:bg-orange-500 transition-all
              ">
            Our fresh & healthy fruits
          </h2>

          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileTap={{scale: 0.6}}
              onClick={() => scroll(-250)}
              className="flex items-center justify-center hover:shadow-lg transition-all cursor-pointer"
            >
              <MdChevronLeft
                className="w-8 h-8 text-lg text-white bg-orange-500 rounded-lg hover:bg-orange-100 hover:text-orange-500 transition-all"/>
            </motion.button>
            <motion.button
              whileTap={{scale: 0.6}}
              onClick={() => scroll(250)}
              className="flex items-center justify-center hover:shadow-lg duration-300 transition-all cursor-pointer"
            >
              <MdChevronRight
                className="w-8 h-8 text-lg text-white bg-orange-500 rounded-lg hover:bg-orange-100 hover:text-orange-500 transition-all"/>
            </motion.button>
          </div>
        </div>

        <ContainerWithRef
          ref={rowContainerRef}
          className={`w-full flex flex-wrap gap-2 my-12 md:flex-nowrap md:overflow-x-scroll md:scrollbar-none scroll-smooth`}>
          <RowContainer products={products}/>
        </ContainerWithRef>

      </section>

      <MenuContainer/>
    </>
  );
};

export default MainContainer;