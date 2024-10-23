import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import { title } from 'process'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container z-30 py-5'>
        <Link href="./">
            <Image src="/hilink-logo.svg" alt='logo of hilink' width={79} height={29} />
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((item) => (
                <Link href={item.href} key={item.key} className='regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold'>
                    {item.label}
                </Link>
            ))}
        </ul>
        <div className='lg:flexCenter hidden'>
            <Button 
            type="button"
            title="Login"
            icon = "/user.svg"
            variant = "btn_dark_green"
            />
        </div>
        <div>
        <Image src='/menu.svg' alt='hamburger' width={34} height={34} className='lg:hidden cursor-pointer inline-block'/>
        </div>
    </nav>
  )
}

export default Navbar