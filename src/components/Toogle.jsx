'use client';
import React, { useState, useEffect } from 'react';

export default function Toogle() {


    const [isDay, setIsDay] = useState(false);
    const [emojiToggle, setEmojiToggle] = useState("🌙");
    function toggleClick() {
        setIsDay(!isDay);
    }

    useEffect(() => {
        if (isDay === true){
            setEmojiToggle("☀️");
            document.documentElement.style.setProperty("--white", "#fdfcfc");
            document.documentElement.style.setProperty("--black", "#121212 ");
            document.documentElement.style.setProperty("--gray", "#303030");
            document.documentElement.style.setProperty("--yellow", "#ebad3aff");
        }else{
            setEmojiToggle("🌙");
            document.documentElement.style.setProperty("--white", "#121212 ");
            document.documentElement.style.setProperty("--black", "#fdfcfc");
            document.documentElement.style.setProperty("--gray", "#d9d9d9ff");
            document.documentElement.style.setProperty("--yellow", "#e0a73cff");
        }
    }, [isDay]);

    return (
        <p className="z-40 cursor-pointer fixed absolute top-2 xs:right-1 bg-transparent font-mono" onClick={toggleClick}><span className='border border-(--yellow) rounded-full p-0.5 py-1'>{emojiToggle}</span></p>
      
    )
}
