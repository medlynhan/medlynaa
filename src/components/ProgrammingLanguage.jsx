import React from 'react'


export default function ProgrammingLanguage({lang, isHovered, style, textStyle}) {
  return (
    <div className={` px-3 inline-block border rounded-4xl  text-gray-200 ${isHovered ? 'border-yellow-600 ' : 'border-gray-500'} ${style}`}>
        <p className={`text-sm text-center whitespace-nowrap transition duration-300 ease-in-out  ${isHovered ? 'text-yellow-600 ' : 'text-gray-200 '} ${textStyle}`}>{lang}</p>
    </div>
  );
}
