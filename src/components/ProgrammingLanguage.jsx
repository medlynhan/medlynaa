import React from 'react'


export default function ProgrammingLanguage({lang, isHovered}) {
  return (
    <div className={`px-3 border rounded-4xl text-(--black) ${isHovered ? 'border-(--yellow) ' : 'border-(--black)'} `}>
        <p className={`font-mono xs:text-base sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl text-(--gray) ${isHovered ? 'text-(--yellow) ' : 'text-(--black)'} `}>{lang}</p>
    </div>
  );
}
