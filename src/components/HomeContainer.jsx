import React from "react";
import delivery from "../images/delivery.png";
import homeBgPicture from '../images/heroBg.png';
import {initHomeData} from "../initData/initHomeData";

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 gap-x-2 md:grid-cols-2 h-[calc(100%-10px)] bg-primary p-3 md:p-6 mt-[60px]' id='home'>
      <div className='flex-1 flex flex-col items-start gap-5 mt-[20px] md:mt-[60px]'>
        <div className='flex items-center gap-2 bg-orange-100 px-4 py-1 rounded-md'>
          <p className='text-base text-orange-500 font-semibold'>Fast Delivery</p>
          <img src={delivery} alt="delivery" className="w-8 h-8 object-cover bg-white rounded-full p-1 drop-shadow-xl"/>
        </div>

        <p className='text-5xl leading-tight md:text-6xl md:leading-tight font-bold text-headingColor tracking-wide'>The best Delivery in
          <span className='text-orange-500'> Your City</span>
        </p>

        <p className='text-textColor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, blanditiis cum cupiditate, dignissimos dolore ducimus eaque error excepturi harum inventore libero magnam molestiae obcaecati repellat totam veniam voluptate? Aperiam, voluptas!</p>

        <button type='button' className='bg-orange-500 w-full md:w-40 px-4 py-2 rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all'>Order Now</button>
      </div>

      <div className='flex-1 relative flex justify-end'>
        <img src={homeBgPicture} alt="homeBg" className='md:object-contain'/>

        <div className='absolute left-0 top-16 w-full md:w-[340px] md:left-[3%] lg:left-[25%] md:top-[30%] flex flex-wrap gap-y-12 gap-x-2 justify-evenly'>
          {initHomeData.map(elem => (
            <div key={elem.id} className='bg-cardOverlay backdrop-blur-md p-2 rounded-xl flex flex-col gap-1 items-center justify-center shadow-xl'>
              <img src={elem.image} alt="iceCream" className='w-[100px] sm:w-[150px] -mt-[50px]'/>
              <p className='text-textColor font-semibold text-base sm:text-lg'> {elem.name}</p>
              <p className='text-sm text-lightestGray font-semibold'> {elem.category}</p>
              <p className='text-sm text-textColor font-semibold'> <span className='text-xs text-red-500'>$</span> {elem.price} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;