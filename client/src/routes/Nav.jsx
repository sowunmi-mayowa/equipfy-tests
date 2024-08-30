import React, { useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

const Nav = () => {
    const links = [
        {name:"Home", link: "/home"},
        {name:"About", link: "/about"},
        {name:"Contact", link: "/Contact"}
    ]

    const [isopen, setIsopen] = useState(false)

  return (
    <div className='flex flex-col md:flex-row md:justify-between px-8 py-4 bg-eYellow'>
        <div>
            Logo
        </div>
        <div>
            <div className='absolute top-4 cursor-pointer right-2 md:hidden font-bold text-2xl transition-all delay-1000 ease-in' onClick={() => setIsopen(!isopen)}>
                {
                    isopen ?( <FaWindowClose />)
                    : (<FiMenu />)
                }
                
            </div>
            <ul className={`mt-4 md:mt-0 absolute md:static bg-eYellow  w-full left-0 z-10 transition-all duration-500 ease-in ${isopen ? ' top-10' : '  top-[-490px]'}`}>
                {
                    links.map(link => (
                        <li className='md:inline-block md:ml-4 cursor-pointer px-4 py-6 md:p-0' key={link.name}>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Nav