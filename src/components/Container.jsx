import React from 'react'

export default function Container({children}) {
  return (
    <div className='flex flex-col justify-self-start justify-start items-center text-justify gap-4 p-10'>
        {children}

    </div>
  )
}
