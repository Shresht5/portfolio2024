import React, { FormEvent, useState } from 'react'
import { ImLeaf } from 'react-icons/im'

const Contact = () => {
    const [Uemail, setUemail] = useState('')
    const [Umessage, setMessage] = useState('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Uemail, Umessage })
        })
        const res = await result.json();
        console.log(res);
        setUemail('')
        setMessage('')
    }

    return (
        <div className='View space-y-10 max-w-6xl mx-auto'>
            <div className="bg-orange-400 rounded-full inline-flex items-center text-white space-x-2 py-1 px-2 ">
                <ImLeaf /> <span>Context Me</span>
            </div>
            <div className='space-y-10'>
                <div className='space-y-4 text-gray-800'>
                    <h1 className='text-justify'>
                        I'm currently open to discussing new Technologies, so feel free to reach out if there's anything you'd like to discuss. I'm also available for hire.
                    </h1>
                    <div>
                        <h1>Email me at:</h1>
                        <span className='font-semibold'>shreshtabalapure5@gmail.com</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <input type='email' name="email" value={Uemail} placeholder='Your email' onChange={(e) => { setUemail(e.target.value) }} className='w-full p-3'></input>
                    <input type='text' name='message' value={Umessage} placeholder='message' onChange={(e) => { setMessage(e.target.value) }} className='w-full p-3'></input>
                    <div className='flex justify-end'>
                        <button type='submit' className=' p-3 bg-orange-400 text-white rounded-lg '>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact