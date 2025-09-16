'use client'
import React from 'react'
import {useParams, useRouter, useSearchParams, Suspense  } from 'next/navigation';
import { useState, useRef , useEffect, } from "react";
import ProgLang from '../../../components/ProgrammingLanguage';
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import ImageCarousel from '../../../components/ImageCarousell';
import { projectData } from '../../../data/projects';

export default function page() {
    
  const router = useRouter();
  const { ProjectName } = useParams();


  if (!ProjectName) {
    return <div className='w-screen h-screen flex justify-center items-center'>Loading...</div>;
  }

  const project = projectData[ProjectName];


  if (!project) {
    return <div className='w-screen h-screen flex justify-center items-center'>Loading...</div>;
  }

    return (
      <div className="px-10 ">
        {/* Back Button */}
        <div className="mb-8">
          <button
            className="font-semibold text-2xl md:text-4xl fixed top-5 right-5 text-gray-500 hover:text-gray-300"
            onClick={() => router.back()}
          >
            <IoCloseCircleSharp />
          </button>
        </div>


        {/* kolom 1 */}
        <div className="flex flex-col lg:flex-row gap-10 p-8 w-full items-start lg:pt-20 ">
          <ImageCarousel images={project.images}></ImageCarousel>

          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4">
            <div className='flex flex-col mb-2 pb-2 border-b-1 border-gray-700'>
            <div className='mb-2 flex flex-row gap-4 items-center'>
              <a  target="_blank" href={`${project.liveUrl}`}><p className='flex gap-2 whitespace-nowrap items-center cursor-pointer hover:text-(--yellow)'><span><IoIosLink /></span> View Live Project</p></a>
              <a  target="_blank" href={`${project.githubUrl}`}><p className='flex gap-2 whitespace-nowrap items-center cursor-pointer hover:text-(--yellow)'><FaGithub />GitHub</p></a>
              <a  target="_blank" href={`${project.videoUrl}`}><p className='flex gap-2 whitespace-nowrap items-center cursor-pointer hover:text-(--yellow)'><MdMovie />Demo Video</p></a>
            </div>
              <p className="font-semibold  name-area text-xl md:text-3xl text-(--black)" >{project.name} </p>
              <p className="text-sm md:text-lg font-semibold text-(--yellow)">{project.description}</p>
            </div>          
            <div className='flex flex-col '>
              <p className=" font-semibold text-(--black)">💻 Project Type:</p>
              <span className="text-gray-300">{project.type}</span>
            </div>
            <div className='flex flex-col '>
              <p className=" font-semibold text-(--black)">👩‍🦰 Role:</p>
              <p className="text-gray-300">{project.role}</p>
            </div>
            <div className='flex flex-col '>
              <p className=" font-semibold text-(--black)">📅 Year Accomplished:</p>
              <p className="text-gray-300">{project.year}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className=" font-semibold text-(--black)">⚒️ Tech Stack:</p>
              <div className='flex flex-wrap gap-4   justify-start items-start'>
                {project.techStack.map((languange,index)=>(
                  <ProgLang key={index} lang={languange} style={"text-yellow-500 border-yellow-500"}/>
                ))}
              </div>
            </div>
              
            
          </div>
        </div>




        {/* kolom 2 */}
        <div className="flex flex-col md:flex-row h-full  gap-10 p-8 w-full items-start lg:py-20 pb-10  ">
          
        
                {/*challenge */}
                <div className='flex flex-col gap-2'>
                  <h3 className="font-semibold  name-area text-base md:text-xl text-(--black) ">Challenge:</h3>
                  <p className="text-gray-300 text-justify">
                        {project.challenge}
                  </p>
                </div>
                {/*solution */}
                <div className='flex flex-col gap-2'>
                  <h3 className="font-semibold  name-area text-base md:text-xl text-(--black) ">Solution:</h3>
                  <p className="text-gray-300 text-justify">
                        {project.solution}
                  </p>
                </div>
        </div>

</div>



    );
  

  
}
