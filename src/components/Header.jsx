import React from 'react'
import Logo from '../assets/images/logo.svg'

function Header() {
  return (
    <div className='px-[50px] py-6 bg-midnight-green flex items-center justify-between'>
        <img src={Logo} alt="" />

        <nav className='flex gap-16 items-center text-lg'>
            <ul className='flex gap-8 text-white'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Doctors</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Blog</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>

            <button className='bg-verdigris px-5 py-3 text-white rounded-radius-6'>Make Appointment</button>
        </nav>

        
      
    </div>
  )
}

export default Header

