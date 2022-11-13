import React from 'react';
import {HomeContainer, RowContainer} from "./index";
import {motion} from 'framer-motion';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const MainContainer = () => {
    return (
        <>
          <HomeContainer/>

          <section className='w-full p-3 md:p-6'>
            <div className='w-full flex items-center justify-between'>
              <h2 className='text-2xl font-semibold capitalize relative
              before:absolute before:rounded-lg before:content before:w-[90px] before:h-1
              before:-bottom-2 before:left-0 before:bg-orange-500 transition-all
              '>
                Our fresh & healthy fruits
              </h2>

              <div className='hidden md:flex items-center gap-3'>
                <motion.button
                  whileTap={{scale: 0.6}}
                  className='flex items-center justify-center hover:shadow-lg transition-all cursor-pointer'
                >
                  <MdChevronLeft className='w-8 h-8 text-lg text-white bg-orange-500 rounded-lg hover:bg-orange-100 hover:text-orange-500 transition-all'/>
                </motion.button>
                <motion.button
                  whileTap={{scale: 0.6}}
                  className='flex items-center justify-center hover:shadow-lg duration-300 transition-all cursor-pointer'
                >
                  <MdChevronRight className='w-8 h-8 text-lg text-white bg-orange-500 rounded-lg hover:bg-orange-100 hover:text-orange-500 transition-all'/>
                </motion.button>
              </div>
            </div>

            <RowContainer flag={true}/>
          </section>
        </>
    );
};

export default MainContainer;