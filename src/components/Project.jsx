import React, {useState} from 'react';
import ProgLang from './ProgrammingLanguage';
import Image from "next/image";
export default function Project({title,description,proglang, link}) {
  
  const [isHovered, setHover] = useState(false);

  function goToProject() {
    window.open(link, "_blank");
  };

  return (
    <div className='flex flex-col gap-6 border-1 border p-6 cursor-pointer rounded-sm transition duration-200 ease-in-out  hover:scale-102 hover:border-(--yellow) hover:shadow-md hover:shadow-(--yellow)' onMouseEnter={() => setHover(true)} onMouseLeave={ () => setHover(false)} onClick={() => goToProject()}>
        <p className={`font-mono  xs:text-lg md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-semibold ${isHovered ? 'text-(--yellow)' : ''}`}>{title} <span className={`px-1 py-0.5 opacity-100 `}>↗</span></p>
        <Image src="/tapaknusa.png" alt="Madeline Profile" width={250} height={100} className="rounded-sm" />
        <p className="projectDescription xs:text-lg md:text-lg lg:text-base xl:text-lg 2xl:text-xl ">{description}</p>
        <div className='flex justify-center items-center gap-4 justify-start items-start'>
           {proglang.map((languange,index)=>(
              <ProgLang key={index} lang={languange} isHovered={isHovered}/>
           ))}
        </div>
    </div>
    
  )
}
