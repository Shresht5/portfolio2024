import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'
import { ImLeaf } from 'react-icons/im'
import { RiNextjsFill } from 'react-icons/ri'
import { SiJavascript, SiMongodb } from 'react-icons/si'
import { TbBrandReact } from 'react-icons/tb'

const Project = () => {
    return (
        <div className='space-y-10 max-w-6xl mx-auto'>
            <div className="bg-orange-400 rounded-full inline-flex items-center text-white space-x-2 py-1 px-2 ">
                <ImLeaf /> <span>Some Of My Work</span>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='View bg-white rounded-xl shadow-xl'>
                    <div className="relative pb-[50%]">
                        <Image
                            src="/image/Portfolip.jpg"
                            alt="Logo"
                            layout="fill"  // Fills the container's height and width
                            objectFit="cover"
                            className='w-full absolute rounded-t-xl'
                        />
                    </div>
                    <div className='inline-flex p-3 text-3xl space-x-2 text-orange-600'>
                        <BiLogoTypescript /><RiNextjsFill /><SiMongodb />
                    </div>
                    <div className='p-2 space-y-2'>
                        <h1 className='font-semibold text-2xl text-orange-400'>Simple Portfolio</h1>
                        <h1 className="text-justify">This is a simple portfolio website built with Next.js and Tailwind CSS. It is a responsive website that is designed to be viewed on all devices and you can send message to me as well.</h1>
                        <Link href='https://github.com/Shresht5/portfolio2024' target='_blank' className='inline-flex items-center hover:bg-slate-100'>
                            <h1 className='text-gray-700 mr-2'>View</h1>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
                <div className='View bg-white rounded-xl shadow-xl'>
                    <div className="relative pb-[50%]">
                        <Image
                            src="/image/Blog20241JPG.jpg"
                            alt="Logo"
                            layout="fill"  // Fills the container's height and width
                            objectFit="cover"
                            className='w-full absolute rounded-t-xl'
                        />
                    </div>
                    <div className='inline-flex p-3 text-3xl space-x-2 text-orange-600'>
                        <SiJavascript /><TbBrandReact /><SiMongodb />
                    </div>
                    <div className='p-2 space-y-2'>
                        <h1 className='font-semibold text-2xl text-orange-400'>Blog Application</h1>
                        <h1 className="text-justify">Built with React and Express, this blog application offers a user-friendly experience with secure authentication, allowing users to easily create, post, and share their thoughts through blogs.</h1>
                        <Link href='https://github.com/Shresht5/Blog2024' target='_blank' className='inline-flex items-center hover:bg-slate-100'>
                            <h1 className='text-gray-700 mr-2'>View</h1>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
                <div className='View bg-white rounded-xl shadow-xl'>
                    <div className="relative pb-[50%]">
                        <Image
                            src="/image/Shizzle1.jpg"
                            alt="Logo"
                            layout="fill"  // Fills the container's height and width
                            objectFit="cover"
                            className='w-full absolute rounded-t-xl'
                        />
                    </div>
                    <div className='inline-flex p-3 text-3xl space-x-2 text-orange-600'>
                        <SiJavascript /><TbBrandReact /><SiMongodb />
                    </div>
                    <div className='p-2 space-y-2'>
                        <h1 className='font-semibold text-2xl text-orange-400'>Shizzle</h1>
                        <h1 className="text-justify">Shizzle is a responsive food ordering application built with React and Express for your business. It lets users easily browse and order food while providing secure authentication features.</h1>
                        <Link href='https://github.com/Shresht5/Shizzle' target='_blank' className='inline-flex items-center hover:bg-slate-100'>
                            <h1 className='text-gray-700 mr-2'>View</h1>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project