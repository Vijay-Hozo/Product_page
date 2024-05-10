import React from 'react'

const Foot = () => {
    const date = new Date()
  return (
    <div>
        <footer className='bg-slate-500 text-center rounded-t-lg'>
            <p className='text-xl'>© {date.getFullYear()} Vijay Hozo</p>
        </footer>
    </div>
  )
}

export default Foot