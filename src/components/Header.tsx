import React from 'react'
import { HiDownload } from 'react-icons/hi'
import { IoMail } from 'react-icons/io5'

const header = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 px-3 py-2 ">
                <IoMail className="text-orange-400" title='shreshtabalapre5@gmail.com' />
                <span className='hidden sm:block'>shreshtabalapure5@gmail.com</span>
            </div>
            <a href="/resume/sep2024.pdf" download="Shresht_Resume.pdf">
                <button className="flex items-center px-3 py-2 space-x-2 rounded-lg  text-white bg-orange-400">
                    <HiDownload />
                    <span>Resume</span>
                </button>
            </a>
        </div>
    )
}

export default header