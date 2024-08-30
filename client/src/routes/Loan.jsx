import React from 'react'
import { loanHeroImg, dollarIcon } from '../assets'
import { buyImg11, buyImg12, buyImg8, searchImg1 } from '../assets'
import { FiArrowUpRight, FiMap } from 'react-icons/fi'
import { FaCheck, FaPlus, FaRegCalendarCheck } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi"
import Hr from '../componennts/Hr';
import BuyCard from '../componennts/BuyCard';
import Footer from '../componennts/Footer';
import { Link} from 'react-scroll';
import { Link  as Lin  } from 'react-router-dom';
import LazyLoad from '../componennts/LazyLoad';

const Loan = () => {
  return (
    <div>
        <div className='relative'>
            <LazyLoad image={loanHeroImg} alt={"loan hero"} className="hidden md:block"/>
            <div className='absolute inset-x-0 mx-8 top-2 md:top-12 xl:top-[-50px] md:mx-12 xl:mx-auto xl:max-w-6xl xl:mt-40'>
                <div className='flex flex-col items-center justify-between gap-4 my-6 lg:flex-row xl:my-0'>
                    <div className='bg-[#F7F7F6] p-4  shadow-md pb-12 flex-1 '>
                        <div className='flex items-center gap-2'>
                            <div >
                                <img src={dollarIcon} alt="" className='w-full h-full' />
                            </div>
                            <p className='text-base font-semibold xl:text-xl font-plex '>Fill a form & upload Document</p>
                        </div>
                        <div className='py-2'>
                            <p className='font-aeonik text-base font-normal text-[#747474]'>Choose from our dynamic range of popular quality used cars to fit your individual lifestyle and budget.</p>
                        </div>
                    </div>
                    <div className='bg-[#F7F7F6] p-4  shadow-md pb-12 flex-1'>
                        <div className='flex gap-2'>
                            <img src={dollarIcon} alt="" />
                            <p className='text-base font-semibold xl:text-xl font-plex '>Inspect the Equipment</p>
                        </div>
                        <div className='py-2'>
                            <p className='font-aeonik text-base font-normal text-[#747474]'>Our companies usually ensure that their products meet industry standards and regulations.</p>
                        </div>
                    </div>
                    <div className='bg-[#F7F7F6] p-4  shadow-md pb-6 xl:pb-12 flex-1'>
                        <div className='flex gap-2'>
                            <img src={dollarIcon} alt="" />
                            <p className='text-base font-semibold xl:text-xl font-plex '>Loan Disbursed</p>
                        </div>
                        <div className='py-2'>
                            <p className='font-aeonik text-base font-normal  text-[#747474]'>We offer excellent customer support services. If you encounter any issues with the equipment, you can rely on our assistance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='relative mx-8 mt-[660px] sm:mt-[550px] md:mt-[480px] md:mx-12 xl:mx-auto xl:max-w-6xl lg:mt-40 '>
            <div>
                <div className='flex flex-col gap-10 md:flex-row'>  
                    <div className='max-w-sm'>
                        <img src={searchImg1} alt="2017 Kobelco SK210LC-9" className='w-full h-full'/>
                    </div>
                    <div className=''>
                        <h3 className='text-base font-bold font-plex md:text-lg lg:text-xl'>2017 Kobelco SK210LC-9</h3>
                        <p className='pt-2 pb-4 text-base font-bold font-aeonik md:text-lg lg:text-xl'>N 8,750,999</p>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-[4px] items-center'>
                                <HiOutlineLocationMarker className='text-xl text-eYellow' /> <span className='text-sm font-medium text-[#313131]'>Lagos, NIgeria.</span>
                            </div>
                            <div className='flex gap-[4px] items-center'>
                                <FaRegCalendarCheck className='sm:text-xl text-eYellow'/> <span className='text-sm font-medium text-[#313131]'>Available</span>
                            </div>
                        </div>
                        <p className='py-4 text-base font-bold text-eBlack md:text-lg lg:text-xl font-aeonik'>Est. Loan Payment <br /> #300,000</p>
                        <p className='flex gap-3'>
                            <FaCheck className='text-lg font-bold text-green-600'/> <span className='text-sm font-medium font-aeonik'>Colour Green</span>
                        </p>
                        <div className='flex flex-col gap-2 mt-4'>
                            <Lin to="/loan-form">
                                <button className='mt-2 w-full  bg-eBlack text-white px-4 py-2 capitalize font-aeonik text-[10px] sm:text-sm lg:text-base flex gap-1 sm:gap-2 items-center justify-center font-bold'>Apply Now</button>
                            </Lin> 
                            <button className='mt-2 border-[1px] border-eBlack px-4 py-2 capitalize font-aeonik text-[10px] sm:text-sm lg:text-base flex gap-1 sm:gap-2 items-center justify-center font-bold'>Download Report</button>
                            </div>
                    </div>
                </div>
                <div>
                    <Hr />
                    <div>
                        <h4 className='pb-6 text-base font-bold text-eBlack font-plex'>EQUIPMENT DISCRIPPTION</h4>
                        <ul className='inline-flex flex-col gap-6'>
                            <Link to="about" 
                                spy={true} 
                                smooth={true} 
                                offset={20} 
                                duration={500}  className='inline-flex gap-4 justify-between items-center border-b-2 border-[#747474] pb-3 font-aeonik text-eBlack text-sm md:text-base font-medium cursor-pointer'>ABOUT THIS EQUIPMENT <FaPlus className='text-md hover:text-eYellow'/></Link> 
                            <Link to="feature" 
                                spy={true} 
                                smooth={true} 
                                offset={20} 
                                duration={500}  className='inline-flex gap-4 justify-between items-center border-b-2 border-[#747474] pb-3 font-aeonik text-eBlack text-sm md:text-base font-medium cursor-pointer'>FEATURES <FaPlus className='text-md hover:text-eYellow'/></Link> 
                            <Link to="specification" 
                                spy={true} 
                                smooth={true} 
                                offset={20} 
                                duration={500} className='inline-flex gap-4 justify-between items-center border-b-2 border-[#747474] pb-3 font-aeonik text-eBlack text-sm md:text-base font-medium cursor-pointer uppercase'>specification <FaPlus className='text-md hover:text-eYellow'/></Link>
                            <Link  to="inspection" 
                                spy={true} 
                                smooth={true} 
                                offset={20} 
                                duration={500} className='inline-flex gap-4 justify-between items-center border-b-2 border-[#747474] pb-3 font-aeonik text-eBlack text-sm md:text-base font-medium cursor-pointer'>INSPECTION SUMMARY <FaPlus className='text-md hover:text-eYellow'/></Link> 
                        </ul>
                    </div>
                    <div id='about'>
                        <h1 className='py-12 text-base font-bold font-plex' >About this equipment</h1>
                        <div className='text-[#747474] text-sm md:text-base font-normal max-w-xl'>
                            <p>This light tower is in good working condition and comes with a clean and dry engine, ensuring optimal performance every time. The body panels are free from any damage and the paint is in great condition, making this light tower not only dependable but also easy on the eyes.</p>
                            <br />
                            <p>With its powerful 8KW generator, this light tower is capable of illuminating even the largest of worksites or events. And with its durable and sturdy design, you can trust that it will continue to perform year after year. Whether you need a light tower for construction, emergency response, or any other outdoor application, this 2012 Frontier Power Genesis 8KW Light Tower is the perfect choice</p>
                        </div>
                        <div id='feature'>
                            <h1 className='pt-12 pb-8 text-base font-bold font-plex'>Features</h1>
                            <ul className='inline-flex flex-col gap-2 text-[#747474] text-sm md:text-base font-normal'>
                                <li>● 4 1000w Bulbs</li>
                                <li>● Stamford 240v Brushless Alternator/Generator</li>
                                <li>● Block Heater</li>
                                <li>● Vibration Isolation</li>
                                <li>● Circuit Breakers All A/C Outlets</li>
                                <li>● Standard Tow Hitch</li>
                            </ul>
                        </div>
                        <div id='specification'>
                            <h1 className='pt-12 pb-8 text-base font-bold font-plex'>Specification</h1>
                            <ul className='inline-flex flex-col gap-2 text-[#747474] text-sm md:text-base font-normal'>
                                <li>● Engine: Kubota D1105BGET01 - 1.1L - 13 Hp - Diesel</li>
                                <li>● EPA Tier 4</li>
                                <li>● RPM = 1,800</li>
                                <li>● Fuel Capacity: 30 gal</li>
                                <li>● Lumens Capacity: 440,000</li>
                                <li>● Mast: 3 Section/30' Height</li>
                                <li>● Kilowatt Rating: 8 kW</li>
                                <li>● A/C Outlets: 15 Amp & 30 Amp</li>
                                <li>● Rotation: 350 degrees</li>
                                <li>● Coverage: 5-7 acres</li>
                                <li>● Axles: 3,500 lbs</li>
                                <li>● Tires: Freestar ST175-80-R13C</li>
                                <li>● GVWR: 2,720 lbs</li>
                                <li>● GAWR: 2,575 lbs</li>
                                <li>● Operational Weight: 3,500 lbs</li>
                            </ul>
                        </div>
                        <div id='inspection'>
                            <h1 className='pt-12 pb-8 text-base font-bold font-plex'>Inspection Summary</h1>
                            <p className='py-4 text-eBlack font-plex'>What make it different</p>
                            <ul className='inline-flex flex-col gap-2 text-[#747474] text-sm md:text-base font-normal'>
                                <li>● Clean and dry engine compartment, no active leaks</li>
                                <li>● Engine starts up with no unusual noises or smoke issues</li>
                                <li>● Electrical components are in good condition with no damage</li>
                                <li>● Light mast sections are of good appearance with no damage</li>
                                <li>● Tires are in good condition, and have a good amount of tread remaining</li>
                                <li>● Undercarriage components are in good condition</li>
                                <li>● Chassis and frame are in good condition; level stance</li>
                                <li>● Good mast raise, lower and rotation performance</li>
                                <li>● No visible damage to body panels; good paint condition and panel fitment</li>
                                <li>● Good operating station appearance</li>
                                <li>● Operator displays and controls are functioning and in good condition</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='pt-12 pb-8 text-base font-bold font-plex'>What  needs to be worked on</h1>
                            <ul className='inline-flex flex-col gap-2 text-[#747474] text-sm md:text-base font-normal'>
                                <li>● 1 electrical wire is unshielded and frayed</li>
                                <li>● 1 bulb is not working</li>
                                <li>● Tire hubs are rusty</li>
                                <li>● Outriggers have a rusty appearance</li>
                                <li>● Some surface rust on front and side stabilisers</li>
                            </ul>
                        </div>
                        <Hr />
                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex flex-col gap-4 mt-6 lg:gap-8 md:flex-row'>
                                <BuyCard img={buyImg8} name={"2017 Bobcat S650"}/>
                                <BuyCard img={buyImg11} name={"2007 Genie Z-60/34 Articulating"}/>
                                <BuyCard img={buyImg12} name={"2016 Genie Z-30/20N Articulating"}/>
                            </div>
                            <br />
                            <Link to='/buy'>
                                <button className='mt-2  bg-eBlack text-white px-4 py-2 capitalize font-aeonik text-[10px] sm:text-sm lg:text-base flex gap-1 sm:gap-2 items-center justify-center font-bold'>See All<FiArrowUpRight className='text-lg sm:text-xl' /> </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br /><br />
        <Footer />
        
    </div>
  )
}

export default Loan