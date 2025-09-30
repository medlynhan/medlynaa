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
import { motion } from "framer-motion";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { IoCaretForwardOutline } from "react-icons/io5";

export default function page() {
    
  const router = useRouter();
  const { ProjectName } = useParams();


  if (!ProjectName) {
    return <div className='w-screen h-screen flex justify-center items-center'>Loading...</div>;
  }

  const project = projectData[ProjectName];



    // Get all project names
  const projectNames = Object.keys(projectData);

  // Find the current project index
  const currentIndex = projectNames.indexOf(ProjectName);

  // Get the next project name (circular navigation, i.e., from last back to first)
  const nextProject = projectNames[(currentIndex + 1) % projectNames.length];

  const handleNextProject = () => {
    // Navigate to the next project
    router.push(`/detailProject/${nextProject}`);
  };

  
  const [challengeClicked, setChallengeClicked] = useState(true);
  const [solutionClicked, setSolutionClicked] = useState(false);
  const [contributionClicked, setContributionClicked] = useState(false);
  const [resultClicked, setResultClicked] = useState(false);

  // Logic untuk menentukan judul dan isi berdasarkan state
  const getTitleAndContent = () => {
    if (challengeClicked) {
      return { title: ' Challenge', content: project.challenge };
    } else if (solutionClicked) {
      return { title: ' Solution', content: project.solution };
    } else if (contributionClicked) {
      return { title: ' My Contribution', content: project.highlights };  // Pastikan project.contribution sudah ada di data
    } else if (resultClicked) {
      return { title: ' Result & Reflection', content: project.result };  // Pastikan project.result sudah ada di data
    } 
    return { title: '', content: '' };
  };

  const { title, content } = getTitleAndContent();

  if (!project) {
    return <div className='w-screen h-screen flex justify-center items-center'>Loading...</div>;
  }



    return (

      <motion.div 
        className="md:px-10 max-w-screen "
        initial={{ opacity: 0, y: 100, rotateX: 10 }} // Mulai dari bawah dan sedikit miring
        animate={{ opacity: 1, y: 0, rotateX: 0 }} // Animasi bergerak ke atas dan kembali ke posisi normal
        transition={{ duration: 0.8, ease: "easeOut" }} // Durasi dan efek easing
      >
        {/* Back Button */}
        <div className="mb-8">
          <button
            className="font-semibold text-3xl md:text-4xl fixed top-5 right-5 z-50 text-(--gray) hover:text-(--gray) cursor-pointer transition-all duration-300 "
            onClick={() => router.push('/')}
          >
            <IoCloseCircleSharp />
          </button>
        </div>


        {/* kolom 1 */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10 p-8 w-full h-full lg:pt-20 ">
          <div className='w-full lg:w-1/2 flex flex-col justify-center items-center gap-4  h-full '>
            <ImageCarousel images={project.images}></ImageCarousel>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4 ">
            <div className='flex flex-col mb-2 pb-2 border-b-1 border-gray-700'>
            <div className='mb-2 md:flex hidden  flex-row gap-4 items-center'>
              {project.liveUrl && (<a  target="_blank" href={`${project.liveUrl}`}><p className='flex gap-2 whitespace-nowrap items-center cursor-pointer hover:text-yellow-600'><span><IoIosLink /></span> View Live Project</p></a>)}
              {project.githubUrl && (<a  target="_blank" href={`${project.githubUrl}`}><p className='flex gap-2 whitespace-nowrap items-center cursor-pointer  hover:text-yellow-600'><FaGithub />GitHub</p></a>)}
              {project.videoUrl && (<a  target="_blank" href={`${project.videoUrl}`}><p className='flex gap-2 whitespace-nowrap items-center cursor-pointer hover:text-yellow-600'><MdMovie />Demo Video</p></a>)}
            </div>
              <p className="font-semibold  name-area text-lg sm:text-xl md:text-3xl text-gray-200" >{project.name} </p>
              <p className=" md:text-lg  text-yellow-600 font-semibold">{project.description}</p>
            </div>          
            <div className='flex flex-col '>
              <p className=" font-semibold text-gray-200"> Project Type:</p>
              <span className="text-(--gray)">{project.type}</span>
            </div>
            <div className='flex flex-col '>
              <p className=" font-semibold text-gray-200"> Role:</p>
              <p className="text-(--gray)">{project.role}</p>
            </div>
            <div className='flex flex-col '>
              <p className=" font-semibold text-gray-200"> Year Accomplished:</p>
              <p className="text-(--gray)">{project.year}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className=" font-semibold text-gray-200"> Tech Stack:</p>
              <div className='flex flex-wrap gap-4   justify-start items-start'>
                {project.techStack.map((languange,index)=>(
                  <ProgLang key={index} lang={languange} style={"text-yellow-600 border-yellow-600"} textStyle={"text-gray-200"}/>
                ))}
              </div>
            </div>
              
            
          </div>
        </div>

        
        {/* kolom 2  (md)*/}
        <div 
            className="flex lg:hidden flex-col h-full gap-10  justify-start lg:flex-row kolom-2  lg: rounded-md border-gray-700 w-full  px-8 "

        >
          <div className='h-full w-full flex flex-col gap-6 justify-start  items-end '>
            {/* Challange*/}
            <div className="flex flex-col gap-2 lg:w-4/6 ">
              <h3 className="font-semibold name-area text-base md:text-xl text-gray-200  pb-3 border-b-1 border-gray-700   ">Challenge</h3>
              {Array.isArray(project.challenge) ? (
                <ul className="list-disc list-inside text-(--gray) space-y-1">
                  {project.challenge.map((item, idx) => (
                    <li key={idx} className="whitespace-normal leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-(--gray) text-start md:text-justifyt">{project.challenge}</p>
              )}
            </div>
            {/* Solutions*/}
            <div className="flex flex-col gap-2 lg:w-4/6 ">
              <h3 className="font-semibold name-area text-base md:text-xl text-gray-200  pb-3 border-b-1 border-gray-700   ">Solution</h3>
              {Array.isArray(project.solution) ? (
                <ul className="list-disc list-inside text-(--gray) space-y-1">
                  {project.solution.map((item, idx) => (
                    <li key={idx} className="whitespace-normal leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-(--gray) text-start md:text-justifyt">{project.solution}</p>
              )}
            </div>
          </div>
            {/* My Contribution*/}
            <div className="flex flex-col gap-2 lg:w-4/6 ">
              <h3 className="font-semibold name-area text-base md:text-xl text-gray-200 pb-3 border-b-1 border-gray-700  ">My Contribution</h3>
              {Array.isArray(project.highlights) ? (
                <ul className="list-disc list-inside text-(--gray) space-y-1">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="whitespace-normal leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-(--gray) text-start md:text-justifyt">{project.highlights}</p>
              )}
            </div>
            {/* Challange*/}
            <div className="flex flex-col gap-2 lg:w-4/6 ">
              <h3 className="font-semibold name-area text-base md:text-xl text-gray-200  pb-3 border-b-1 border-gray-700  ">Result & Reflection</h3>
              {Array.isArray(project.result) ? (
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {content.map((item, idx) => (
                    <li key={idx} className="whitespace-normal leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-start md:text-justifyt">{project.result}</p>
              )}
            </div>
        </div>
      


        {/* kolom 2  (lg)*/}
        <motion.div 
            className=" hidden  lg:flex relative h-[50vh] pt-4  lg:pt-0 px-8 "
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
        
        {/* Sidebar */}
        <div className="lg:flex font-semibold  hidden gap-6 flex-col justify-start absolute pt-12 h-full  rounded-md  ">
          {/* Challenge */}
          <div className={`flex font-semibold items-center gap-6 transition duration-150 cursor-pointer hover:text-yellow-600 ${challengeClicked ? "text-yellow-600" : ""}`}>
            <p className={`text-(--white)  transition duration-150 ${challengeClicked ? "text-yellow-600" : "text-(--white)"}`}><IoCaretForwardOutline /></p>
            <p onClick={() => {
              setChallengeClicked(true);
              setSolutionClicked(false);
              setContributionClicked(false);
              setResultClicked(false);
           
            }}> Challenge</p>
          </div>
          
          {/* Solution */}
          <div className={`flex items-center gap-6 transition duration-150 cursor-pointer hover:text-yellow-600 ${solutionClicked ? "text-yellow-600" : ""}`}>
            <p className={`text-(--white) transition duration-150 ${solutionClicked ? "text-yellow-600" : "text-(--white)"}`}><IoCaretForwardOutline /></p>
            <p onClick={() => {
              setChallengeClicked(false);
              setSolutionClicked(true);
              setContributionClicked(false);
              setResultClicked(false);
              
            }}> Solution</p>
          </div>
          
          {/* My Contribution */}
          <div className={`flex items-center gap-6 transition duration-150 cursor-pointer hover:text-yellow-600 ${contributionClicked ? "text-yellow-600" : ""}`}>
            <p className={`text-(--white) transition duration-150 ${contributionClicked ? "text-yellow-600" : "text-(--white)"}`}><IoCaretForwardOutline /></p>
            <p onClick={() => {
              setChallengeClicked(false);
              setSolutionClicked(false);
              setContributionClicked(true);
              setResultClicked(false);
             
            }}> My Contribution</p>
          </div>
          
          {/* Result */}
          <div className={`flex items-center gap-6 transition duration-150 cursor-pointer hover:text-yellow-600 ${resultClicked ? "text-yellow-600" : ""}`}>
            <p className={`text-(--white) transition duration-150 ${resultClicked ? "text-yellow-600" : "text-(--white)"}`}><IoCaretForwardOutline /></p>
            <p onClick={() => {
              setChallengeClicked(false);
              setSolutionClicked(false);
              setContributionClicked(false);
              setResultClicked(true);

            }}> Result & Reflection</p>
          </div>
          
        </div>

        {/* Content Area */}
        <div className="flex  flex-col h-full  justify-start lg:flex-row kolom-2  lg: rounded-md border-gray-700 w-full ">
          <div className='h-full w-full flex flex-col justify-start pt-12 items-end '>
            {/* Judul dan Konten Berdasarkan State */}
            <motion.div
              className="flex flex-col gap-2 lg:w-4/6 "
              key={title} // Memastikan animasi terjadi ketika konten berubah
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-semibold name-area text-base md:text-xl text-gray-200 pb-3 ">{title}</h3>
              
              {Array.isArray(content) ? (
                <ul className="list-disc list-inside text-(--gray) space-y-1">
                  {content.map((item, idx) => (
                    <li key={idx} className="whitespace-normal leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-(--gray) text-start md:text-justify">{content}</p>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
        
        <div className='p-8 flex flex-col sm:flex-row md:hidden justify-start items-start gap-4 mt-10'>
              {project.liveUrl && (<a  target="_blank" href={`${project.liveUrl}`}><p className='flex gap-2 whitespace-nowrap items-center cursor-pointer text-gray-200 hover:text-yellow-600'><span><IoIosLink /></span> View Live Project</p></a>)}
              {project.githubUrl && (<a  target="_blank" href={`${project.githubUrl}`}><p className='flex gap-2 whitespace-nowrap items-center cursor-pointer text-gray-200 hover:text-yellow-600'><FaGithub />GitHub</p></a>)}
              {project.videoUrl && (<a  target="_blank" href={`${project.videoUrl}`}><p className='flex gap-2 whitespace-nowrap items-center cursor-pointer text-gray-200 hover:text-yellow-600'><MdMovie />Demo Video</p></a>)}
        </div>
        <div  onClick={handleNextProject} className='lg:pt-8 pb-8 text-gray-200 px-8 flex justify-start md:justify-end items-center gap-4 mb-10 cursor-pointer text-yellow-600 transition-all duration-300  '> 
          <p >See Another Project </p>
          <BsArrowRight />
        </div>
      </motion.div>



    );
  

  
}
