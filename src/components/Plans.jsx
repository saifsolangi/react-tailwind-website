import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

export default function Plans() {
    return (
        <div className='py-[100px]'>

            <div className='max-w-[1240px] mx-auto md:grid p-4 grid-cols-3 gap-5 '>
                <div className='shadow-xl py-[40px] rounded-xl flex justify-start items-center bg-gray-100 flex-col p-3 hover:scale-105 duration-500 my-5'>
                    <img src={single} className='w-[100px] h-auto' />
                    <h2 className='text-2xl font-bold mt-4'>Web Development</h2>
                    <h2 className='text-[50px] font-bold mb-7 mt-2'>$149</h2>
                    <p className='text-center mt-2 '>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                    </p>
                </div>
                <div className='shadow-xl py-[40px] rounded-xl flex justify-start items-center bg-gray-50 flex-col p-3 hover:scale-105 duration-500 my-5'>
                    <img src={double} className='w-[100px] h-auto' />
                    <h2 className='text-2xl font-bold mt-4'>Digital Marketing</h2>
                    <h2 className='text-[50px] font-bold mb-7 mt-2'>$210</h2>
                    <p className='text-center mt-2 '>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                    </p>
                </div>

                <div className='shadow-xl py-[40px] rounded-xl flex justify-start items-center bg-gray-100 flex-col p-3 hover:scale-105 duration-500'>
                    <img src={triple} className='w-[100px] h-auto' />
                    <h2 className='text-2xl font-bold mt-4'>Designing</h2>
                    <h2 className='text-[50px] font-bold mb-7 mt-2'>$128</h2>
                    <p className='text-center mt-2 '>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                    </p>
                </div>


            </div>

        </div>
    )
}
