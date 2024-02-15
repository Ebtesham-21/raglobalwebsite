import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flexbetween max-container px-12 z-30 py-2 shadow-xl bg-white rounded-full ring-1 ring-slate-100 fixed w-[95%] left-[50%] top-1 translate-x-[-50%] '>
      <Link href="/" className='bold-28'>
        <span>Logo</span>
      </Link>
      <ul className='hidden lg:flex h-full '>
          {
            
          }
      </ul>
    </nav>
  )
}

export default Navbar
