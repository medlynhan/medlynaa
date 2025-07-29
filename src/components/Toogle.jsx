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
            document.documentElement.style.setProperty("--black", "#000000ff ");
            document.documentElement.style.setProperty("--gray", "#303030");
            document.documentElement.style.setProperty("--yellow", "#db8e00ff");
        }else{
            setEmojiToggle("🌙");
            document.documentElement.style.setProperty("--white", "#000000 ");
            document.documentElement.style.setProperty("--black", "#fdfcfc");
            document.documentElement.style.setProperty("--gray", "#bdbdbdff");
            document.documentElement.style.setProperty("--yellow", "#eec06aff");
        }
    }, [isDay]);

    return (
        <p className="toogle" onClick={toggleClick}><span className='border border-(--yellow) rounded-full p-1 '>{emojiToggle}</span></p>
      
    )
}
