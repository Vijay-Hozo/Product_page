import React from 'react'
import logo from '../assets/images/logo.png'


const Navbar = () => {
  
  const links = [
    {
      id:1,
      child: (<button>Women</button>),
      link : 'wwww.google.com',
    },
    {
      id:2,
      child: (<button>Men</button>),
      link : 'https://github.com/Vijay-Hozo',
    },
    {
      id:3,
      child: (<button>Kids</button>),
      link:'https://www.linkedin.com/in/vijay-hozo-7b3b3a1b3/'
    },
    {
      id:4,
      child: (<button>Branding</button>),
      link : 'https://www.instagram.com/vijay_hozo/'
    }
  ]
  return (
    <div className='flex justify-between bg-slate-500 w-full rounded-b-lg sticky top-0'>
      <img src={logo} className='w-14 h-14' alt="logo" />
      <nav>
        <ul className='flex justify-center gap-8 mt-4'>
          {links.map(({id,link,child})=>(
              <li
              key={id}>
              <a 
                href={link}>
                  {child}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
      <div className='flex justify-center my-3'>
        <input type='text' placeholder='Search' className=' w-full text-gray-900 rounded-2xl'/>
        <button type="submit" className='absolute bg-blue-400 ml-28 rounded-r-2xl px-3 py-1 z-10'>Explore</button>
      </div>
      <div className=' flex gap-8 justify-center mr-2'>
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar