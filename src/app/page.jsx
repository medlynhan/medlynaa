'use client';
import Image from "next/image";
import Project from "../components/Project";
import Icon from "../components/Icon";
import Toogle from "../components/Toogle";
import ProfileImage from "../components/ProfileImage";

export default function Home() {
  return (
  <div className="grid  xs:grid-flow-row  lg:grid-flow-col grid-col-2  gap-6 animate-fade">
    <div className=' flex flex-col xs:py-30 xs:p-10 xs:pb-0 lg:pb-20 text-justify gap-10 sm:p-20 sm:py-20 mx-4 justify-start items-start md:h-[45vh] xs:h-[70vh] lg:h-screen lg:w-[40vw] xs:pb-6 lg:pb-20'>
        <Toogle></Toogle>
        <div className="gap-2 grid-areas-layout">
          <ProfileImage/>
          <p className="font-mono  xs:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl z-10 hello-area  ">Hello👋</p>
          <p className="xs:text-2xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-(--black) name-area">I'm Madeline Handoyo</p>
        </div>
        <p className="z-10 xs:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">A developer who enjoys <span className=" z-10 font-mono  xs:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-semibold  cursor-pointer hover:bg-(--yellow) transition duration-200 ease-in-out text-(--black) ">creating beautiful</span>, unique, and innovative software solutions that <span className="z-10 font-mono  xs:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-semibold cursor-pointer  font-mono text-(--black) hover:bg-(--yellow) transition duration-200 ease-in-out">solve real-world problems </span>. Here, I'll be sharing some of the cool projects I've worked on! </p>
        
        <div className="z-10">
          <p className="font-mono  xs:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl py-2  ">Let's connect! 🤗</p>
          <Icon/>
        </div>
    </div>
      <div className='flex flex-col xs:min-h-[50vh] lg:max-w-[50vw] lg:w-[100vw]  lg:min-h-screen'>
        <div className="xs:flex xs:flex-col lg:h-full lg:fixed mx-4 lg:right-0 lg:w-[100vw] text-justify xs:gap-8 md:gap-4 xs:py-30 xs:p-10 xs:pt-0 lg:pt-20 sm:p-20 sm:py-20 lg:pl-[45vw] justify-start items-start hide-scrollbar">
          <p className="font-mono  xs:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl   ">Projects 😎</p>
          <Project link={"https://tapaknusa.up.railway.app/"} title={"Tapaknusa"} description={"An innovative e-commerce platform that promotes attractions and festivals in Indonesia, making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to experience and appreciate the beauty of local traditions and festivals."} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]} />
          <Project link={"https://tapaknusa.up.railway.app/"} title={"web2"} description={"An innovative e-commerce platform that promotes attractions and festivals in Indonesia, making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to experience and appreciate the beauty of local traditions and festivals."} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]} />
          <Project link={"https://tapaknusa.up.railway.app/"} title={"web3"} description={"An innovative e-commerce platform that promotes attractions and festivals in Indonesia, making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to experience and appreciate the beauty of local traditions and festivals."} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]} />
        </div>
      </div>
  </div>

  );
}
