import Image from 'next/image'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { VscProject } from 'react-icons/vsc'

const Me = () => {
    return (
        <div className='flex flex-col-reverse sm:flex-row sm:h-screen sm:items-center mx-auto max-w-[1500px]'>
            <div className='w-[50%]'>
                <h1 className='text-4xl font-bold text-gray-700'>Hi, I'm Shresht a</h1>
                <h1 className='text-4xl font-bold text-orange-400'>Software Developer</h1>
                <h1 className='text-4xl font-bold text-gray-700'>From India</h1>
                <h1 className='my-5 text-gray-700'>Full-stack developer by day, tech explorer by night. Fueled by code, coffee, and curiosity.</h1>
                <div className="bg-orange-400 rounded-lg items-center inline-flex text-white space-x-2 py-1 px-2">
                    <VscProject /><span>Project</span>
                </div>
                <div className="ml-3 hover:bg-orange-400 text-black border-black border-[1px] rounded-lg inline-flex items-center hover:border-0 hover:text-white space-x-2 py-1 px-2">
                    <span>Contact</span><FaLongArrowAltRight />
                </div>
            </div>
            <div className='w-[50%]'>
                <Image src="/image/LogoImage.png" layout="responsive" alt="Logo" width={120} height={120} className="object-contain  transform scale-x-[-1]" />
            </div>
        </div>
    )
}

export default Me