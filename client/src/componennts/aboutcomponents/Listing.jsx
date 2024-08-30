import React, {useEffect} from 'react'
import { FiArrowUpRight, FiMap } from 'react-icons/fi'
import { FaRegCalendarCheck } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi"
import { listImg1, listImg2 } from '../../assets';
import Hr from '../Hr';

const Listing = () => {
  return (
    <div className='mx-8 overflow-x-auto  md:mx-12 xl:mx-auto xl:max-w-6xl'>
        <div className='flex justify-between'>
            <div className='mb-4'>
                <h3 className='font-plex text-xl md:text-2xl lg:text-[40px] capitalize font-semibold lg:mb-4'>Recent listing</h3>
                <p className='text-[#747474] font-aeonik font-medium text-sm md:text-base max-w-[200px] md:max-w-lg inline-block md:block'>Check out our recent equipment listing below</p>
            </div>
            <div className='hidden md:block'>
                <button className='flex items-center gap-2 px-4 py-2 text-sm text-white capitalize bg-eBlack font-aeonik'>see all <FiArrowUpRight className='text-xl' /> </button>
            </div>
        </div>
            <div className='flex flex-col gap-5 mt-12 lg:flex-row'>
                <div className='font-aeonik bg-[#F7F7F6] py-3 px-6 md:py-9 md:px-16 text-center'>
                    <p className='text-lg font-bold md:text-3xl '>2016 Takeuchi TL10R</p>
                    <p className='py-4 text-base font-bold md:text-xl'>N 8,750,999</p>
                    <div className='flex justify-center gap-2 pb-4 md:gap-4'>
                        <div className='flex gap-[2px] md:gap-4 items-center'>
                            <HiOutlineLocationMarker className='text-lg lg:text-2xl text-eYellow' /> <span className='text-base md:text-xl font-medium text-[#313131]'>Lagos, NIgeria.</span>
                        </div>
                        <div className='flex gap-[2px] md:gap-4 items-center'>
                            <FaRegCalendarCheck className='text-lg lg:text-2xl text-eYellow'/> <span className='text-base md:text-xl font-medium text-[#313131]'>Available</span>
                        </div>
                    </div>
                    <div align="center">
                        <img src={listImg1} alt="2016 Takeuchi TL10R" />
                    </div>
                    <div className='flex justify-center w-full'>
                        <button className='flex items-center justify-center w-full gap-2 px-4 py-2 mt-6 text-sm text-white capitalize bg-eBlack font-aeonik md:w-3/4 lg:w-full'>see all <FiArrowUpRight className='text-xl' /> </button>
                    </div>
                </div>
                <div>
                    <div className='flex gap-4 p-4 bg-[#F7F7F6]'>
                        <div>
                            <img src={listImg2} className="object-cover h-full" alt="2016 Takeuchi TL10R" />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <p className='text-base font-bold font-aeonik md:text-md lg:text-xl'>2016 Takeuchi TL10R</p>
                                <p className='py-2 text-sm font-bold md:py-6 font-aeonik lg:text-base'>8,750,999</p>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex gap-[4px] items-center'>
                                        <HiOutlineLocationMarker className='text-xl text-eYellow' /> <span className='text-sm font-medium text-[#313131]'>Lagos, NIgeria.</span>
                                    </div>
                                    <div className='flex gap-[4px] items-center'>
                                        <FaRegCalendarCheck className='sm:text-xl text-eYellow'/> <span className='text-sm font-medium text-[#313131]'>Available</span>
                                    </div>
                                </div>
                            </div>
                            <button className='mt-2 border-2 border-eBlack px-4 py-2 capitalize font-aeonik text-[10px] sm:text-sm lg:text-base flex gap-1 sm:gap-2 items-center justify-center font-bold'>Buy Now<FiArrowUpRight className='text-lg sm:text-xl' /> </button>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-4 bg-[#F7F7F6] p-4'>
                        <div>
                            <img src={listImg2} className="object-cover h-full" alt="2016 Takeuchi TL10R" />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <p className='text-base font-bold font-aeonik md:text-md lg:text-xl'>2016 Takeuchi TL10R</p>
                                <p className='py-2 text-sm font-bold md:py-6 font-aeonik lg:text-base'>8,750,999</p>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex gap-[4px] items-center'>
                                        <HiOutlineLocationMarker className='text-xl text-eYellow' /> <span className='text-sm font-medium text-[#313131]'>Lagos, NIgeria.</span>
                                    </div>
                                    <div className='flex gap-[4px] items-center'>
                                        <FaRegCalendarCheck className='sm:text-xl text-eYellow'/> <span className='text-sm font-medium text-[#313131]'>Available</span>
                                    </div>
                                </div>
                            </div>
                            <button className='mt-2 border-2 border-eBlack px-4 py-2 capitalize font-aeonik text-[10px] sm:text-sm lg:text-base flex gap-1 sm:gap-2 items-center justify-center font-bold'>Buy Now<FiArrowUpRight className='text-lg sm:text-xl' /> </button>
                        </div>
                    </div>
                </div>
            </div>
            <Hr />
    </div>
  )
}

export default Listing