import { title } from 'process';
import React from 'react'
import Image from 'next/image';

type buttonProps = {
    type : 'button' | 'submit';
    title : string;
    icon? : string;
    variant : string;
    full? : boolean
}
const Button = ({type,title,icon,variant,full }: buttonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'} `}>
        {icon && <Image src={icon} alt='Button' width={24} height={24}/>}
        <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button