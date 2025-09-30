import React, {useState} from 'react';
import ProgLang from './ProgrammingLanguage';
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaTrophy } from "react-icons/fa";

export default function Project({title,proglang, link, imageLink,projectType, achievement,description, onClick, type}) {
  
  const [isHovered, setHover] = useState(false);

  function goToProject() {
    window.open(link, "_blank");
  };

  const ImageWithOverlay = () => {
    return (
      <div className="relative inline-block group">
        <Image
          src="/tapaknusa.png"
          alt="Madeline Profile"
          width={250}
          height={100}
          className="rounded-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>
      </div>
    );
  }

  return (
    <div 
      className='text-(--gray) border-gray-700 project  hover:bg-gray-800/20  rounded-lg hover:scale-102  transition duration-300 ease-in-out  hover:shadow-md hover:shadow-(--yellow)' 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={ () => setHover(false)} 
      onClick={onClick}
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >

        
        <div className='flex justify-between '>
          <div className='flex gap-2   items-center '>
            <p className={`font-mono  font-semibold text-base  ${isHovered ? 'text-yellow-600' : 'text-gray-200'}`}>{title} </p>
            <p className={` ${isHovered ? 'text-yellow-600 -translate-y-1 '  : 'text-gray-200'}`}><BsArrowUpRight/></p>
          </div>
          <div className={`hidden text-black  border  ${isHovered ? '  bg-yellow-600' : 'bg-gray-400/50'} rounded-sm px-3 sm:flex justify-center gap-1 items-center`}>
            <GoDotFill className='text-[0.5rem]'/>
            <p className='text-[0.7rem] font-semibold'>{type} Project</p>
          </div>
        </div>
        
        
        <div className='flex flex-col justify-center items-center gap-6 lg:flex-row '>
          <div  className=" rounded-lg lg:min-w-[15em]">
            <Image src={imageLink} alt="Madeline Profile" width={250} height={100} className={`rounded-lg ${isHovered ? 'opacity-100' : 'opacity-100'}`} />
          </div>
          <div className='flex gap-4 flex-col text-start md:text-justify'>
            {achievement && (<div className='text-sm font-semibold flex items-center gap-2 text-yellow-600'><FaTrophy/> <p>{achievement}</p></div>)}
            <div className='text-sm font-semibold'>{projectType}</div>
            <div className='text-sm'>{description}</div>
          </div>
        </div>

        

        <div className='hidden flex-wrap gap-4  justify-start items-start md:flex'>
           {proglang.map((languange,index)=>(
              <ProgLang key={index} lang={languange} isHovered={isHovered} style={"text-yellow-600"}/>
           ))}
        </div> 

    </div>
    
  )
}
