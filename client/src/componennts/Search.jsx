import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Search = ({ onSearch, onHoursResult, onPriceResult, onError }) => {
  const [text, setText] = useState("")
  const [error, setError] = useState()
  const [sliderValue, setSliderValue] = useState([0, 50000])
  const [priceValue, setPriceValue] = useState([0, 1000000])
  const [years, setYears] = useState([])
  const navigate = useNavigate()

  const categories = [
    { alt: 'Cold Planner', category: 'cold-planner'},
    { alt: 'agricultural equipment', category: 'agricultural-equipment'},
    { alt: 'aggregate Equipment', category: 'aggregate'},
    { alt: 'aticulated Equipment', category: 'aticulated'},
    { alt: 'bulldozers', category: 'bulldozers'},
    { alt: 'backhoes', category: 'backhoes'},
    { alt: 'compressors', category: 'compressors'},
    { alt: 'compact truck loaders', category: 'compact-truck-loaders'},
    { alt: 'cranes', category: 'cranes'},
    { alt: 'drills', category: 'drills'},
    { alt: 'bucket truck', category: 'bucket truck'},
    { alt: 'Dump Trailers', category: 'Dump Trailers'},
    { alt: 'haul truck', category: 'haul truck'},
    { alt: 'long trailers', category: 'long trailers'},
    { alt: 'pavers', category: 'pavers'},
    { alt: 'lifts', category: 'lifts'},
    { alt: 'excavators', category: 'excavators'}
    
]
  let formattedCat = '';
  const handleCategoryChange = (event) => {
    const selectedCat = event.target.value
    formattedCat = selectedCat.replace(/\s+/g, '-');
    navigate(`/buy/equipments/${formattedCat}`)
  }
  

  
  const search = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch(`http://localhost:3000/equipments/byName/${text}`)
  
      if(!response.ok){
        onError("Equipment Not Found")
      }
      const data = await response.json()
      onSearch(data);
    }
    catch(error){
      //console.error('Error searching equipment:', error.message);
      onError(error.message)
    }
  }
 
  const handleSliderChange = (value) => {
    setSliderValue(value)
  }
  const handlePriceChange = (value) => {
    setPriceValue(value)
  }
  
  useEffect(() => {
    const fetchByPrice = async() => {
      try{
        const response = await fetch(`http://localhost:3000/equipments/byPrice/${priceValue[0]}/${priceValue[1]}`)

        const data = await response.json()
        onPriceResult(data)
      }

      catch(error){
        onError("Some error occured")
        console.log(error.message)
      }
    }
    fetchByPrice()
  }, [priceValue[0], priceValue[1]])
  

  useEffect(() => {
    const fetchByHours = async () => {
      try{
        const response = await fetch(`http://localhost:3000/equipments/byHours/${sliderValue[0]}/${sliderValue[1]}`)
        
        const data = await response.json()
        onHoursResult(data)
      }
      catch(error){
       onError(error)
       console.log(error.message)
      }
    }
    
    fetchByHours()

    const years = []
    for (let i = 1990; i < 2025; i++) {
      years.push(i)
    }
    setYears(years)
  }, [sliderValue[0], sliderValue[1]])


  return (
    <div>
          <div className='relative border-[1px] border-black flex items-center h-10'>
            <FiSearch className='ml-4' />
            <form onSubmit={search}>
              <input type="text" name="search" id="search"  className='w-full outline-none b placeholder:text-black placeholder:text-md placeholder:font-aeonik' placeholder='  Search Equiptment' onChange={(e) => setText(e.target.value)}/>
            </form>
          </div>
          <div id='dropdowns' className='mt-4 flex gap-8  lg:gap-[34px] flex-wrap'>
            <select name="category" id="category" className='outline-none border-[1px] border-black py-2 px-6 w-[130px] md:w-[150px]' onChange={handleCategoryChange}>
              <option className='text-[#121212] font-aeonik text-sm lg:text-base'>Category</option>
              {
                categories.map(({alt, category}) => (
                    <option key={category} className='text-[#121212] font-aeonik text-sm lg:text-base capitalize' value={alt}>{alt}</option>
                ))
              }
            </select>
            <details className='flex'>
              <summary className='outline-none border-[1px] border-black py-2 px-6 w-[130px] md:w-[150px]' >Hours</summary>
              <div>
                <Slider range className="text-eYellow"
                  min={10}
                  max={50000}
                  defaultValue={[10, 50000]}
                  reverse={false}
                  allowCross={false}
                  onChange={handleSliderChange}
                />
              </div>
            </details>
            <details className='flex'>
              <summary className='outline-none border-[1px] border-black py-2 px-6 w-[130px] md:w-[150px]' >Price</summary>
              <div>
                <Slider range className="text-eYellow"
                  min={10}
                  max={50000}
                  defaultValue={[10, 50000]}
                  reverse={false}
                  allowCross={false}
                  onChange={handlePriceChange}
                />
              </div>
            </details>
            <select name="category" id="category" className='outline-none border-[1px] border-black py-2 px-6 w-[130px] md:w-[150px]'>
              <option className='text-[#121212] font-aeonik text-sm lg:text-base'>Make</option>
              <option value="cat1" className='text-[#121212] font-aeonik text-sm lg:text-base'>Agco</option>
              <option value="cat2" className='text-[#121212] font-aeonik text-sm lg:text-base'>Airman</option>
              <option value="cat3" className='text-[#121212] font-aeonik text-sm lg:text-base'>Alitec</option>
              <option value="cat4" className='text-[#121212] font-aeonik text-sm lg:text-base'>Allmand</option>
              <option value="cat4" className='text-[#121212] font-aeonik text-sm lg:text-base'>Gooseneck</option>
              <option value="cat4" className='text-[#121212] font-aeonik text-sm lg:text-base'>Gradall</option>
              <option value="cat4" className='text-[#121212] font-aeonik text-sm lg:text-base'>Halla</option>
              <option value="cat4" className='text-[#121212] font-aeonik text-sm lg:text-base'>Hamm</option>
              <option value="cat4" className='text-[#121212] font-aeonik text-sm lg:text-base'>Hallo</option>
              <option value="cat4" className='text-[#121212] font-aeonik text-sm lg:text-base'>Peterson</option>
              <option value="cat4" className='text-[#121212] font-aeonik text-sm lg:text-base'>Pioneer</option>
              <option value="cat4" className='text-[#121212] font-aeonik text-sm lg:text-base'>Pj</option>
              <option value="cat4" className='text-[#121212] font-aeonik text-sm lg:text-base'>Polaris</option>
            </select>
            <select name="category" id="category" className='outline-none border-[1px] border-black py-2 px-6 w-[130px] md:w-[150px]'>
            <option value="year">year</option>
              {
                years.map(year => (
                  <option key={year} > {year} </option>
                ))
              }
            </select>
          </div>
        </div>
  
  )
}

export default Search