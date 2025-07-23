import React from 'react'
import { FaLinkedin, FaGithub , FaInstagram  } from "react-icons/fa";

export default function Icon() {
  return (
       <div className='flex justify-start items-start gap-6'>
            <FaLinkedin className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl cursor-pointer font-semibold hover:text-(--yellow) transition duration-200 ease-in-out  '/>
            <FaGithub className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl cursor-pointer font-semibold hover:text-(--yellow) transition duration-200 ease-in-out '/>
            <FaInstagram className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl cursor-pointer font-semibold hover:text-(--yellow) transition duration-200 ease-in-out '/>
       </div>
  );
};
