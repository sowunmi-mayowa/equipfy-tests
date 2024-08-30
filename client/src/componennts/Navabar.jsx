import React, { useState, useEffect } from 'react'
import { logo } from '../assets'
import {PiPhoneThin} from "react-icons/pi"
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaWhatsapp } from "react-icons/fa"
import { GrFormClose } from "react-icons/gr"

const Navabar = () => {
    const links = [
        {name: "Home", link: "/"},
        {name: "About", link: "/about"},
        {name: "Buy", link: "/buy"},
        {name: "Sell", link: "/sell"},
        {name: "Loan", link: "/loan"}
    ]

    const [isopen, setIsopen] = useState(false);
    const closeMenu = () => {
        setIsopen(false)
    }
    

  return (
    <div className='py-4 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
        <div className='flex flex-col md:justify-between md:items-center md:flex-row'>
            <div className='max-w-[130px] md:max-w-none z-20'>
                <Link to='/'> 
                    <img src={logo} alt="logo" className='w-full h-full md:w-3/4 md:lg:w-full' />
                </Link>
            </div>
            <div className='absolute text-2xl font-bold transition-all ease-in delay-1000 cursor-pointer top-4 right-8 lg:hidden' onClick={() => setIsopen(!isopen)}>
                {
                    isopen ?( <GrFormClose />)
                    : (<FaBars/>)
                }
                
            </div>
            <div className={`font-aeonik lg:flex gap-[100px] items-center justify-end bg-eBlack lg:bg-inherit text-white lg:text-inherit absolute lg:static w-full z-10 left-0 transition-all ease-in duration-500 ${isopen ? "top-14" : "top-[-300px]"} pb-4 lg:pb-0`}>
                <div className='flex flex-col gap-4 lg:gap-24 lg:flex-row'>
                    <ul className='pl-6 lg:p-0'>
                        {
                            links.map(link => (
                                <li key={link.name}  className="pt-6 mx-2 lg:py-0 lg:inline-block">
                                    <NavLink to={link.link} className='capitalize ' onClick={closeMenu}>{link.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                <div className='flex items-center gap-8 pl-8 lg:pl-0'>
                    <div className='flex items-center gap-2 font-medium '>
                        < PiPhoneThin className='text-2xl'/> 
                        <details>
                            <summary className='tracking-wider '>
                               Call us:  <span className='font-semibold'>+234-702-670-1092</span>
                            </summary>
                            <Link to="https://wa.me/+2347026701092" className='flex items-center gap-2'> <FaWhatsapp /> +234-702-670-1092 </Link>
                            <a href="tel:+2347026701092" className='flex items-center gap-2'> < PiPhoneThin className='text-2xl'/> +234-702-670-1092 </a>
                        </details>
                    </div>
                    <a href="/buy">
                     <button className='text-sm capitalize font-medium border-[1px] border-black p-2 hidden lg:block'>buy equiptment</button>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navabar