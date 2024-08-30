import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { aboutHero, alex, bukharee, grace, heartIcon, kenny, mayowa, nannim, samson, stockIcon, triumph, userIcon } from '../assets'
import Newsletter from '../componennts/aboutcomponents/Newsletter'
import Reviews from '../componennts/aboutcomponents/Reviews'
import Footer from '../componennts/Footer'
import LazyLoad from '../componennts/LazyLoad'

const About = () => {
  return (
    <div>
      <div className='pt-8 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <p className='text-eYellow text-base font-semibold'>About Us</p>
          <h1 className='text-eBlack text-xl md:text-2xl lg:text-6xl text-center font-semibold font-plex md:leading-8'>What we do Differently</h1>
          <p className='max-w-lg text-center text-[#747474] font-aeonik text-base font-medium'>We focus on the details of everything we do. All to help businesses around the world focus on what’s most important to them. We take pride in this.</p>
          </div>
      </div>
      <div className='my-8 flex justify-center items-center'>
        <LazyLoad image={aboutHero} alt={"heroimg"} />
      </div>
      <div className='pt-8 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='text-eBlack font-aeonik text-xl md:text-[36px] md:leading-[40px] mb-2 font-bold max-w-3xl'>We offer Greater Selection, Neutral Brands of various Equipment</h1>
          <p className='text-gray-600 text-base font-medium '>Our shared values keep us connected and guide us as one team.</p>
        </div>
        <div className='my-8'>
          <div className='flex flex-col lg:flex-row items-baseline justify-center gap-10'>
            <div className='flex flex-col justify-center items-center text-center'>
              <img src={userIcon} alt="icon" className='w-14' />
              <h4 className='text-lg font-medium '>Care about our team</h4>
              <p className='text-base text-gray-500 font-aeonik text-center font-normal'>Increasing your fleet or building your construction company? Buy machines in pristine condition on equipfy at affordable prices.</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <img src={heartIcon} alt="icon" className='w-14' />
              <h4 className='text-lg font-medium '>Buy High-quality Equipment</h4>
              <p className='text-base text-gray-500 font-aeonik text-center font-normal'>Understand what matters to our employees. Give them what they need to do their best work and also we prioritize your team's well-being and development.</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <img src={stockIcon} alt="icon" className='w-14' />
              <h4 className='text-lg font-medium '>we take pride in what we do</h4>
              <p className='text-base text-gray-500 font-aeonik text-center font-normal'>Finding the right parts at the right timeand at the right place is vital for your business.eQuipfy is the best resource for new and used equipment parts..</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFB] mb-8">
        <div className='py-8 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-eBlack text-xl md:text-2xl lg:text-6xl text-center font-semibold font-plex md:leading-8 capitalize'>meet our team</h1>
          <p className='max-w-lg text-center text-[#747474] font-aeonik text-base font-medium'>Dedicated to ensuring our clients' satisfaction, is the friendly face that goes above and beyond to meet our clients' needs.</p>
        </div>
        <div className='flex gap-4 flex-wrap justify-center md:justify-between items-center mt-8'>
          <div className='bg-white p-4'>
            <div className='max-w-[250px] md:max-w-[180px] xl:max-w-[220px]'>
              <img src={alex} alt="team" className='w-full h-full' />
            </div>
            <div className='font-aeonik py-4 text-[#121212]'>
              <p className='text-base'>Alexander C. Ovabor</p>
              <p className='text-base'>Founder & CEO</p>
            </div>
            <div className='flex gap-2 text-xl text-[#98A2B3]'>
              <Link to="#"><FaTwitter /></Link>
              <Link to="#"><FaLinkedin /></Link>
            </div>
          </div>
          <div className='bg-white p-4'>
            <div className='max-w-[250px] md:max-w-[180px] xl:max-w-[220px]'>
              <img src={kenny} alt="team" className='w-full h-full' />
            </div>
            <div className='font-aeonik py-4 text-[#121212]'>
              <p className='text-base'>Kehinde Akinnawonu</p>
              <p className='text-base'>Product and Design</p>
            </div>
            <div className='flex gap-2 text-xl text-[#98A2B3]'>
              <Link to="#"><FaTwitter /></Link>
              <Link to="#"><FaLinkedin /></Link>
            </div>
          </div>
          <div className='bg-white p-4'>
            <div className='max-w-[250px] md:max-w-[180px] xl:max-w-[220px]'>
              <img src={triumph} alt="team" className='w-full h-full' />
            </div>
            <div className='font-aeonik py-4 text-[#121212]'>
              <p className='text-base'>Toluwani Adeyera</p>
              <p className='text-base'>Product and Design</p>
            </div>
            <div className='flex gap-2 text-xl text-[#98A2B3]'>
              <Link to="#"><FaTwitter /></Link>
              <Link to="#"><FaLinkedin /></Link>
            </div>
          </div>
          <div className='bg-white p-4'>
            <div className='max-w-[250px] md:max-w-[180px] xl:max-w-[220px]'>
              <img src={bukharee} alt="team" className='w-full h-full'/>
            </div>
            <div className='font-aeonik py-4 text-[#121212]'>
              <p className='text-base'>Bukharee A. Idris</p>
              <p className='text-base'>Product and Engineering</p>
            </div>
            <div className='flex gap-2 text-xl text-[#98A2B3]'>
              <Link to="#"><FaTwitter /></Link>
              <Link to="#"><FaLinkedin /></Link>
            </div>
          </div>
          <div className='bg-white p-4'>
            <div className='max-w-[250px] md:max-w-[180px] xl:max-w-[220px]'>
              <img src={mayowa} alt="team" className='w-full h-full'/>
            </div>
            <div className='font-aeonik py-4 text-[#121212]'>
              <p className='text-base'>Mayowa Sowunmi</p>
              <p className='text-base'>Product and Engineering</p>
            </div>
            <div className='flex gap-2 text-xl text-[#98A2B3]'>
              <Link to="#"><FaTwitter /></Link>
              <Link to="#"><FaLinkedin /></Link>
            </div>
          </div>
          <div className='bg-white p-4'>
            <div className='max-w-[250px] md:max-w-[180px] xl:max-w-[220px]'>
              <img src={samson} alt="team" className='w-full h-full'/>
            </div>
            <div className='font-aeonik py-4 text-[#121212]'>
              <p className='text-base'>Samson Adeyomoye</p>
              <p className='text-base'>GIS Analyst</p>
            </div>
            <div className='flex gap-2 text-xl text-[#98A2B3]'>
              <Link to="#"><FaTwitter /></Link>
              <Link to="#"><FaLinkedin /></Link>
            </div>
          </div>
          <div className='bg-white p-4'>
            <div className='max-w-[250px] md:max-w-[180px] xl:max-w-[220px]'>
              <img src={nannim} alt="team" className='w-full h-full'/>
            </div>
            <div className='font-aeonik py-4 text-[#121212]'>
              <p className='text-base'>Nannim Wuyep</p>
              <p className='text-base'>Brand Designer</p>
            </div>
            <div className='flex gap-2 text-xl text-[#98A2B3]'>
              <Link to="#"><FaTwitter /></Link>
              <Link to="#"><FaLinkedin /></Link>
            </div>
          </div>
          <div className='bg-white p-4'>
            <div className='max-w-[250px] md:max-w-[180px] xl:max-w-[220px]'>
              <img src={grace} alt="team" className='w-full h-full'/>
            </div>
            <div className='font-aeonik py-4 text-[#121212]'>
              <p className='text-base'>Grace Ochai</p>
              <p className='text-base'>Content Creator</p>
            </div>
            <div className='flex gap-2 text-xl text-[#98A2B3]'>
              <Link to="#"><FaTwitter /></Link>
              <Link to="#"><FaLinkedin /></Link>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default About