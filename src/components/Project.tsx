import Image from 'next/image'
import Link from 'next/link'
import { BiLogoPython, BiLogoTypescript } from 'react-icons/bi'
import { FaArrowRight, FaTelegram } from 'react-icons/fa'
import { ImLeaf } from 'react-icons/im'
import { RiNextjsFill } from 'react-icons/ri'
import { SiJavascript, SiMongodb, SiSqlite } from 'react-icons/si'
import { TbBrandReact, TbBrandReactNative } from 'react-icons/tb'

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
                            src="/image/1.jpg"
                            alt="Logo"
                            fill
                            className='w-full absolute rounded-t-xl'
                        />
                    </div>
                    <div className='inline-flex p-3 text-3xl space-x-2 text-orange-600'>
                        <BiLogoTypescript /><RiNextjsFill /><SiMongodb />
                    </div>
                    <div className='p-2 space-y-2'>
                        <h1 className='font-semibold text-2xl text-orange-400'>E-Commerce Website</h1>
                        <h1 className="text-justify">Luxeloom is a responsive e-commerce platform built with Next.js and MongoDB for browsing home décor products, secure authentication, cart management, and seamless checkout with an admin dashboard.</h1>
                        <Link href='https://luxeloom-gamma.vercel.app/' target='_blank' className='inline-flex items-center hover:bg-slate-100'>
                            <h1 className='text-gray-700 mr-2'>View</h1>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
                <div className='View bg-white rounded-xl shadow-xl'>
                    <div className="relative pb-[50%]">
                        <Image
                            src="/image/2.jpg"
                            alt="Logo"
                            fill
                            className='w-full absolute rounded-t-xl'
                        />
                    </div>
                    <div className='inline-flex p-3 text-3xl space-x-2 text-orange-600'>
                        <BiLogoPython /><FaTelegram />

                    </div>
                    <div className='p-2 space-y-2'>
                        <h1 className='font-semibold text-2xl text-orange-400'>Education AiChat Application</h1>
                        <h1 className="text-justify">No Doubt is a full-stack chat application built with Next.js, TypeScript, and Python for real-time messaging, JWT authentication, secure API communication, structured data management, and scalable client-server interactions.</h1>
                        <Link href='https://t.me/Tegor7Bot' target='_blank' className='inline-flex items-center hover:bg-slate-100'>
                            <h1 className='text-gray-700 mr-2'>View</h1>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
                <div className='View bg-white rounded-xl shadow-xl'>
                    <div className="relative pb-[50%]">
                        <Image
                            src="/image/3.jpg"
                            alt="Logo"
                            fill
                            className='w-full absolute rounded-t-xl'
                        />
                    </div>
                    <div className='inline-flex p-3 text-3xl space-x-2 text-orange-600'>
                        <TbBrandReactNative /> <BiLogoTypescript /><SiSqlite />
                    </div>
                    <div className='p-2 space-y-2'>
                        <h1 className='font-semibold text-2xl text-orange-400'>Health Care Android App</h1>
                        <h1 className="text-justify">Vedyuk is a responsive healthcare app built with React Native and Node.js that enables medication scheduling, daily reminders with notifications, stock tracking, and secure health data management.</h1>
                        <Link href='https://drive.google.com/file/d/1rX7-sEocqNY-qmvUm12U82wMUQw9YIPr/view' target='_blank' className='inline-flex items-center hover:bg-slate-100'>
                            <h1 className='text-gray-700 mr-2'>View</h1>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
                <div className='View bg-white rounded-xl shadow-xl'>
                    <div className="relative pb-[50%]">
                        <Image
                            src="/image/4.jpg"
                            alt="Logo"
                            fill
                            className='w-full absolute rounded-t-xl'
                        />
                    </div>
                    <div className='inline-flex p-3 text-3xl space-x-2 text-orange-600'>
                        <SiJavascript /><TbBrandReact /><SiMongodb />
                    </div>
                    <div className='p-2 space-y-2'>
                        <h1 className='font-semibold text-2xl text-orange-400'>Desktop Business Management Software</h1>
                        <h1 className="text-justify">Lotaxy is a desktop-based business management platform built with Electron, React, and TypeScript for managing HR, inventory, orders, projects, role-based access, local data storage, and secure business operations through a unified dashboard.</h1>
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