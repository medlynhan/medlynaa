import React from 'react'
import { FaLinkedin, FaGithub , FaInstagram  } from "react-icons/fa";

export default function Icon() {
  return (
       <div className='flex justify-start items-start gap-6'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/madelinehandoyo/" className='no-underline text-inherit cursor-auto'><FaLinkedin className='text-(--black) xs:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl cursor-pointer font-semibold hover:text-(--yellow) transition duration-200 ease-in-out  '/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/medlynhan" className='no-underline text-inherit cursor-auto'><FaGithub className='text-(--black) xs:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-5xl cursor-pointer font-semibold hover:text-(--yellow) transition duration-200 ease-in-out '/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/madelinehan_/" className='no-underline text-inherit cursor-auto'><FaInstagram className='text-(--black) xs:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl cursor-pointer font-semibold hover:text-(--yellow) transition duration-200 ease-in-out '/></a>
       </div>
  );
};
