'use client'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useRef , useEffect, } from "react";
import ProgLang from '../../components/ProgrammingLanguage';

export default function page() {
    
  const router = useRouter();

  const searchParams = useSearchParams(); 
  const [name, setName] = useState(null);

  useEffect(() => {
    const nameQuery = searchParams.get('name');
    if (nameQuery) {
      setName(nameQuery);
    }
  }, [searchParams]); 


  const proglang=["Laravel","HTML","CSS","JQuery","MySQL","Railway"];

  return (
    <div className="px-10 ">
      {/* Back Button */}
      <div className="mb-8">
        <button
          className="font-semibold text-lg fixed top-5 left-5 hover:text-(--black)"
          onClick={() => router.back()}
        >
          &#8592; 
        </button>
      </div>


      {/* kolom 1 */}
      <div className="flex gap-10 p-8 w-full items-start lg:pt-20">
        <div className="w-full lg:w-1/2">
          <img
            src="/leluri.png"
            alt="Project Screenshot"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4">
          <div className='flex flex-col mb-2 pb-2 border-b-1 border-gray-700'>
            <p className="font-semibold  name-area text-xl md:text-3xl text-(--black)" >Leluri </p>
            <p className="text-sm md:text-lg font-semibold text-(--yellow)">Digital Cultural Community Platform </p>
          </div>          
          <div className='flex flex-col '>
            <p className=" font-semibold text-(--black)">💻 Project Type:</p>
            <span className="text-gray-300">Web Dev Competition IITC 2025</span>
          </div>
          <div className='flex flex-col '>
            <p className=" font-semibold text-(--black)">👩‍🦰 Role:</p>
            <p className="text-gray-300">Team Lead & Frontend Developer</p>
          </div>
          <div className='flex flex-col '>
            <p className=" font-semibold text-(--black)">📅 Year Accomplished:</p>
            <p className="text-gray-300">2025</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className=" font-semibold text-(--black)">⚒️ Tech Stack:</p>
            <div className='flex flex-wrap gap-4   justify-start items-start'>
              {proglang.map((languange,index)=>(
                <ProgLang key={index} lang={languange} style={"text-gray-300 "}/>
              ))}
            </div>
          </div>
            
          
        </div>
      </div>




      {/* kolom 2 */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Project Description</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 text-lg mb-4">
              Built for a web development competition with the theme “Preserving Indonesian Culture in the Digital Era.”
              While many solutions just simply focus on showcasing culture to the public, our team took a different approach
              by creating something sustainable. That’s why we created Leluri: a digital community platform where artisans,
              art studios, young generations, and culture enthusiasts can interact, collaborate, and support each other —
              making culture not just visible, but alive and ongoing.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <video className="w-full h-auto rounded-lg shadow-xl" controls>
              <source
                src="https://drive.google.com/file/d/1RzA4qnUSOQO6-vuTADqf4ch201KTUi3L/view"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Project Links */}
      <div className="flex gap-6 justify-center mb-16">
        <a
          href="https://github.com/medlynhan/Leluri"
          target="_blank"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          View on GitHub
        </a>
        <a
          href="https://leluri.vercel.app"
          target="_blank"
          className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
        >
          View Live Project
        </a>
        <a
          href="https://drive.google.com/file/d/1RzA4qnUSOQO6-vuTADqf4ch201KTUi3L/view"
          target="_blank"
          className="bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition duration-300"
        >
          Watch Demo Video
        </a>
      </div>
    </div>




  );
}
