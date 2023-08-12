import React from 'react'

export default function NewsLetter() {
    return (
        <div className='w-full bg-[#2699fb] p-4'>

            <div className='max-w-[1240px] md:flex justify-between items-center py-10'>

                <div className=' mx-auto '>
                    <h1 className='text-[20px] md:text-[30px] font-bold text-white'>
                        Want to learn latest I.T Skills
                    </h1>
                    <p className='text-white'>Sign up to our newsletter and stay up to date.</p>

                </div>
                <div className='mx-auto'>

                    <input type='email' className='p-3 mr-2 text-slate-300 border rounded-md' placeholder='Email'></input>
                    <button className='bg-black text-white p-3 rounded mt-5 font-normal'>Notify Me</button>
                    <br />
                    <p className='text-white'>
                        We care about the protection of your data. <br /> Read our  Privacy Policy
                    </p>


                </div>

            </div>


        </div>
    )
}
