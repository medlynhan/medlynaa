'use client';
import { useState, useRef , useEffect, } from "react";
import Image from "next/image";
import Project from "../components/Project";
import Icon from "../components/Icon";
import ProfileImage from "../components/ProfileImage";
import { DiVim } from "react-icons/di";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { IoCaretForwardOutline } from "react-icons/io5";
import ProgLang from "../components/ProgrammingLanguage";
import { IoMdCode } from "react-icons/io";
import { LuDatabase } from "react-icons/lu";
import ExperienceSection from "../components/experienceSection";
import ProjectsSection from "../components/projectsSection";


export default function Home() {

  const router = useRouter();

  const [aboutclicked,SetAboutClicked] = useState(false);
  const [teamclicked,SetTeamClicked] = useState(false);
  const [individualclicked,SetIndividualClicked] = useState(false);

  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const individualRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top , // offset global -40
        behavior: "smooth",
      });

      if (ref.current === aboutRef.current) {
         SetAboutClicked(true);
         SetTeamClicked(false);
         SetIndividualClicked(false);
      }

      if (ref.current === teamRef.current) {
         SetAboutClicked(false);
         SetTeamClicked(true);
         SetIndividualClicked(false);
      }

      if (ref.current === individualRef.current) {
         SetAboutClicked(false);
         SetTeamClicked(false);
         SetIndividualClicked(true);
      }


    }
  };

