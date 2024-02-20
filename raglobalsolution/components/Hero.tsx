import React from 'react'
import Button from './Button'
import { CATEGORIES } from '@/constant'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative bg-hero bg-cover bg-center bg-no-repeat h-[100vh] w-full z-10 pb-12  '>
      <div className='max-container padding-container  relative top-28 sm:top-1/3 z-10'>
        <h1 className='bold-44 sm:bold-64 text-black capitalize max-w-[36rem]'>Explore The World With Us</h1>
        <p className='regular-16 mt-6 text-black lg:w-1/2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus recusandae distinctio nihil suscipit iusto eius, eos, rerum, culpa autem nam adipisci? Tenetur cumque molestias nulla, eius labore alias? Vero, omnis?
        </p>
        <div className='mt-8'>
            <Button
            type="button"
            title="Travel Plan"
            icon="send-plane.svg"
            variant="btn_white_rounded"
            />
        </div>
        <h4 className='text-black my-4 bold-22'>
          Explore the key points
        </h4>
        <ul className='flex flex-wrap gap-4'>
          {
            CATEGORIES.map((category) => (
              <CategoryItem
              key={category.title}
              title={category.title}
              />
            )

            )
          }

        </ul>

      </div>
    </section>
  )
}

type CategoryItem = {
  title: string; 
  icon: string;
}
const CategoryItem = ({title, icon }: CategoryItem) => {
  return (
    <Link href="/" className='bg-black flex-center gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[2px]
    transition-all duration-500 rounded-md
    '>
      <Image src={icon} alt="icon" height={32} width={22} className="regular-28" />
      <span>
        {title}
      </span>
    </Link>
  )
}

export default Hero
