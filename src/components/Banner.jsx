import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
    return (
        <div className='bg-[#2699fb] w-full py-[100px] text-center font-bold'>
            <div className='text-[20px]'>
                Learn With Us
            </div>
            <h2 className='text-white text-[40px] md:text-[60px]'>Grow With Us</h2>
            <div className='text-white text-[30px] md:text-[60px]'>
                Learn
                <Typed className='pl-2'
                    strings={['Digital Marketing', 'Designing', 'Web Development']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                />
            </div>
            <button className='bg-black text-white p-3 rounded mt-5 font-normal'>Get Started</button>
        </div>
    )
}
