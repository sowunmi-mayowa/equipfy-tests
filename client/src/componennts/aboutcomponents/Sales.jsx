import React, {useEffect} from 'react'
import { dollarIcon, folderIcon, shieldIcon } from '../../assets'
import Hr from '../Hr'

const Sales = () => {

return (
    <div className='mx-8  pt-14 md:mx-12 xl:mx-auto xl:max-w-6xl'>
        <div>
            {/* for buyers */}
            <h3 className='font-plex text-xl md:text-2xl lg:text-[40px] capitalize font-semibold lg:mb-4'>for buyers</h3>
            <p className='text-[#747474] font-aeonik font-medium text-sm md:text-base max-w-[200px] md:max-w-lg inline-block md:block'>Benefit of buying an equipment from us</p>
            <div className='flex flex-wrap items-center justify-between gap-4 my-8 lg:flex-nowrap lg:gap-10 '>
                <div className='bg-[#F7F7F6] p-4 h-[170px] w-full lg:w-[387px]'>
                    <div className='flex gap-6'>
                        <img src={dollarIcon} alt="" />
                        <p className='text-xl font-semibold font-plex '>Generating Revenue</p>
                    </div>
                    <div className='py-4'>
                        <p className='font-aeonik text-base font-normal text-[#747474]'>Selling equipment on our platform can directly contribute to the company's revenue stream</p>
                    </div>
                </div>
                <div className='bg-[#F7F7F6] p-4 h-[170px] w-full lg:w-[387px]'>
                    <div className='flex gap-6'>
                        <img src={folderIcon} alt="" />
                        <p className='text-xl font-semibold font-plex '>Cost Recovery</p>
                    </div>
                    <div className='py-4'>
                        <p className='font-aeonik text-base font-normal text-[#747474]'>Selling equipment on our platform will help recover some of the initial investment</p>
                    </div>
                </div>
                <div className='bg-[#F7F7F6] p-4 h-[170px] w-full lg:w-[387px]'>
                    <div className='flex gap-6'>
                        <img src={shieldIcon} alt="" />
                        <p className='text-xl font-semibold font-plex '>Safe and Secure</p>
                    </div>
                    <div className='py-4'>
                        <p className='font-aeonik text-base font-normal text-[#747474]'>Payments are guaranteed by eQuipfy and your machines will be protected by insurance.</p>
                    </div>
                </div>
            </div>
            {/* FOR SELLLERS */}
            <h3 className='font-plex text-xl md:text-2xl lg:text-[40px] capitalize font-semibold lg:mb-4'>for sellers</h3>
            <p className='text-[#747474] font-aeonik font-medium text-sm md:text-base max-w-[200px] md:max-w-lg inline-block md:bloc'>Benefit of buying an equipment from us</p>
            <div className='flex flex-wrap items-center justify-between gap-4 my-8 mb-20 lg:flex-nowrap lg:gap-10'>
                <div className='bg-[#F7F7F6] p-4 h-[170px] w-full lg:w-[387px]'>
                    <div className='flex gap-6'>
                        <img src={dollarIcon} alt="" />
                        <p className='text-xl font-semibold font-plex '>Generating Revenue</p>
                    </div>
                    <div className='py-4'>
                        <p className='font-aeonik text-base font-normal text-[#747474]'>Selling equipment on our platform can directly contribute to the company's revenue stream</p>
                    </div>
                </div>
                <div className='bg-[#F7F7F6] p-4 h-[170px] w-full lg:w-[387px]'>
                    <div className='flex gap-6'>
                        <img src={folderIcon} alt="" />
                        <p className='text-xl font-semibold font-plex '>Cost Recovery</p>
                    </div>
                    <div className='py-4'>
                        <p className='font-aeonik text-base font-normal text-[#747474]'>Selling equipment on our platform will help recover some of the initial investment</p>
                    </div>
                </div>
                <div className='bg-[#F7F7F6] p-4 h-[170px] w-full lg:w-[387px]'>
                    <div className='flex gap-6'>
                        <img src={shieldIcon} alt="" />
                        <p className='text-xl font-semibold font-plex '>Safe and Secure</p>
                    </div>
                    <div className='py-4'>
                        <p className='font-aeonik text-base font-normal text-[#747474]'>Payments are guaranteed by eQuipfy and your machines will be protected by insurance.</p>
                    </div>
                </div>
            </div>
            <Hr />
        </div>
    </div>
  )
}

export default Sales