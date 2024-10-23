import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import { link } from 'fs'

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex flex-col w-full gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
          <Image src="/hilink-logo.svg" alt='logo' width={75} height={30}/>
          </Link>
          <div className='flex flex-wrap gap-4 sm:justify-between md:flex-1'>
            {
              FOOTER_LINKS.map((columns) => (
                <FooterColumns title={columns.title} >
                  <ul className='regular-24 flex flex-col gap-4 text-gray-30'>
                    {columns.links.map((link)=>(
                    <Link href="/" key={link} className='flex gap-4 md:flex-col lg:flex-row'>
                      {link}
                    </Link>
                    ))}
                  </ul>
                </FooterColumns>
              ))
            }
          </div>
          <div className='flex flex-col gap-4'>
            
              <FooterColumns title={FOOTER_CONTACT_INFO.title}>
               {FOOTER_CONTACT_INFO.links.map((info)=>(
                 <Link href="/" key={info.label}>
                  <p className='whitespace-nowrap'>{info.label}</p>
                  <p className='medium-14 whitespace-nowrap text-blue-70'>{info.value}</p>
                </Link>
               ))}
              </FooterColumns>
            
          </div>
          <div className='flex flex-col'>
            <FooterColumns title={SOCIALS.title}>
              <ul className='regular-14 flex gap-4 text-gray-30'>
                {
                  SOCIALS.links.map((social)=>(
                    <Link href="/" key={social}>
                      <Image src={social} alt='logo' width={24} height={24}/>
                    </Link>
                  ))
                }
              </ul>
            </FooterColumns>
          </div>
        </div>
        <div className='border bg-gray-20'/>
        <p className='regular-14 w-full text-center text-gray-30'>2024 | All Rigths Reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnsProps ={
  
  title : string;
  children : React.ReactNode
}

const FooterColumns = ({title,children} : FooterColumnsProps) => {
  return(
    <div className='flex flex-col gap-5'>
      <h4 className='bold-20 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
    
  )
}
export default Footer