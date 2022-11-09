import React from 'react';
import delivery from '../images/delivery.png';

const MainContainer = () => {
    return (
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
          <div className='flex-1 flex flex-col items-start justify-center gap-5'>
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

          <div className='flex-1 p-4'>

          </div>
        </div>
    );
};

export default MainContainer;