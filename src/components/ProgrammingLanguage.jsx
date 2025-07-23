import React from 'react'


export default function ProgrammingLanguage({lang}) {
  return (
    <div className='p-1 px-3 border rounded-4xl bg-(--lightYellow)'>
        <p className="font-mono sm:text-xs md:text-base lg:text-base xl:text-lg 2xl:text-xl">{lang}</p>
    </div>
  );
}
