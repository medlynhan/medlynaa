'use client';
import Image from "next/image";
import Project from "../components/Project";
import Icon from "../components/Icon";
import Toogle from "../components/Toogle";
import ProfileImage from "../components/ProfileImage";
import { DiVim } from "react-icons/di";

export default function Home() {
  return (
    <div >
      {/*kolom kiri */}
      <div className="introduction-container lg:w-[35%] lg:absolute lg:left-0 lg:top-0 lg:fixed lg:ml-[5%] lg:my-[5%]">
        <div className="gap-4   w-full flex  flex-row h-full">
            <div className="flex justify-center items-center w-fit">
              <ProfileImage></ProfileImage>
            </div>
            <div className="w-full h-full  flex flex-col gap-2">
              <p className=" font-mono  text-left lg:text-base  font-semibold text-(--yellow)">Hello 👋</p>
              <p className="font-semibold text-(--black) name-area text-2xl ">I'm <span className="">Madeline Handoyo</span></p>
              <div className=" w-fit flex  ">
                  <p className="font-semibold text-gray-300 name-area text-base text-start w-full text-lg">Aspiring Software Engineer</p>
              </div>
              <div className="flex pt-2 flex lg:hidden justify-between items-center border-t-1 border-gray-700">
                <Icon></Icon>
                {/* <div className="px-2 py-1 border-1 border-(--black) text-(--black) rounded-full hover:border-(--yellow) hover:text-(--yellow) cursor-pointer transition duration-300 ease-in-out">
                  <p>View CV ↗</p>
                </div> */}
              </div>
            </div>
        </div>
        <div className="w-full hidden lg:flex flex-row justify-between items-center pt-2 border-t-1 border-gray-700 ">
            <Icon></Icon>
            {/* <div className="flex  gap-2 items-center px-2 py-1 border-1 border-(--black) text-(--black) rounded-full hover:border-(--yellow) hover:text-(--yellow) cursor-pointer transition duration-300 ease-in-out">
              <p>View CV </p>
              <p className="hover:-translate-y-1">↗</p>
            </div> */}
          </div>
      </div>
      
      {/*kolom kanan */}
      <div className="projects-container lg:w-[55%] lg:absolute lg:right-0 lg:top-0 lg:mr-[5%] lg:my-[5%]">
      
        <div className="flex flex-col gap-6 lg:min-h-[90vh] pb-5">
            <p className="sub-header-text lg:text-lg font-semibold ">About Me</p>
            <p className="text-justify">
              Hey, I’m a Computer Science student at BINUS University. <span className="text-(--black) font-semibold hover:text-(--yellow) cursor-pointer">I love exploring different areas across the fullstack</span>, from backend logic with Node.js and Laravel to frontend design with React, Next.js, and TailwindCSS. Besides studying, sometimes I also take on freelance projects !
            </p>
            <p className="text-justify">
              I enjoy building digital products end-to-end, but I especially find myself <span className="text-(--black) font-semibold hover:text-(--yellow) cursor-pointer">drawn to the frontend</span> — where I get to turn ideas into beautiful and interactive experiences. 💗 
            </p>
            <p className="text-justify">
              Here, I’ll show you some of my work from <span className=" text-(--black) font-semibold hover:text-(--yellow) cursor-pointer">competitions, team projects, and personal explorations.</span> I’m also active on <span className=" text-(--black) font-semibold hover:text-(--yellow) cursor-pointer">GitHub</span>, where I regularly share updates and new projects — feel free to check it out and follow along on my journey! ✨🚀
            </p>
        </div> 
          
        <div className="flex flex-col gap-6 lg:min-h-[90vh] pb-5">
            <p className="sub-header-text lg:text-lg font-semibold ">Team Projects</p>
            <Project 
                link={"https://leluri.vercel.app/"} 
                title={"Leluri"} 
                projectType={" 👩‍💻 Web Dev Competition IITC — 2025"} 
                proglang={["Next.js","Typescript","React","Tailwind CSS","ShadCN UI","Supabase","Vercel"]} 
                imageLink="/leluri.png"
                description={"Digital community platform that connects artisans, studios, and culture enthusiasts to keep Indonesian culture alive and collaborative in the digital era."}    
            />
        </div>
          
        <div className="flex flex-col gap-6  lg:min-h-[90vh] pb-5">
            <p className="sub-header-text lg:text-lg font-semibold ">Individual Projects</p>
            <Project 
                link={"https://tapaknusa.up.railway.app/"} 
                title={"Tapaknusa"} 
                achievement={"🏆 Achieved 6th Place Winner"}
                projectType={" 👩‍💻 Web Design Competition PARAS ICT X — 2025"} 
                proglang={["Laravel","HTML","CSS","JQuery","MySQL","Railway"]}
                imageLink="/tapaknusa.png"
                description={"Responsive web platform that lets users effortlessly discover and book hidden Indonesian cultural attractions online."}    
            />


            <Project 
                link={" - "} 
                title={"Irrigo"} 
                projectType={" 👩‍💻 Web Dev Competition SECOMP — 2025"} 
                proglang={["Next.js","Node.js","Flask","Python","Random Forest","Mapbox API","OpenWeatherAPI","EOSDA API","Docker"]}
                imageLink="/irrigo.png"
                description={"Smart web app that predicts farmer's irrigation needs using AI, giving affordable and practical water guidance for rice crops."}    
            />
        </div> 
        



      </div>
    </div>
    

  );
}
