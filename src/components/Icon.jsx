import React from 'react'
import { FaLinkedin, FaGithub , FaInstagram  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Icon() {
  return (
       <div className='flex flex-row justify-start items-start gap-6'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/madelinehandoyo/" className='no-underline text-inherit cursor-auto'><FaLinkedin className='icon lg:text-3xl hover:text-(--yellow) transition duration-150'/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/medlynhan" className='no-underline text-inherit cursor-auto'><FaGithub className='icon lg:text-3xl hover:text-(--yellow) transition duration-150'/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=midiline30@gmail.com" className='no-underline text-inherit cursor-auto'><MdEmail className='icon lg:text-3xl hover:text-(--yellow) transition duration-150'/></a>
       </div>
  );
};
