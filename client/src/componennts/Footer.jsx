import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'
import { FaBars, FaWhatsapp } from "react-icons/fa"
import {PiPhoneThin} from "react-icons/pi"
import { logo } from '../assets'
import { Link } from 'react-router-dom'
import Hr from './Hr'

const Footer = () => {
  return (
    <div style={{background: "rgba(250, 250, 250, 0.50)"}}>
        <div className=' py-12 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
            <div className='flex gap-4  md:items-center justify-between flex-col md:flex-row md:flex-wrap md:gap-12 lg:gap-0 lg:flex-nowrap font-aeonik capitalize'>
                <div>
                    <img src={logo} alt="logo" className='w-4xl'/>
                </div>
               <div>
                    <ul>
                        <li className='text-eBlack font-bold text-base mb-4'>company</li>
                        <li className='text-[#747474] text-sm font-medium mb-2 '>about</li>
                        <li className='text-[#747474] text-sm font-medium'>help</li>
                    </ul>
               </div>
               <div>
                    <ul>
                        <li className='text-eBlack font-bold text-base mb-4'>buyer</li>
                        <li className='text-[#747474] text-sm font-medium mb-2'>explore equipments</li>
                        <li className='text-[#747474] text-sm font-medium '>loan</li>
                    </ul>
               </div>
               <div>
                    <ul>
                        <li className='text-eBlack font-bold text-base mb-4'>sellers</li>
                        <li className='text-[#747474] text-sm font-medium mb-2'>sell Equipments</li>
                        <li className='text-[#747474] text-sm font-medium'> features</li>
                    </ul> 
               </div>
               <div>
                    <ul>
                        <li className='text-eBlack font-bold text-base mb-4'>Contact us</li>
                        <li className='text-[#747474] text-sm font-medium mb-2'>
                        <div className='flex items-center font-medium gap-2 '>
                        < PiPhoneThin className='text-2xl'/> 
                        <details>
                            <summary className=' tracking-wider'>
                               Call us:  <span className='font-semibold'>+234-702-670-1092</span>
                            </summary>
                            <Link to="https://wa.me/+2347026701092" className='flex gap-2 items-center'> <FaWhatsapp /> +234-702-670-1092 </Link>
                            <a href="tel:+2347026701092" className='flex gap-2 items-center'> < PiPhoneThin className='text-2xl'/> +234-702-670-1092 </a>
                        </details>
                    </div>
                        </li>
                    </ul>
               </div>
            </div>
            <Hr />
            <div className='flex md:items-center justify-end flex-col gap-4 md:flex-row md:gap-[150px] lg:gap-[200px] xl:gap-[350px]'>
                <div>
                    <ul className='flex gap-2 md:gap-4 flex-col md:flex-row font-aeonik text-sm font-medium capitalize text-[#747474]'>
                        <li>privacy</li>
                        <li>terms and condition</li>
                        <li>cookies</li>
                    </ul>
                </div>
                <div className='flex gap-2'>
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                    <FiYoutube />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer