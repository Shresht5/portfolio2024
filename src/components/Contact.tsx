import React, { useState } from 'react'
import { ImLeaf } from 'react-icons/im'

const Contact = () => {
    const [Uemail, setUemail] = useState('')
    const [message, setMessage] = useState('')
    return (
        <div className='space-y-10 max-w-6xl mx-auto'>
            <div className="bg-orange-400 rounded-full inline-flex items-center text-white space-x-2 py-1 px-2 ">
                <ImLeaf /> <span>Context Me</span>
            </div>
            <div className='space-y-10'>
                <div className='space-y-4 text-gray-800'>
                    <h1>
                        I'm currently open to taking on new projects, so feel free to reach out if there's anything you'd like to discuss. I'm also available for hire.
                    </h1>
                    <div>
                        <h1>Email me at:</h1><span>shreshtabalapure5@gmail.com</span>
                    </div>
                </div>
                <form className='space-y-4'>
                    <input type='email' value={Uemail} placeholder='Your email' onChange={(e) => { setUemail(e.target.value) }} className='w-full p-3'></input>
                    <input type='text' value={message} placeholder='message' onChange={(e) => { setMessage(e.target.value) }} className='w-full p-3'></input>
                    <div className='flex justify-end'>
                        <button className=' p-3 bg-orange-400 text-white rounded-lg '>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact