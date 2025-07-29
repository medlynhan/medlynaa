import React from 'react'


export default function ProgrammingLanguage({lang, isHovered}) {
  return (
    <div className={`px-3 border rounded-4xl text-(--black) ${isHovered ? 'border-(--yellow) ' : 'border-(--black)'} `}>
        <p className={`text-sm text-center ${isHovered ? 'text-(--yellow) ' : 'text-(--black)'} `}>{lang}</p>
    </div>
  );
}
