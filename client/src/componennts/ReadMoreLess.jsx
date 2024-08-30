import React from 'react'
import { useState } from 'react'
import "./read.css"
import { FaMinus, FaPlus } from 'react-icons/fa'

const readMoreLess = ({less, more}) => {
    
    const [collapse, setCollapse] = useState(false)

  return (
    <div  className='flex flex-col items-baseline justify-between w-full md:w-1/2 border-[#E4E7EC] border-b-2 pb-4 text-eBlack font-medium font-aeonik text-base md:text-lg cursor-pointer'>
        <div onClick={() => setCollapse(prev => !prev )} className="flex justify-between w-full items-center">
            <span>
                {less}
            </span>
            {
                collapse ? <FaMinus className='text-eYellow' />  : <FaPlus className='text-eYellow'/>
            }
        
        </div>
        <span className={`long-text ${collapse ? 'expanded pt-4' : ""}`} >{more} </span>
        {/* <div>
            <details>
                <summary> hello </summary>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tenetur voluptatibus veniam accusamus repellendus eveniet dolor. Asperiores placeat necessitatibus minus nostrum, ipsa pariatur eligendi vero maxime quia, a, similique reiciendis.
               
            </details>
        </div> */}
    </div>
  )
}

export default readMoreLess