useEffect(() => {
  const handleScroll = () => {
    const aboutSection = aboutRef.current.getBoundingClientRect();
    const teamSection = teamRef.current.getBoundingClientRect();
    const individualSection = individualRef.current.getBoundingClientRect();

    
    // Check if the section is in the viewport
    if (aboutSection.top - 50 <= (window.innerHeight / 2) && aboutSection.bottom >= 0) {
      SetAboutClicked(true);
      SetTeamClicked(false);
      SetIndividualClicked(false);
    } else if (teamSection.top - 50 <= (window.innerHeight / 2)  && teamSection.bottom >= 0) {
      SetAboutClicked(false);
      SetTeamClicked(true);
      SetIndividualClicked(false);
    } else if (individualSection.top - 50 <= (window.innerHeight / 2) && individualSection.bottom >= 0) {
      SetAboutClicked(false);
      SetTeamClicked(false);
      SetIndividualClicked(true);
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup on component unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  
  const techStack = {
  frontend: [
    "HTML5", "CSS3", "Bootstrap", "TailwindCSS", "JavaScript","JQuery", "TypeScript", "React", "Next.js", "ShadCN",  "Figma", "Framer Motion"
  ],
  backend: [
    "Node.js", "Express.js", "PHP", "Laravel", "ASP.NET", "C#", "Java","Python", "MySQL", "PostgreSQL", "Docker", "Railway", "Vercel", 
  ],

};
  
  return (
    <div >
      {/*kolom kiri */}

        <motion.div 
          className="lg:min-h-[80vh] introduction-container lg:w-[35%] lg:absolute lg:left-0 lg:top-0 lg:fixed lg:ml-[5%] lg:my-[5%]"
          initial={{ opacity: 0, y: -50 }} // Mulai dari atas dengan opacity rendah
          animate={{ opacity: 1, y: 0 }}  // Animasi bergerak ke posisi semula dan opacity penuh
          transition={{ duration: 1, ease: "easeOut" }} // Durasi lebih panjang dan smooth
        >
        <div className="gap-4   w-full flex  flex-row h-full">
            <div className="flex justify-center items-center w-fit">
              <ProfileImage></ProfileImage>
            </div>
            <div className="w-full h-full  flex flex-col gap-2">
              <p className=" font-mono text-left lg:text-base  font-semibold text-yellow-600">Hello 👋</p>
              <p className="font-semibold text-gray-200 name-area text-sm sm:text-lg md:text-2xl ">I'm <span className="">Madeline Handoyo</span></p>
              <div className=" w-fit flex  ">
                  <p className=" text-gray-400  text-start w-full md:text-lg font-semibold">Aspiring Software Engineer</p>
              </div>
              <div className="flex pt-2 flex lg:hidden justify-between items-center border-t-1 border-gray-700">
                <Icon></Icon>
                {/* <div className="px-2 py-1 border-1 border-(--black) text-gray-200 rounded-full hover:border-yellow-600 hover:text-yellow-600 cursor-pointer transition duration-300 ease-in-out">
                  <p>View CV ↗</p>
                </div> */}
              </div>
            </div>
        </div>
        <div className=" lg:flex hidden gap-4  h-full min-h-[30vh] flex flex-col justify-center ">
            <div className={`flex items-center gap-2 transition duration-150 cursor-pointer hover:text-yellow-600  ${ aboutclicked ? "text-yellow-600" : " "}`}>
              <p className={`text-(--white) transition duration-150 ${ aboutclicked ? "text-yellow-600" : "text-(--white)"}`}><IoCaretForwardOutline /></p>
              <p onClick={() => scrollToSection(aboutRef)}> <span></span>About Me</p>
            </div>
            <div className={`flex items-center gap-2 transition duration-150 cursor-pointer hover:text-yellow-600  ${ teamclicked ? "text-yellow-600" : " "}`}>
              <p className={`text-(--white) transition duration-150 ${ teamclicked ? "text-yellow-600" : "text-(--white)"}`}><IoCaretForwardOutline /></p>
              <p onClick={() => scrollToSection(teamRef)}> <span></span>Experience</p>
            </div>
            <div className={`flex items-center gap-2 transition duration-150 cursor-pointer hover:text-yellow-600  ${ individualclicked ? "text-yellow-600" : " "}`}>
              <p className={`text-(--white) transition duration-150 ${ individualclicked ? "text-yellow-600" : "text-(--white)"}`}><IoCaretForwardOutline /></p>
              <p onClick={() => scrollToSection(individualRef)}> <span></span>Projects</p>
            </div>            
        </div>
        <div className="w-full hidden lg:flex flex-row justify-between items-center pt-2  ">
            <Icon></Icon>
            {/* <div className="flex  gap-2 items-center px-2 py-1 border-1 border-(--black) text-gray-200 rounded-full hover:border-yellow-600 hover:text-yellow-600 cursor-pointer transition duration-300 ease-in-out">
              <p>View CV </p>
              <p className="hover:-translate-y-1">↗</p>
            </div> */}
        </div>
      </motion.div>
      
      {/*kolom kanan */}
      <motion.div 
        className="projects-container lg:w-[55%] lg:absolute lg:right-0 lg:top-0  pb-20 text-gray-400 lg:mr-[5%] "
        initial={{ opacity: 0, y: 100, rotateX: 10 }} // Mulai dari bawah dan sedikit miring
        animate={{ opacity: 1, y: 0, rotateX: 0 }} // Animasi bergerak ke atas dan kembali ke posisi normal
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }} // Durasi dan efek easing
      >
        <motion.div  ref={aboutRef} 
              className="flex flex-col gap-6 pt-20 "
        >
            <p className="sub-header-text lg:text-lg font-semibold ">About Me</p>
            <p className="text-start md:text-justify">
              Hey, I’m Madeline — a third-year Computer Science student at BINUS University with a strong interest in software engineering, UI/UX, and frontend development. I strive to write <span className=" text-gray-200  hover:text-yellow-600 cursor-pointer">clean and maintainable code</span> as part of my learning journey. <span className="text-gray-200 hover:text-yellow-600 cursor-pointer"> I continuously exploring different areas of the full stack.</span> From backend logic with Node.js and Laravel to frontend design with React, Next.js, and TailwindCSS, and more.
            </p>
            <p className="text-start md:text-justify">
              <span className=" text-gray-200 hover:text-yellow-600 cursor-pointer">What excites me most is frontend development,</span> where I can transform ideas into intuitive, interactive, and visually engaging experiences. <span className=" text-gray-200 hover:text-yellow-600 cursor-pointer">I’m always eager to keep learning and sharpening my skills</span>, embracing challenges as opportunities to grow and never giving up on the journey.
            </p>
            <p className="text-start md:text-justify">
              Here, I’ll show you some of my work from <span className="    ">competitions, team projects, and personal explorations.</span> I’m also active on   <div className="inline relative group  text-gray-200 hover:text-yellow-600 cursor-pointer">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/medlynhan"
                        className="no-underline text-inherit cursor-auto"
                      >
                        <span className="lg:cursor-pointer">GitHub</span>
                      </a>
                      <img
                        src="/github.png" // The image to show on hover
                        alt="GitHub Hover"
                        className="absolute top-[-20vh] left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer transform group-hover:scale-500 rounded-[0.07rem] hidden lg:block"
                        width={50}
                        height={50}
                      />
                    </div>
                    
                    
                    , where I regularly share updates and new projects — feel free to check it out and follow along on my journey! ✨🚀
            </p>
        </motion.div> 
      

      <motion.div  ref={teamRef}  className="flex flex-col gap-6   pt-20 "
      >
        <ExperienceSection></ExperienceSection>
      </motion.div>



          
        <div ref={individualRef} className="flex flex-col gap-6   pt-20 ">
            <ProjectsSection></ProjectsSection>
        </div> 
        




      </motion.div>
    </div>
    

  );
}
