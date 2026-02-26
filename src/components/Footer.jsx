/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Left Section */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt='Logo' />
                <p className='w-full md:w-2/3 text-gray-800 leading-6'>Your all-in-one digital destination for smarter health. From instant doctor bookings to streamlined pharmacy services, we put the "HUB" in healthcare. Experience a faster, more connected way to manage your well-being today.</p>
            </div>

            {/* Cnter Section */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* Right Section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'> 
                    <li>+237-677-605-517</li>
                    <li>justasakon1@gmail.com</li>
                </ul>
            </div>
        </div>

        {/* Copyright Text */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright © 2024 codegisoft_Dev - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer