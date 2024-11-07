import Image from 'next/image'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { VscProject } from 'react-icons/vsc'

interface ContactProps {
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
    section4Ref: React.RefObject<HTMLDivElement>;
    section5Ref: React.RefObject<HTMLDivElement>;
}

const Me: React.FC<ContactProps> = ({ scrollToSection, section4Ref, section5Ref }) => {
    return (
        <div className='flex flex-col-reverse sm:flex-row sm:my-36 sm:items-center mx-auto max-w-6xl'>
            <div className='sm:w-[50%]'>
                <h1 className='text-4xl font-bold text-gray-700'>Hi, I'm Shresht a</h1>
                <div className='inline-flex'>
                    <h1 className='typing-text text-4xl  font-bold text-orange-400'>Developer</h1>
                </div>
                <h1 className='text-4xl font-bold text-gray-700'>From India</h1>
                <h1 className='my-5 text-gray-700'>Full-stack developer by day, tech explorer by night. Fueled by code, coffee, and curiosity.</h1>
                <div className='flex items-center'>
                    <button onClick={() => scrollToSection(section4Ref)} className="bg-orange-400 rounded-lg items-center inline-flex text-white space-x-2 py-1 px-2">
                        <VscProject /><span>Project</span>
                    </button>
                    <button onClick={() => scrollToSection(section5Ref)} className="ml-3 hover:bg-orange-400 text-black border-black border-[1px] rounded-lg inline-flex items-center hover:border-0 hover:text-white space-x-2 py-1 px-2">
                        <span>Contact</span><FaLongArrowAltRight />
                    </button>
                </div>
            </div>
            <div className="sm:w-[50%] relative h-[200px] sm:h-[400px]">
                <Image
                    src="/image/LogoImage.png"
                    alt="Logo"
                    fill
                    className="object-contain transform scale-x-[-1] "
                />
            </div>
        </div>
    )
}

export default Me