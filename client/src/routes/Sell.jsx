import React, {useState} from 'react'
import { sellHeroImg, sideSell } from '../assets'
import ButtonBlack from '../componennts/ButtonBlack'
import ReadMoreLess from '../componennts/ReadMoreLess'
import { logo2, logo1, dollarIcon } from '../assets'
import Reviews from '../componennts/aboutcomponents/Reviews'
import NewsLetter from '../componennts/aboutcomponents/Newsletter'
import Footer from '../componennts/Footer'
import LazyLoad from '../componennts/LazyLoad'
import SellForm from './SellForm'
import { FiArrowUpRight } from 'react-icons/fi'

const Sell = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div>
      <div className='pt-8 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-eBlack text-xl md:text-2xl lg:text-6xl text-center font-semibold font-plex md:leading-8'>Let us do the heavy lifting.</h1>
          <p className='max-w-lg text-center text-[#747474] font-aeonik text-base font-medium'>eQuipfy is the easiest, fastest, and cheapest way in Africa to rent, buy, sell, and manage your machines and heavy equipment fleet in real-time.</p>
          <button  onClick={openPopup} className='font-aeonik text-sm capitalize font-medium px-4 py-2 text-white bg-eBlack flex flex-row-reverse gap-4 items-center'><FiArrowUpRight className='w-6 h-6 hover:scale-x-150 hover:scale-y-[1.5] hidden md:block'/>sell equiptment</button>
          {isPopupVisible && <SellForm onClose={closePopup} />}
        </div>
      </div>
      <div className='my-8 flex justify-center items-center'>
        <LazyLoad image={sellHeroImg} alt={"heroimg"} />
      </div>
      <div className='bg-eYellow mt-8'>
        <div className='pt-8 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
        <div className='flex flex-col md:flex-row md:gap-20 items-center'>
            <div className=''>
                <h3 className='text-xl md:text-xl lg:text-3xl xl:text-4xl font-plex font-bold lg:max-w-lg'>We sell High-Quality Brands from top manufacturers</h3>
            </div>
            <div className='lg:w-2/4'>
                <img src={logo1} alt="companies logo" />
                <img src={logo2} alt="companies logo" />
            </div>
         </div>
         </div>
      </div>
      <div className='pt-8 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
       <div>
        <h3 className='text-eBlack font-plex text-xl md:text-2xl lg:text-4xl font-semibold capitalize mb-4 '>for sellers</h3>
        <p className='max-w-2xl text-left text-[#747474] font-aeonik font-medium text-sm  md:text-xl'>Selling your equipment in our company involves a series of steps to ensure a smooth and legally compliant transaction. Here's a general outline of the steps to follow:</p>
        <div className='my-10'>
          <div className='flex flex-col lg:flex-row items-top justify-center'>
            <div>
              <div className='flex gap-2 flex-col md:flex-row justify-between items-center mb-4 pt-6'>
                <div className='bg-[#F7F7F6] p-4 h-[150px] '>
                  <div className='flex gap-6'>
                      <img src={dollarIcon} alt="" />
                      <p className='font-plex text-sm font-semibold '>Assessment and Valuation:</p>
                  </div>
                  <div className='py-4'>
                      <p className='font-aeonik text-sm font-normal text-[#747474]'>● Begin by assessing the condition and value of the equipment you intend to sell. <br />● Consider hiring a professional a</p>
                  </div>
                </div>
                <div className='bg-[#F7F7F6] p-4 h-[150px] '>
                  <div className='flex gap-6'>
                      <img src={dollarIcon} alt="" />
                      <p className='font-plex text-sm font-semibold '>Ownership Verification:</p>
                  </div>
                  <div className='py-4'>
                      <p className='font-aeonik text-sm font-normal text-[#747474]'>Ensure you have clear ownership documentation for the equipment, such as purchase receipts, titles, or registration certificates.</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-2 flex-col md:flex-row justify-between'>
                <div className='bg-[#F7F7F6] p-4 h-[150px] '>
                  <div className='flex gap-6'>
                      <img src={dollarIcon} alt="" />
                      <p className='font-plex text-sm font-semibold '>Negotiation</p>
                  </div>
                  <div className='py-4'>
                      <p className='font-aeonik text-sm font-normal text-[#747474]'>When you find a buyer, negotiate the terms of the sale, including the price, payment method, and delivery arrangements.</p>
                  </div>
                </div>
                <div className='bg-[#F7F7F6] p-4 h-[150px] '>
                  <div className='flex gap-6'>
                      <img src={dollarIcon} alt="" />
                      <p className='font-plex text-sm font-semibold '>Payment</p>
                  </div>
                  <div className='py-4'>
                      <p className='font-aeonik text-sm font-normal text-[#747474]'>Selling equipment on our platform can directly contribute to the company's revenue streamEnsure that you receive payment for the equipment as agreed upon in the sale agreement.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='max-w-3xl basis-3/4'>
              <LazyLoad image={sideSell} alt={"sideSell"} className='w-full h-full'  />
            </div>
          </div>
        </div>
       </div>
    </div>
    <Reviews />
    <div className='pt-16 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
      <div>
        <h3 className='font-plex text-center text-xl md:text-2xl lg:text-4xl font-semibold'>Frequently asked questions</h3>
        <p className='text-[#747474] text-base lg:text-xl text-center font-aeonik mt-2 mb-4 font-normal'>Everything you need to know about the product and billing.</p>
        <div >
          <div className='flex justify-center items-center flex-col gap-8 mt-12'>
            <ReadMoreLess less={"How does your website works"} more={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur voluptatum sapiente sequi in, deserunt ipsam repellendus perspiciatis consectetur doloremque sint quia ea eligendi, officia quasi ipsa aperiam esse fugiat iure"}/> 
            <ReadMoreLess less={"How can i sell my Equipment"} more={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ducimus officia vel, iure velit expedita nihil quo, eveniet totam a inventore nobis similique numquam? Explicabo vel sed labore ad."} /> 
            <ReadMoreLess less={"Do you deliver nationwide"} more={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ducimus officia vel, iure velit expedita nihil quo, eveniet totam a inventore nobis similique numquam? Explicabo vel sed labore ad."} />
            <ReadMoreLess less={"Do you do heavy lifting nationwide"} more={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ducimus officia vel, iure velit expedita nihil quo, eveniet totam a inventore nobis similique numquam? Explicabo vel sed labore ad."} /> 
            <ReadMoreLess less={"How can i buy an Equipment"} more={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ducimus officia vel, iure velit expedita nihil quo, eveniet totam a inventore nobis similique numquam? Explicabo vel sed labore ad."} />
          </div>
        </div>
      </div>
      <div className='bg-gray-50 mt-16 p-4 rounded-md flex flex-col gap-4 items-center justify-center'>
        <p className='text-eBlack text-center font-aeonik text-xl font-medium'>Still have questions?</p>
        <p className='text-center text-gray-500 font-aeonik text-base py-2 max-w-sm'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <ButtonBlack name={"get in touch"} className="pb-4" />
      </div>
    </div>
    <NewsLetter />
    <Footer />
    </div>
  )
}

export default Sell