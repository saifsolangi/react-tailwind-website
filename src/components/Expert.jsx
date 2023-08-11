import React from 'react'
import Laptop from "../assets/laptop.jpg"

export default function Expert() {
    return (
        <div className='max-w-[1240px] mx-auto p-5 md:grid grid-cols-3 my-10'>
            <div className='col-span-1 md:w-[80%] '>
                <img src={Laptop} />
            </div>
            <div className='col-span-2 flex flex-col justify-center'>
                <h1 className='text-[#00df9a] font-bold mt-2'>LEARN FROM EXPERTS</h1>
                <p className='mt-2 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                <button className='bg-black text-white p-3 rounded mt-4 w-[20%]'>Get Started</button>
            </div>

        </div>
    )
}
