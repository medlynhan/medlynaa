'use client';
import { useState, useRef , useEffect, } from "react";
import Image from "next/image";
import Project from "../components/Project";
import Icon from "../components/Icon";
import Toogle from "../components/Toogle";
import ProfileImage from "../components/ProfileImage";
import { DiVim } from "react-icons/di";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { IoCaretForwardOutline } from "react-icons/io5";
import ProgLang from "../components/ProgrammingLanguage";
import { IoMdCode } from "react-icons/io";
import { LuDatabase } from "react-icons/lu";
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
          
        >
        <div className="gap-4   w-full flex  flex-row h-full">
            <div className="flex justify-center items-center w-fit">
              <ProfileImage></ProfileImage>
            </div>
            <div className="w-full h-full  flex flex-col gap-2">
              <p className=" font-mono text-left lg:text-base  font-semibold text-(--yellow)">Hello 👋</p>
              <p className="font-semibold text-(--black) name-area text-sm sm:text-lg md:text-2xl ">I'm <span className="">Madeline Handoyo</span></p>
              <div className=" w-fit flex  ">
                  <p className=" text-gray-300  text-start w-full md:text-lg font-semibold">Aspiring Software Enginerr</p>
              </div>
              <div className="flex pt-2 flex lg:hidden justify-between items-center border-t-1 border-gray-700">
                <Icon></Icon>
                {/* <div className="px-2 py-1 border-1 border-(--black) text-(--black) rounded-full hover:border-(--yellow) hover:text-(--yellow) cursor-pointer transition duration-300 ease-in-out">
                  <p>View CV ↗</p>
                </div> */}
              </div>
            </div>
        </div>
        <div className=" lg:flex hidden gap-4  h-full min-h-[30vh] flex flex-col justify-center ">
            <div className={`flex items-center gap-2 transition duration-150 cursor-pointer hover:text-(--yellow)  ${ aboutclicked ? "text-(--yellow)" : " "}`}>
              <p className={`text-(--white) transition duration-150 ${ aboutclicked ? "text-(--yellow)" : "text-(--white)"}`}><IoCaretForwardOutline /></p>
              <p onClick={() => scrollToSection(aboutRef)}> <span></span>About Me</p>
            </div>
            <div className={`flex items-center gap-2 transition duration-150 cursor-pointer hover:text-(--yellow)  ${ teamclicked ? "text-(--yellow)" : " "}`}>
              <p className={`text-(--white) transition duration-150 ${ teamclicked ? "text-(--yellow)" : "text-(--white)"}`}><IoCaretForwardOutline /></p>
              <p onClick={() => scrollToSection(teamRef)}> <span></span>Team Projects</p>
            </div>
            <div className={`flex items-center gap-2 transition duration-150 cursor-pointer hover:text-(--yellow)  ${ individualclicked ? "text-(--yellow)" : " "}`}>
              <p className={`text-(--white) transition duration-150 ${ individualclicked ? "text-(--yellow)" : "text-(--white)"}`}><IoCaretForwardOutline /></p>
              <p onClick={() => scrollToSection(individualRef)}> <span></span>Individual Projects</p>
            </div>            
        </div>
        <div className="w-full hidden lg:flex flex-row justify-between items-center pt-2  ">
            <Icon></Icon>
            {/* <div className="flex  gap-2 items-center px-2 py-1 border-1 border-(--black) text-(--black) rounded-full hover:border-(--yellow) hover:text-(--yellow) cursor-pointer transition duration-300 ease-in-out">
              <p>View CV </p>
              <p className="hover:-translate-y-1">↗</p>
            </div> */}
        </div>
      </motion.div>
      
      {/*kolom kanan */}
      <motion.div 
        className="projects-container lg:w-[55%] lg:absolute lg:right-0 lg:top-0  pb-20 text-gray-300 lg:mr-[5%] "
        initial={{ opacity: 0, y: 50, rotateX: 10 }} // Mulai dari bawah dan sedikit miring
        animate={{ opacity: 1, y: 0, rotateX: 0 }} // Animasi bergerak ke atas dan kembali ke posisi normal
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }} // Durasi dan efek easing
      >
        <div ref={aboutRef} className="flex flex-col gap-6 pt-20 ">
            <p className="sub-header-text lg:text-lg font-semibold ">About Me</p>
            <p className="text-justify">
              Hey, I’m a Computer Science student at BINUS University, strive to write <span className=" text-(--black) text-(--yellow) cursor-pointer">clean and maintainable code</span> as part of my learning journey. <span className=" text-(--yellow) cursor-pointer">I love exploring different areas across the fullstack</span>, from backend logic with Node.js and Laravel to frontend design with React, Next.js, and TailwindCSS. Besides studying, sometimes I also take on freelance projects!
            </p>
            <p className="text-justify">
              I enjoy building digital products end-to-end, but I especially find myself <span className=" text-(--black) text-(--yellow) cursor-pointer">drawn to the frontend</span> where I get to turn ideas into beautiful and interactive experiences. 
            </p>
            <p className="text-justify">
              Here, I’ll show you some of my work from <span className="    ">competitions, team projects, and personal explorations.</span> I’m also active on    <div className="inline relative group  text-(--black) text-(--yellow) cursor-pointer">
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

            <p className="sub-header-text lg:text-lg font-semibold mt-20 ">Tech Stack </p>
  
           <section className="grid grid-cols-1  gap-8">
  
            {/* Frontend Section */}
            <div className="flex flex-col items-center border  border-gray-700  p-4 rounded-lg">
              <div className="flex w-full flex-row gap-2 mb-4 items-center justify-center ">
                <h2 className="text-(--black) text-base  w-full text-white">🎨 UI/UX & Frontend</h2>
              </div>
              <div className="flex flex-wrap gap-4 justify-start">
                {techStack.frontend.map((lang, index) => (
                  <ProgLang key={index} lang={lang} style={""} textStyle={""}/>
                ))}
              </div>
            </div>

            {/* Backend Section */}
            <div className="flex flex-col items-center border  border-gray-700 p-4 rounded-lg">
              <div className="flex w-full flex-row gap-2 mb-4 items-center justify-center ">
                <h2 className="text-(--black) w-full text-white text-base">⚒️ Backend & Deployment</h2>
              </div>
              <div className="flex flex-wrap gap-4 ">
                {techStack.backend.map((lang, index) => (
                    <ProgLang key={index} lang={lang} style={""} textStyle={""}/>
                ))}
              </div>
            </div>



          </section>


  
        </div> 
          
        <div ref={teamRef} className="flex flex-col gap-6  pt-20  ">
            <p className="sub-header-text  lg:text-lg font-semibold ">Team Projects</p>
            <Project 
                onClick={() => router.push("/detailProject/Leluri")} 
                link={"https://leluri.vercel.app/"} 
                title={"Leluri"} 
                projectType={"Digital Cultural Community Platform"} 
                proglang={["Next.js","Typescript","React","Tailwind CSS","ShadCN UI","Supabase","Vercel"]} 
                imageLink="/leluri.png"
                description={"Digital community platform that connects artisans, studios, and culture enthusiasts to keep Indonesian culture alive and collaborative in the digital era."}    
            />
        </div>
          
        <div ref={individualRef} className="flex flex-col gap-6   pt-20 ">
            <p className="sub-header-text lg:text-lg font-semibold ">Individual Projects</p>
            <Project 
                onClick={() => router.push("/detailProject/Tapaknusa")} 
                link={"https://tapaknusa.up.railway.app/"} 
                title={"Tapaknusa"} 
                // achievement={"🏆 Achieved 6th Place Winner"}
                projectType={"Explore Hidden Indonesian Heritage"} 
                proglang={["Laravel","HTML","CSS","JQuery","MySQL","Railway"]}
                imageLink="/tapaknusa.png"
                description={"Responsive web platform that lets users effortlessly discover and book hidden Indonesian cultural attractions online."}    
            />


            <Project 
                onClick={() => router.push("/detailProject/Irrigo")} 
                link={" - "} 
                title={"Irrigo"} 
                projectType={"Irrigation Recommendation System"} 
                proglang={["Next.js","Node.js","Flask","Python","Random Forest","Mapbox API","OpenWeatherAPI","EOSDA API","Docker"]}
                imageLink="/irrigo.png"
                description={"Smart web app that predicts farmer's irrigation needs using AI, giving affordable and practical water guidance for rice crops."}    
            />
        </div> 
        




      </motion.div>
    </div>
    

  );
}
