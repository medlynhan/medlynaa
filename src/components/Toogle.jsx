'use client';
import React, { useState } from 'react';

export default function Toogle() {

    let emojiToggle = "";

    const [isDay, setIsDay] = useState(false);
    
    function toggleClick() {
        setIsDay(!isDay);
    }

    if (isDay === true){
        emojiToggle = "☀️";
        document.documentElement.style.setProperty("--white", "#fdfcfc");
        document.documentElement.style.setProperty("--black", "#121212 ");
        document.documentElement.style.setProperty("--gray", "#303030");
        document.documentElement.style.setProperty("--yellow", "#ffd88f");
    }else{
        emojiToggle = "🌙";
        document.documentElement.style.setProperty("--white", "#121212 ");
        document.documentElement.style.setProperty("--black", "#fdfcfc");
        document.documentElement.style.setProperty("--gray", "#d9d9d9ff");
        document.documentElement.style.setProperty("--yellow", "#e0a73cff");
    }
    

    return (
        <p className="z-40 cursor-pointer fixed absolute top-2 sm:right-1 lg:left-1 bg-transparent font-mono" onClick={toggleClick}><span className='border border-(--yellow) rounded-full p-1 py-1.5'>{emojiToggle}</span></p>
      
    )
}
