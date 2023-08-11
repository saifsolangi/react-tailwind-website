import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Header() {

    const [toggle, setToggle] = useState(false)

    return (
        < div className='bg-[#2699fb] p-4' >
            <div className='max-w-[1240px] items-center mx-auto flex justify-between py-1'>

                <div className='font-bold text-3xl '>
                    Saify
                </div>

                {
                    toggle
                        ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-3xl  md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-3xl  md:hidden block' />

                }

                <ul className='hidden md:flex gap-5 text-white'>
                    <li>
                        Home
                    </li>
                    <li>
                        Company
                    </li>
                    <li>
                        Resources
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>

                </ul>

                {/* Responsive Menu */}

                <ul className={` md:hidden w-full text-white fixed bg-black mt-[316px] ${toggle ? 'left-[0]' : 'left-[-100%]'} duration-300`}>
                    <li className='p-3'>
                        Home
                    </li>
                    <li className='p-3'>
                        Company
                    </li>
                    <li className='p-3'>
                        Resources
                    </li>
                    <li className='p-3'>
                        About
                    </li>
                    <li className='p-3'>
                        Contact
                    </li>

                </ul>


            </div>
        </div >
    )
}
