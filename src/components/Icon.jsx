import React from 'react'
import { FaLinkedin, FaGithub , FaInstagram  } from "react-icons/fa";

export default function Icon() {
  return (
       <div className='flex justify-center items-center gap-4'>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
       </div>
  );
};
