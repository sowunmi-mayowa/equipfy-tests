import React from 'react'
import Newsletter from '../componennts/aboutcomponents/Newsletter'
import Footer from '../componennts/Footer'
import Hr from '../componennts/Hr'
import { buyImg1, buyImg10, buyImg11, buyImg12, buyImg2, buyImg3, buyImg4, buyImg5, buyImg6, buyImg7, buyImg8, buyImg9 } from '../assets/index';
import BuyCard from '../componennts/BuyCard'
import Search from '../componennts/Search'
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../componennts/Loader';

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers",
  "Sokoto", "Taraba", "Yobe", "Zamfara"
];

const Buy = () => {

  const [categoryData, setCategoryData] = useState([]);
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  const [price, setPrice] = useState([])
  const [hours, setHours] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchEquipments = async () => {
      try{
        const response = await fetch("http://localhost:3000/equipments")
        if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json()
      setCategoryData(data)
      }
      catch(error){
        setError(error.message)
      }
      finally{
        setLoading(false)
      }
    }
    fetchEquipments()
  }, [])

  let result
  const isLoading = loading || hours.length === 0 && price.length === 0 && searchResults.length === 0;
  
    if(isLoading){
      result = (
        <div className='flex items-center justify-center w-full'>
          <Loader />
        </div>
      )
    }else{
      result = categoryData.map(data => (
        <div key={data._id}>
          <BuyCard name={data.name}
            price={`$${data.price}`}
            location={nigerianStates[Math.floor(Math.random() * nigerianStates.length)] + ", NIgeria"}
            hours={data.hours}
            img1={data.imageUrls[1]} img2={data.imageUrls[2]}
            img3={data.imageUrls[3]} img5={data.imageUrls[5]}
            nairaPrice={"#"+data.price * 855}
            />
        </div>
    ))
 
  }
    if(price.length > 0){
      result = price.map(data => (
        <div key={data._id}>
           <BuyCard name={data.name}
            price={`$${data.price}`}
            location={nigerianStates[Math.floor(Math.random() * nigerianStates.length)] + ", NIgeria"}
            hours={data.hours}
            img1={data.imageUrls[1]} img2={data.imageUrls[2]}
            img3={data.imageUrls[3]} img5={data.imageUrls[5]}
            nairaPrice={"#"+data.price * 855}
            />
        </div>
      ))
    }
    if (hours.length > 0 ){
      result = hours.map(data => (
        <div key={data._id}>
           <BuyCard name={data.name}
            price={`$${data.price}`}
            location={nigerianStates[Math.floor(Math.random() * nigerianStates.length)] + ", NIgeria"}
            hours={data.hours}
            img1={data.imageUrls[1]} img2={data.imageUrls[2]}
            img3={data.imageUrls[3]} img5={data.imageUrls[5]}
            nairaPrice={"#"+data.price * 855}
            />
        </div>
      ))
    }
 
      
     if(searchResults.length > 0){
        result = searchResults.map(data => (
          <div key={data._id}>
             <BuyCard name={data.name}
              price={`$${data.price}`}
              location={nigerianStates[Math.floor(Math.random() * nigerianStates.length)] + ", NIgeria"}
              hours={data.hours}
              img1={data.imageUrls[1]} img2={data.imageUrls[2]}
              img3={data.imageUrls[3]} img5={data.imageUrls[5]}
              nairaPrice={"#"+data.price * 855}
              />
          </div>
        ))
      }
      

    
    const handleSearchResults = (results) => {
      setSearchResults(results);
      setLoading(false)
    }
    console.log(searchResults)
    
    const hoursResult = (gethours) => {
      setHours(gethours)
      
    }
    const priceResult = (getprice) => {
      setPrice(getprice)
    }
  
    const handleErrors = (error) => {
      setError(error)
    }
    console.log("price", price)
    console.log("hours", hours)
  return (
    <div>
      <div className='mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
        <Search onSearch={handleSearchResults} onPriceResult={priceResult} onHoursResult={hoursResult} onError={handleErrors} />
        <Hr />
        <div className='flex flex-col flex-wrap gap-6 lg:gap-8 md:flex-row'>
        {
          error ? (
            <div className='flex items-center justify-center w-full text-center'>
              <p className='text-red-400 font-aeonik'>{error}</p>
            </div>
          ) : (
            result
          )
        }
        </div>
        <Hr />
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Buy