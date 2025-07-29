import React, {useState} from 'react';
import ProgLang from './ProgrammingLanguage';
import Image from "next/image";
export default function Project({title,children,proglang, link}) {
  
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
          className="rounded-sm"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-sm"></div>
      </div>
    );
  }

  return (
    <div className='project hover:scale-102 hover:border-(--yellow) hover:shadow-md hover:shadow-(--yellow)' onMouseEnter={() => setHover(true)} onMouseLeave={ () => setHover(false)} onClick={() => goToProject()}>
        
        <p className={`font-mono font-medium text-lg ${isHovered ? 'text-(--yellow)' : 'text-(--black)'}`}>{title} ↗</p>
        
        <div className='flex flex-col justify-center items-center gap-6 md:flex-row '>
          <div  className="bg-(--white) rounded-sm md:min-w-[15em]">
            <Image src="/tapaknusa.png" alt="Madeline Profile" width={250} height={100} className={`rounded-sm ${isHovered ? 'opacity-75' : 'opacity-100'}`} />
          </div>
          {children }
        </div>

        

        <div className='grid grid-cols-[repeat(auto-fit,_minmax(5em,_1fr))] gap-4 justify-start items-start'>
           {proglang.map((languange,index)=>(
              <ProgLang key={index} lang={languange} isHovered={isHovered}/>
           ))}
        </div> 

    </div>
    
  )
}
