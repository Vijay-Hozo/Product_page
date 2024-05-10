import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around bg-slate-500 '>
        <div className='mt-5'>
            <h1 className='font-bold text-2xl'>Get To Know Us</h1>
            <ul className='ml-7 text-xl text-center'>
                <li><a href="">Careers</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Press Releases</a></li>
            </ul>
        </div>
            <div className='mt-5'>
                <h1 className='font-bold text-2xl'>Connect with Us</h1>
                <ul className='ml-7 text-xl text-center'>
                <li><a href="">Github</a></li>
                <li><a href="">Linkedin</a></li>  
                <li><a href="">Instagram</a></li>
                </ul>
        </div>
    </div>
  )
}

export default Footer