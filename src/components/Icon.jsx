import React from 'react'
import { FaLinkedin, FaGithub , FaInstagram  } from "react-icons/fa";

export default function Icon() {
  return (
       <div className='flex flex-row justify-start items-start gap-6'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/madelinehandoyo/" className='no-underline text-inherit cursor-auto'><FaLinkedin className='icon hover:text-(--yellow)'/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/medlynhan" className='no-underline text-inherit cursor-auto'><FaGithub className='icon hover:text-(--yellow)'/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/madelinehan_/" className='no-underline text-inherit cursor-auto'><FaInstagram className='icon hover:text-(--yellow)'/></a>
       </div>
  );
};
