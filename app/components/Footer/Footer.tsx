import React from 'react'
import Image from 'next/image';
import logo from '../../../public/images/default.png';

const Footer = () => {
  return (
    <div className="w-full bg-[393E46] text-black flex items-center justify-center gap-4">
     
        <Image className="max-w-sm h-auto-" src={logo} alt="logo"/>
        <h1>"Discover, Shop, and Connect – Your Ultimate Ecommerce Experience with BazaarLife!"</h1>
       
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