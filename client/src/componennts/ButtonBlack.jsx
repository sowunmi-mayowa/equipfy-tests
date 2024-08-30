import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi'

const ButtonBlack = ({link, check, name}) => {
  return (
    <Link to={link}>
        <button className='font-aeonik text-sm capitalize font-medium px-4 py-2 text-white bg-eBlack flex flex-row-reverse gap-4 items-center'><FiArrowUpRight className={`w-6 h-6 hover:scale-x-150 hover:scale-y-[1.5] hidden md:block ${check ? "hidden" : "block"}`}/>{name}</button>
    </Link>
  )
}

export default ButtonBlack