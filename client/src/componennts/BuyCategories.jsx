import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BuyCard from './BuyCard'
import Footer from './Footer';
import Hr from './Hr';
import Loader from './Loader';
import Search from './Search';

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers",
  "Sokoto", "Taraba", "Yobe", "Zamfara"
];
const BuyCategories = () => {
    const { category } = useParams();
    const [categoryData, setCategoryData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [price, setPrice] = useState([])
    const [hours, setHours] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
      const fetchCategoryData = async() => {
        try{
          const response = await fetch(`http://localhost:3000/equipments/byCategory/${category}`)
          if(!response.ok){
            console.log("Equipments not found");
            return;
          }
          const data = await response.json();
          setCategoryData(data);
          console.log(data)
        }
  
        catch(error){
          console.log(error)
        }
      }
      if (category !== '') {
        fetchCategoryData(); 
      }
    }, [category])
    
   
    
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

        if(category !== ''  && categoryData.length > 0){
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
        }else{
          result = 'Equippment not found'
        }
    const handleSearchResults = (results) => {
      setSearchResults(results);
      setLoading(false)
    }
    const hoursResult = (gethours) => {
      setHours(gethours)
      
    }
    const priceResult = (getprice) => {
      setPrice(getprice)
    }
    const handleErrors = (error) => {
      setError(error)
    }
  return (
    <div>

      <div className='mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
        <Search onSearch={handleSearchResults} onPriceResult={priceResult} onHoursResult={hoursResult} onError={handleErrors}/>
        <Hr />
          <div className='flex flex-col flex-wrap gap-4 lg:gap-8 md:flex-row'>
            
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
      <Footer />
    </div>
  )
}

export default BuyCategories