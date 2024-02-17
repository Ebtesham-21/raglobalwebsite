import { NAV_LINKS } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container px-12 z-30 py-2 shadow-xl bg-white rounded-full ring-1 ring-slate-100 fixed w-[95%] left-[50%] top-1 translate-x-[-50%] '>
      <Link href="/" className='bold-28'>
        <span>Logo</span>
      </Link>
      <ul className='hidden lg:flex h-full '>
        {
          NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className='flex mx-8 relative text-gray-50'
            >
              <Image
                src={link.iconURL}
                alt={link.label}
                height={20}
                width={20}
                className='h-auto w-4'
              />
              {link.label}
            </Link>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar
