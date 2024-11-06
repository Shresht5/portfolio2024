import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { ImLeaf } from 'react-icons/im'
import { SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'

const Skills = () => {
    return (
        <div className='space-y-10 mx-auto max-w-6xl'>
            <div>
                <div className="bg-orange-400 rounded-full inline-flex items-center text-white space-x-2 py-1 px-2 ">
                    <ImLeaf /> <span>Some Skills</span>
                </div>
            </div>
            <div className='p-4'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] shadow-xl ">
                    <div className="bg-white p-6 rounded flex flex-col items-center space-y-3">
                        <FaHtml5 size={40} className=' text-orange-600' />
                        <h1>Html</h1>
                    </div>
                    <div className="bg-white p-6 rounded flex flex-col items-center space-y-3">
                        <FaCss3Alt size={40} className=' text-blue-600' />
                        <h1>CSS</h1>
                    </div>
                    <div className="bg-white p-6 rounded flex flex-col items-center space-y-3">
                        <SiJavascript size={40} className=' text-yellow-300' />
                        <h1>Javascript</h1>
                    </div>
                    <div className="bg-white p-6 rounded flex flex-col items-center space-y-3">
                        <FaReact size={40} className=' text-sky-500' />
                        <h1>React</h1>
                    </div>
                    <div className="bg-white p-6 rounded flex flex-col items-center space-y-3">
                        <FaNodeJs size={40} className=' text-green-600' />
                        <h1>Node js</h1>
                    </div>
                    <div className="bg-white p-6 rounded flex flex-col items-center space-y-3">
                        <SiMongodb size={40} className=' text-green-700' />
                        <h1>MongoDB</h1>
                    </div>
                    <div className="bg-white p-6 rounded flex flex-col items-center space-y-3">
                        <SiExpress size={40} className=' text-gray-800' />
                        <h1>express</h1>
                    </div>
                    <div className="bg-white p-6 rounded flex flex-col items-center space-y-3">
                        <SiTypescript size={40} className=' text-sky-700' />
                        <h1>Typescript</h1>
                    </div>
                    <div className="bg-white p-6 rounded flex flex-col items-center space-y-3">
                        <BiLogoPostgresql size={40} className=' text-sky-800' />
                        <h1>Postgres</h1>
                    </div>
                    <div className="bg-white p-6 rounded flex flex-col items-center space-y-3">
                        <SiNextdotjs size={40} className=' text-black' />
                        <h1>Next js</h1>
                    </div>
                    <div className="bg-white p-6 rounded flex flex-col items-center space-y-3">
                        <SiTailwindcss size={40} className=' text-sky-500' />
                        <h1>Tailwind CSS</h1>
                    </div>
                    <div className="bg-white p-6 rounded flex flex-col items-center space-y-3">
                        <FaGitAlt size={40} className=' text-orange-600' />
                        <h1>Git</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills