import React from 'react'


export default function ProgrammingLanguage({lang}) {
  return (
    <div className='px-3 border rounded-4xl text-(--black) hover:bg-(--yellow) hover:border-transparent'>
        <p className="font-mono sm:text-xs md:text-base lg:text-base xl:text-lg 2xl:text-xl ">{lang}</p>
    </div>
  );
}
