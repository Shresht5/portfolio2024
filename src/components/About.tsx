import React from 'react'
import { CgListTree } from 'react-icons/cg'
import { ImLeaf } from 'react-icons/im'
import { SiLeetcode, SiStreamrunners } from 'react-icons/si'

const About = () => {
    return (
        <div className='space-y-10 mx-auto max-w-6xl '>
            <div>
                <div className="bg-orange-400 rounded-full inline-flex items-center text-white space-x-2 py-1 px-2 ">
                    <ImLeaf /> <span>About Me</span>
                </div>
            </div>
            <div>
                <h1 className='my-5 text-gray-700 text-justify'>I'm a dedicated Full Stack Developer with hands-on experience building responsive, dynamic applications. Since writing my first line of code in 2021, I'm consistently pushing to elevate my skills. With a strong foundation in both front-end and back-end technologies, I'm eager to bring innovative solutions to real-world challenges and grow alongside a passionate team.</h1>
            </div>
            <div className='flex justify-evenly'>
                <div className='space-y-3 bg-white flex flex-col items-center p-2 rounded-lg shadow-xl'>
                    <SiLeetcode size={25} className='text-orange-400' />
                    <h1 className='text-lg font-bold'>100+</h1>
                    <h1 className='text-gray-700'>Leetcode Quistions</h1>
                </div>
                <div className='space-y-3 bg-white flex flex-col items-center p-2 rounded-lg shadow-xl'>
                    <CgListTree size={25} className='text-orange-400' />
                    <h1 className='text-lg font-bold'>10+</h1>
                    <h1 className='text-gray-700'>Projects created</h1>
                </div>
                <div className='space-y-3 bg-white flex flex-col items-center p-2 rounded-lg shadow-xl'>
                    <SiStreamrunners size={25} className='text-orange-400' />
                    <h1 className='font-bold text-lg'>currently</h1>
                    <h1 className='text-gray-700'>available</h1>
                </div>
            </div>
        </div>
    )
}

export default About