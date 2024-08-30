import React, {forwardRef} from 'react'
import { AiOutlineClose } from "react-icons/ai"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {db} from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Dialog from '@radix-ui/react-dialog';
const PopupForm = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const schema  = yup.object().shape({
        name: yup.string().required("Name is required"),
        number: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        state: yup.string().required("State is required"),
        town: yup.string().required("Town is required"),
        email: yup.string().email().required("Email is required")
    })

    const {register, handleSubmit, formState: { errors }, reset} = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmitHandler = async(data) => {
        try {
            const docRef = await addDoc(collection(db, "buy-form"), {
                name: data.name,
                number: data.number,
                state: data.state,
                town: data.town,
                email: data.email
            });
            toast.success("Data added successfully");
        } catch (e) {
            toast.error("An error occured while adding your data")
        }
    reset()
    }
    return (
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center  bg-white shadow-lg p-6 w-3/4 h-[600px]">
        <Dialog.Close className='text-gray-400 absolute right-0 top-0 p-2'>
           <AiOutlineClose />
        </Dialog.Close>
        <div className='flex flex-col items-center justify-center'>
            <Dialog.Title className='text-4xl font-semibold text-eBlack font-plex'>Buy Now</Dialog.Title>
            <Dialog.Description className='text-[#747474] font-sans text-sm  py-6 max-w-sm text-center '>We'll place a hold on this equipment and contact you for payment details and shipping.</Dialog.Description>
            <form  onSubmit={handleSubmit(onSubmitHandler)}>
            <ToastContainer />
                <div className='flex flex-col items-center justify-center py-4'>
                    <div className='flex flex-col gap-4 md:flex-row '>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name" className='text-sm font-medium capitalize font-aeonik text-eBlack'>Name</label>
                            <input type="text" name="name" id="name" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] md:w-[250px] lg:w-[340px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4' {...register("name")} />
                            <p className='text-sm text-red-600 font-aeonik'>{errors.name?.message}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="number" className='text-sm font-medium capitalize font-aeonik text-eBlack'>Phone Number</label>
                            <input type="number" name="number" id="number" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] md:w-[250px] lg:w-[340px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4' {...register("number")}  />
                            <p className='text-sm text-red-600 font-aeonik'>{errors.number?.message}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 md:flex-row md:mt-4'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="state" className='text-sm font-medium capitalize font-aeonik text-eBlack'>State</label>
                            <input type="text" name="state" id="state" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] md:w-[250px] lg:w-[340px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4' {...register("state")} />
                            <p className='text-sm text-red-600 font-aeonik'>{errors.state?.message}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="town" className='text-sm font-medium capitalize font-aeonik text-eBlack'>Town </label>
                            <input type="text" name="town" id="town" className='border-[1px] border-[#747474] w-[260px] xs:w-[290px] sm:w-[300px] md:w-[250px] lg:w-[340px] xl:w-[446px] h-[30px] shadow-sm outline-none text-[#747474] font-aeonik text-sm pl-4' {...register("town")} />
                            <p className='text-sm text-red-600 font-aeonik'>{errors.town?.message}</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-full md:mt-4'>
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="email" className='text-sm font-medium capitalize font-aeonik text-eBlack'>Email</label>
                            <input type="email" name="email" id="email" className='border-[1px] border-[#747474] w-full h-[30px] shadow-sm outline-none font-aeonik text-sm pl-4' {...register("email")} />
                            <p className='text-sm text-red-600 font-aeonik'>{errors.email?.message}</p>
                        </div>
                        <div className='flex flex-col gap-2 mt-2 md:mt-4'>
                            <input type="submit" value="submit" className='w-full bg-eBlack text-white h-[30px] shadow-sm outline-none font-aeonik text-sm pl-4' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
      </div>
    );
};
export default PopupForm