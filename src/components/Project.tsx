import React from 'react'
import { ImLeaf } from 'react-icons/im'

const Project = () => {
    return (
        <div className='space-y-10'>
            <div className="bg-orange-400 rounded-full inline-flex items-center text-white space-x-2 py-1 px-2 ">
                <ImLeaf /> <span>Some Of My Work</span>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='bg-white'>
                    sd
                </div>
                <div className='bg-white'>
                    sd
                </div>
                <div className='bg-white'>
                    sd
                </div>
            </div>
        </div>
    )
}

export default Project