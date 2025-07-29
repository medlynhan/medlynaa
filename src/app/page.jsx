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
      <div className="introduction-container lg:w-[35%] lg:absolute lg:left-0 lg:top-0 lg:fixed lg:ml-[5%] lg:my-[5%]">
        <div className="gap-2 grid-areas-layout">
            <ProfileImage></ProfileImage>
            <p className="sub-header-text hello-area md:text-lg">Hello👋</p>
            <p className="font-semibold text-(--black) name-area text-2xl md:text-3xl">I'm <span className="text-(--yellow)">Madeline Handoyo</span></p>
        </div>
            <p className="text-justify xs:text-base md:text-lg">
            A developer who enjoys 
            <span className="font-medium cursor-pointer hover:text-(--yellow) transition duration-200 ease-in-out text-(--black) "> creating beautiful</span>
            , unique, and innovative software solutions that 
            <span className="font-medium  cursor-pointer hover:text-(--yellow) transition duration-200 ease-in-out text-(--black)"> solve real-world problems.</span> 
            Here, I'll be sharing some of the cool projects I've worked on! 
          </p>
        <div className="flex flex-col gap-4">
             <p className="sub-header-text md:text-lg">Let's Connect</p>
             <Icon></Icon>
        </div>
      </div>
      
      <div className="projects-container lg:w-[55%] lg:absolute lg:right-0 lg:top-0 lg:mr-[5%] lg:my-[5%]">
          <p className="sub-header-text md:text-lg">Projects </p>
          <Project link={"https://tapaknusa.up.railway.app/"} title={"Tapaknusa"} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]}>
            <p className="text-justify">An innovative <span className="font-medium text-(--black)">e-commerce platform that promotes attractions and festivals in Indonesia,</span> making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to <span className="font-medium text-(--black)">experience and appreciate the beauty of local traditions and festivals.</span></p>
          </Project>
          <Project link={"https://tapaknusa.up.railway.app/"} title={"Tapaknusa"} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]}>
            <p className="text-justify">An innovative <span className="font-medium text-(--black)">e-commerce platform that promotes attractions and festivals in Indonesia,</span> making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to <span className="font-medium text-(--black)">experience and appreciate the beauty of local traditions and festivals.</span></p>
          </Project>
          <Project link={"https://tapaknusa.up.railway.app/"} title={"Tapaknusa"} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]}>
            <p className="text-justify">An innovative <span className="font-medium text-(--black)">e-commerce platform that promotes attractions and festivals in Indonesia,</span> making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to <span className="font-medium text-(--black)">experience and appreciate the beauty of local traditions and festivals.</span></p>
          </Project>         
      </div>
    </div>
    

  );
}
