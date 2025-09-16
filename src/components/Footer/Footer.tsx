import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-zinc-800 text-white py-6 mt-10 h-14 w-full sticky bottom-0 flex items-center justify-center'>
            <div className='w-[95%] mx-auto  flex justify-between items-center text-sm md:text-base'>
                <div className='flex items-center gap-3'>
                <div className='flex items-center gap-2 bg-gray-100 rounded-lg'>
                    <Image src="/c0.png" alt="logo" width={40} height={85} />
                </div>
                <h2 className='text-xl'>Krea AI</h2>
                </div>

                <div className='flex items-center gap-4'>
                    <h6 className='font-semibold text-lg'>curated by</h6>
                    <div className='flex items-center gap-2'>
                        <h1 className='mmd font-extrabold text-base'>M</h1>
                        <p className='font-bold text-xl'>Mobbin</p>
                    </div>
                </div>
            </div>


        </div>
    )
}
