import React from 'react'


export default function ProgrammingLanguage({lang, isHovered}) {
  return (
    <div className={`px-3 border rounded-4xl text-(--black) ${isHovered ? 'bg-(--yellow) border-transparent' : 'bg-(--transparent) border'} `}>
        <p className="font-mono sm:text-xs md:text-base lg:text-base xl:text-lg 2xl:text-xl ">{lang}</p>
    </div>
  );
}
