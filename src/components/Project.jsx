import React from 'react';
import ProgLang from './ProgrammingLanguage';

export default function Project() {
  return (
    <div>
        <p className="projectName">Tapaknusa</p>
        <p className="projectDescription">An innovative e-commerce platform that promotes attractions and festivals in Indonesia, making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to experience and appreciate the beauty of local traditions and festivals.</p>
        <div className='flex justify-center items-center gap-4'>
            <ProgLang lang="Laravel" />
            <ProgLang lang="HTML" />
            <ProgLang lang="CSS" />
            <ProgLang lang="Jquery" />
            <ProgLang lang="MySQL" />
        </div>
    </div>
  )
}
