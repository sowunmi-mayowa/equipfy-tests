import React, {useRef, useEffect} from 'react'
import { next, prev } from '../../assets'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Reviews = () => {
  const sliderRef = useRef(null);
 
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true
  };

  const mobileSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true
  };
const handleNextClick = () => {
  if (sliderRef.current) {
    sliderRef.current.slickNext();
  }
};

const handlePrevClick = () => {
  if (sliderRef.current) {
    sliderRef.current.slickPrev();
  }
};
  return (
    <div className='mx-8  md:mx-12 xl:mx-auto xl:max-w-6xl'>
        <div className='flex items-center justify-between'>
            <div>
                <p className='text-xl md:text-2xl lg:tetx-[40px] font-plex font-semibold capitalize'>What Our Clients are Saying </p>
                <p className='text-[#747474] font-aeonik font-medium text-sm md:text-base max-w-[200px] md:max-w-lg inline-block md:block'>We have been working with clients around Africa</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <img src={prev} alt="" className='w-8 md:w-full' onClick={handlePrevClick}/>
              <img src={next} alt="" className='w-8 md:w-full' onClick={handleNextClick} />
            </div>
        </div>
        <div className='hidden mt-6 md:block'>
          <div className='items-center gap-4'>
            <Slider ref={sliderRef} {...settings}>
              <div className='bg-[#F7F7F6] px-8 py-6 rounded-[4px]'>
                <p className='font-aeonik text-base text-[#121212]'>I  am very pleased with the equipment i bought,  and look forward to buy more equipment.  I am pleased with equipfy  whole approach.”</p>
                <div className='flex gap-3 pt-4'>
                  <div className='w-[50px] h-[50px] rounded-full bg-eYellow'></div>
                  <div>
                    <p className='font-medium text-base text-[#121212] leading-[30px]'>— Peace Mattew</p>
                    <p className='text-sm text-[#747474]'>Hiring Manager, Robavo</p>
                  </div>
                </div>
              </div>
              <div className='bg-[#F7F7F6] px-8 py-6 rounded-[4px]'>
                <p className='font-aeonik text-base text-[#121212]'>I  am very pleased with the equipment i bought,  and look forward to buy more equipment.  I am pleased with equipfy  whole approach.”</p>
                <div className='flex gap-3 pt-4'>
                  <div className='w-[50px] h-[50px] rounded-full bg-eYellow'></div>
                  <div>
                    <p className='font-medium text-base text-[#121212] leading-[30px]'>— Peace Mattew</p>
                    <p className='text-sm text-[#747474]'>Hiring Manager, Robavo</p>
                  </div>
                </div>
              </div>
              <div className='bg-[#F7F7F6] px-8 py-6 rounded-[4px]'>
                <p className='font-aeonik text-base text-[#121212]'>I  am very pleased with the equipment i bought,  and look forward to buy more equipment.  I am pleased with equipfy  whole approach.”</p>
                <div className='flex gap-3 pt-4'>
                  <div className='w-[50px] h-[50px] rounded-full bg-eYellow'></div>
                  <div>
                    <p className='font-medium text-base text-[#121212] leading-[30px]'>— Peace Mattew</p>
                    <p className='text-sm text-[#747474]'>Hiring Manager, Robavo</p>
                  </div>
                </div>
              </div>
              <div className='bg-[#F7F7F6] px-8 py-6 rounded-[4px]'>
                <p className='font-aeonik text-base text-[#121212]'>I  am very pleased with the equipment i bought,  and look forward to buy more equipment.  I am pleased with equipfy  whole approach.”</p>
                <div className='flex gap-3 pt-4'>
                  <div className='w-[50px] h-[50px] rounded-full bg-eYellow'></div>
                  <div>
                    <p className='font-medium text-base text-[#121212] leading-[30px]'>— Peace Mattew</p>
                    <p className='text-sm text-[#747474]'>Hiring Manager, Robavo</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
         <div className='mt-4 md:hidden'> {/*mobile reviews */}
         <Slider ref={sliderRef} {...mobileSettings}> 
         <div className='bg-[#F7F7F6] px-8 py-6 rounded-[4px]'>
                <p className='font-aeonik text-base text-[#121212]'>I  am very pleased with the equipment i bought,  and look forward to buy more equipment.  I am pleased with equipfy  whole approach.”</p>
                <div className='flex gap-3 pt-4'>
                  <div className='w-[50px] h-[50px] rounded-full bg-eYellow'></div>
                  <div>
                    <p className='font-medium text-base text-[#121212] leading-[30px]'>— Peace Mattew</p>
                    <p className='text-sm text-[#747474]'>Hiring Manager, Robavo</p>
                  </div>
                </div>
              </div>
              <div className='bg-[#F7F7F6] px-8 py-6 rounded-[4px]'>
                <p className='font-aeonik text-base text-[#121212]'>I  am very pleased with the equipment i bought,  and look forward to buy more equipment.  I am pleased with equipfy  whole approach.”</p>
                <div className='flex gap-3 pt-4'>
                  <div className='w-[50px] h-[50px] rounded-full bg-eYellow'></div>
                  <div>
                    <p className='font-medium text-base text-[#121212] leading-[30px]'>— Peace Mattew</p>
                    <p className='text-sm text-[#747474]'>Hiring Manager, Robavo</p>
                  </div>
                </div>
              </div>
              <div className='bg-[#F7F7F6] px-8 py-6 rounded-[4px]'>
                <p className='font-aeonik text-base text-[#121212]'>I  am very pleased with the equipment i bought,  and look forward to buy more equipment.  I am pleased with equipfy  whole approach.”</p>
                <div className='flex gap-3 pt-4'>
                  <div className='w-[50px] h-[50px] rounded-full bg-eYellow'></div>
                  <div>
                    <p className='font-medium text-base text-[#121212] leading-[30px]'>— Peace Mattew</p>
                    <p className='text-sm text-[#747474]'>Hiring Manager, Robavo</p>
                  </div>
                </div>
              </div>
              <div className='bg-[#F7F7F6] px-8 py-6 rounded-[4px]'>
                <p className='font-aeonik text-base text-[#121212]'>I  am very pleased with the equipment i bought,  and look forward to buy more equipment.  I am pleased with equipfy  whole approach.”</p>
                <div className='flex gap-3 pt-4'>
                  <div className='w-[50px] h-[50px] rounded-full bg-eYellow'></div>
                  <div>
                    <p className='font-medium text-base text-[#121212] leading-[30px]'>— Peace Mattew</p>
                    <p className='text-sm text-[#747474]'>Hiring Manager, Robavo</p>
                  </div>
                </div>
              </div>
         </Slider>
        </div>
    </div>
  )
}

export default Reviews