import React from 'react'
import Image from 'next/image';
import logo from '../../../public/assets/logo/favicon.png';

const Footer = () => {
  return (
    <div className="w-full bg-[393E46] text-black flex items-center justify-center gap-4">
     
        <Image className="max-w-sm h-auto-" src={logo} alt="logo"/>
       
       
       <p className="text-sm">
            All Rights Reserved{" "}
            <a className="hover: text-gray-700 hover:underline decoration-{1px] cursor-pointer duration-300"
            href="https://bazaarlife.com"
            target="_blank" >
                @bazaarlife.com
            </a>
        </p>
       
       
    </div>
  )
}

export default Footer