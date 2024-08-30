import React from 'react'
import ButtonBlack from '../componennts/ButtonBlack'
import Footer from '../componennts/Footer'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { db } from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoanForm = () => {
    const schema = yup.object().shape({
     firstName: yup.string().required(" first name is required"),
     lastName: yup.string().required("last name is required"),
     email: yup.string().email().required(" email is required"),
     dob: yup.date().required("dob is required").typeError("date is not valid"),
     number: yup.number().required("phone number is required").typeError("number is not valid"),
     gender: yup.string().required("Gender is required"),
     state: yup.string().required("state is required"),
     nin: yup.number("invalid type").required("NIN is required").typeError("NIN is required"),
    })

   const { register, handleSubmit, formState: { errors }, reset} = useForm({
       resolver: yupResolver(schema)
   });
   
   const onSubmitHandler = async(data) => {
        try {
            const docRef = await addDoc(collection(db, "loan-form"), {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                dob: data.dob,
                number: data.number,
                gender: data.gender,
                state: data.state,
                nin: data.nin
            });
            toast.success("Data added successfully");
        } catch (e) {
            toast.error("An error occured while adding your data")
        }
        reset()
   }

   

  return (
    <div>
        <div className='mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl pb-24'>
            <h1 className='text-eBlack font-plex text-center text-xl md:text-2xl lg:text-4xl font-semibold capitalize my-4'>Loan Form</h1>
            <div className='border-[1px] border-[#747474]'>
                <p className='capitalize text-eBlack font-aeonik text-md lg:text-lg font-medium border-b-[1px] border-[#747474] pl-8 xl:pl-[120px] py-4'>basic information</p>
                <form  onSubmit={handleSubmit(onSubmitHandler)}>
                    <ToastContainer />
                    <div className=' flex justify-center items-center py-4 flex-col'>
                        <div className='flex gap-4 flex-col md:flex-row '>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="first name" className='text-sm font-aeonik font-medium text-eBlack capitalize'>first name</label>
                                <input type="text" name="firstName" id="name" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] lg:w-[420px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4 placeholder:text-[#747474] placeholder:font-aeonik placeholder:text-sm placeholder:pl-4' placeholder='Aboluwaji' {...register("firstName")} />
                                <p className='font-aeonik text-sm text-red-600'>{errors.firstName?.message}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="name" className='text-sm font-aeonik font-medium text-eBlack capitalize'>last name</label>
                                <input type="text" name="lastName" id="name" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] lg:w-[420px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4 placeholder:text-[#747474] placeholder:font-aeonik placeholder:text-sm placeholder:pl-4' placeholder='John' {...register("lastName")} />
                                <p className='font-aeonik text-sm text-red-600'>{errors.lastName?.message}</p>
                            </div>
                        </div>
                        <div className='flex gap-4 flex-col md:flex-row mt-4 '>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="first name" className='text-sm font-aeonik font-medium text-eBlack capitalize'>Email Address</label>
                                <input type="email" name="email" id="name" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] lg:w-[420px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4 placeholder:text-[#747474] placeholder:font-aeonik placeholder:text-sm placeholder:pl-4' placeholder='abolorealexandrajohn@gmail.com' {...register("email")} />
                                <p className='font-aeonik text-sm text-red-600'>{errors.email?.message}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="name" className='text-sm font-aeonik font-medium text-eBlack capitalize'>Date of Birth</label>
                                <input type="date" name="dob" id="name" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] lg:w-[420px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4'  {...register("dob")} />
                                <p className='font-aeonik text-sm text-red-600'>{errors.dob?.message}</p>
                            </div>
                        </div>
                        <div className='flex gap-4 flex-col md:flex-row mt-4 '>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="first name" className='text-sm font-aeonik font-medium text-eBlack capitalize'>Phone Number</label>
                                <input type="text" name="number" id="name" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] lg:w-[420px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4 placeholder:text-[#747474] placeholder:font-aeonik placeholder:text-sm placeholder:pl-4' placeholder='09034567899' {...register("number")} />
                                <p className='font-aeonik text-sm text-red-600'>{errors.number?.message}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="name" className='text-sm font-aeonik font-medium text-eBlack capitalize'>Gender</label>
                                <select type="text" name="gender" id="name" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] lg:w-[420px] xl:w-[446px] h-[30px] shadow-sm outline-none' {...register("gender")}>
                                    <option className='text-[#747474] font-aeonik text-sm pl-4'>Choose Gender</option>
                                    <option value="male" className='text-[#747474] font-aeonik text-sm pl-4'>Male</option>
                                    <option value="female" className='text-[#747474] font-aeonik text-sm pl-4'>Female</option>
                                </select>
                                <p className='font-aeonik text-sm text-red-600'>{errors.gender?.message}</p>
                            </div>
                        </div>
                        <div className='flex gap-4 flex-col md:flex-row mt-4 '>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="first name" className='text-sm font-aeonik font-medium text-eBlack capitalize'>state</label>
                                <input type="text" name="state" id="name" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] lg:w-[420px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4 placeholder:text-[#747474] placeholder:font-aeonik placeholder:text-sm placeholder:pl-4' placeholder='Ondo' {...register("state")} />
                                <p className='font-aeonik text-sm text-red-600'>{errors.state?.message}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="name" className='text-sm font-aeonik font-medium text-eBlack capitalize'>National Identification Number</label>
                                <input type="number" name="nin" id="name" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] lg:w-[420px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4 placeholder:text-[#747474] placeholder:font-aeonik placeholder:text-sm placeholder:pl-4' placeholder='Your NIN' {...register("nin")}/>
                                <p>{errors.nin?.message}</p>
                            </div>
                        </div>
                        <button type="submit" className='font-aeonik text-sm capitalize font-medium px-4 py-2 text-white bg-eBlack mt-4'>continue</button>
                    </div>
                </form>
                </div>
        </div>
        <Footer />
    </div>
  )
}

export default LoanForm