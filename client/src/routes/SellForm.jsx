import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {db} from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SellForm = ({ onClose }) => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const schema  = yup.object().shape({
        name: yup.string().required("Name is required"),
        number: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        state: yup.string().required("State is required"),
        town: yup.string().required("Town is required"),
        email: yup.string().email().required("Email is required"),
        company: yup.string().required("Company is required"),
        equipment: yup.string().required("Equipment is required"),
    })

    const {register, handleSubmit, formState: { errors }, reset} = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmitHandler = async(data) => {
        try {
            const docRef = await addDoc(collection(db, "sell-form"), {
                name: data.name,
                number: data.number,
                state: data.state,
                town: data.town,
                email: data.email,
                company: data.company,
                equipment: data.equipment
            });
            toast.success("Data added successfully");
        } catch (e) {
            toast.error("An error occured while adding your data")
        }
    reset()
    }
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white shadow-lg p-6 w-3/4 h-[820px] mx-auto top-40 z-10 py-6">
    <div className='flex justify-center items-center flex-col'>
        <AiOutlineClose className='absolute top-2 right-2 md:top-8 md:right-8 cursor-pointer text-red-600 font-black text-xl'  onClick={onClose}/>
        <h6 className='text-eBlack font-plex text-4xl font-semibold text-center'>Sell Your Equipment</h6>
        <p className='text-[#747474] font-sans text-sm  py-6 max-w-sm text-center '>Fill out the form below for us to contact you about the equipment you want to sell</p>
        <form  onSubmit={handleSubmit(onSubmitHandler)}>
        <ToastContainer />
            <div className='flex justify-center items-center py-4 flex-col'>
                <div className='flex gap-4 flex-col md:flex-row '>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className='text-sm font-aeonik font-medium text-eBlack capitalize'>Name</label>
                        <input type="text" name="name" id="name" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] md:w-[250px] lg:w-[340px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4' {...register("name")} />
                        <p className='font-aeonik text-sm text-red-600'>{errors.name?.message}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="number" className='text-sm font-aeonik font-medium text-eBlack capitalize'>Phone Number</label>
                        <input type="number" name="number" id="number" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] md:w-[250px] lg:w-[340px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4' {...register("number")}  />
                        <p className='font-aeonik text-sm text-red-600'>{errors.number?.message}</p>
                    </div>
                </div>
                <div className='flex gap-4 flex-col md:flex-row  md:mt-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="state" className='text-sm font-aeonik font-medium text-eBlack capitalize'>State</label>
                        <input type="text" name="state" id="state" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] md:w-[250px] lg:w-[340px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4' {...register("state")} />
                        <p className='font-aeonik text-sm text-red-600'>{errors.state?.message}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="town" className='text-sm font-aeonik font-medium text-eBlack capitalize'>Town </label>
                        <input type="text" name="town" id="town" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] md:w-[250px] lg:w-[340px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4' {...register("town")} />
                        <p className='font-aeonik text-sm text-red-600'>{errors.town?.message}</p>
                    </div>
                </div>
                <div className='flex gap-4 flex-col md:flex-row md:mt-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className='text-sm font-aeonik font-medium text-eBlack capitalize'>Email</label>
                        <input type="email" name="email" id="email" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] md:w-[250px] lg:w-[340px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4' {...register("email")} />
                        <p className='font-aeonik text-sm text-red-600'>{errors.email?.message}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="company" className='text-sm font-aeonik font-medium text-eBlack capitalize'>Company </label>
                        <input type="text" name="company" id="company" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] md:w-[250px] lg:w-[340px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4' {...register("company")} />
                        <p className='font-aeonik text-sm text-red-600'>{errors.company?.message}</p>
                    </div>
                </div>
                <div className='flex flex-col w-full md:mt-4'>
                    <div className='flex flex-col gap-2 '>
                        <label htmlFor="equipment" className='text-sm font-aeonik font-medium text-eBlack capitalize'>Equipment Type</label>
                        <input type="text" name="equipment" id="equipment" className='border-[1px] border-[#747474] w-full h-[30px] shadow-sm outline-none font-aeonik text-sm pl-4' {...register("equipment")} />
                        <p className='font-aeonik text-sm text-red-600'>{errors.equipment?.message}</p>
                    </div>
                    <div className='flex flex-col gap-2 mt-2 md:mt-4'>
                        <input type="submit" value="submit" className='w-full bg-eBlack text-white h-[30px] shadow-sm outline-none font-aeonik text-sm pl-4' />
                    </div>
                </div>
            </div>
        </form>
    </div>
  </div>
  )
}

export default SellForm