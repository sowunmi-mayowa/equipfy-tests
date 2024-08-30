import React, {useEffect} from 'react'
import { heroImg, logo1, logo2, lowHeroImg, stroke } from '../../assets'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import LazyLoad from '../LazyLoad'

const Hero = () => {
    
    
  return (
    <div className='relative'>
        <div className='py-4 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
            <div className='relative'>
                <h1 className='text-eBlack text-lg md:text-4xl lg:text-5xl xl:text-7xl font-semibold font-plex text-center relative'>Buy and sell used heavy equipment safely and securely in Africa.</h1> 
                <img src={stroke} alt="yellow stroke" className='hidden lg:block absolute top-12 left-72 xl:w-auto w-32 xl:top-16 xl:left-[400px] '/>
            </div>
            <div className='flex justify-center items-center'>
                <p className='text-[#747474] text-center text-sm md:text-base font-medium my-4 leading-7 lg:my-8 inline-block max-w-xl'>eQuipfy is the easiest, fastest, and cheapest way in Africa to rent, buy, sell, and manage your machines and heavy equipment fleet in real-time.</p>
            </div>
            <div className='flex justify-center items-center'>
                <Link to='/buy'>
                    <button className='font-aeonik text-sm capitalize font-medium px-4 py-2 text-white bg-eBlack flex flex-row-reverse gap-4 items-center'><FiArrowUpRight className='w-6 h-6 hover:scale-x-150 hover:scale-y-[1.5] hidden md:block'/>buy equiptment</button>
                </Link>
                <Link to='/sell'>
                    <button className='font-aeonik text-sm capitalize font-medium px-4 py-2 border-eBlack border-2 ml-2'>sell equipment</button>
                </Link>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <LazyLoad image={heroImg} placeholder={lowHeroImg}/>
            {/* <img src={heroImg} alt="equiptments" className='w-full h-full' loading='lazy'/> */}
        </div>
        <div className='bg-eYellow mt-8'>
            <div className='py-4 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl flex flex-col md:flex-row md:gap-20 items-center'>
                <div className=''>
                    <h3 className='text-xl md:text-xl lg:text-3xl xl:text-4xl font-plex font-bold lg:max-w-lg'>High-Quality used equipment from top manufacturers</h3>
                </div>
                <div className='lg:w-2/4'>
                    <img src={logo1} alt="companies logo" />
                    <img src={logo2} alt="companies logo" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero