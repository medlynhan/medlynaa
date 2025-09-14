import React from 'react'


export default function ProgrammingLanguage({lang, isHovered}) {
  return (
    <div className={`px-3 inline-block border rounded-4xl  text-(--black) ${isHovered ? 'border-(--yellow) ' : 'border-gray-500'} `}>
        <p className={`text-sm text-center whitespace-nowrap transition duration-300 ease-in-out  ${isHovered ? 'text-(--yellow) ' : 'text-(--black)'} `}>{lang}</p>
    </div>
  );
}
