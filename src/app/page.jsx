'use client';
import Image from "next/image";
import Project from "../components/Project";
import Icon from "../components/Icon";
import Toogle from "../components/Toogle";
import ProfileImage from "../components/ProfileImage";

export default function Home() {
  return (
  <div className="grid xs:grid-flow-row  lg:grid-flow-col grid-col-2 justify-start items-start gap-6 animate-fade  overflow-x-hidden">
    <div className=' flex flex-col xs: xs:py-25 xs:p-4 xs:pb-0 lg:pb-20 text-justify gap-10 lg:p-20 lg:py-20 mx-4 justify-start items-start md:h-[45vh] xs:h-[70vh] lg:h-screen lg:w-[40vw] xs:pb-6 lg:pb-20'>
        <Toogle></Toogle>
        <div className="xs:max-w-[16em]  sm:max-w-full flex flex-col gap-2 flex flex-col justify-start items-start">
          <p className="xs:max-w-[16em]  sm:max-w-full font-mono  xs:text-xl md:text-lg lg:text-lg xl:text-lg 2xl:text-xl z-10 hello-area text-(--black)  sm:max-w-full">Hello👋</p>
          <p className="xs:max-w-[11em] xs:text-3xl md:text-2xl lg:text-2xl xl:text-3xl  2xl:text-4xl font-semibold text-(--black) name-area  sm:max-w-full">I'm <span className="text-(--yellow)">Madeline Handoyo</span></p>
        </div>
        <p className="z-10 xs:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl xs:max-w-[16em] sm:max-w-[20em]">A developer who enjoys <span className=" z-10 xs:text-xl md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-medium  cursor-pointer hover:text-(--yellow) transition duration-200 ease-in-out text-(--black) ">creating beautiful</span>, unique, and innovative software solutions that <span className="z-10 xs:text-xl md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-medium cursor-pointer text-(--black) hover:text-(--yellow) transition duration-200 ease-in-out">solve real-world problems.</span> Here, I'll be sharing some of the cool projects I've worked on! </p>
        
        <div className="z-10 xs:max-w-[12em]  sm:max-w-fullflex flex-col justify-start items-start">
          <p className="font-mono  xs:text-xl md:text-lg lg:text-lg xl:text-lg 2xl:text-xl py-2 text-(--black) xs:max-w-[16em]">Let's connect!</p>
          <Icon/>
        </div>
    </div>
      <div className='flex flex-col xs:min-h-[50vh] lg:max-w-[50vw] lg:w-[100vw]  lg:min-h-screen'>
        <div className="xs:flex xs:flex-col lg:h-full lg:fixed mx-4 lg:right-0 lg:w-[100vw] text-justify xs:gap-8 md:gap-4 xs:py-25 xs:p-4 xs:pt-0 lg:pt-20 lg:p-20 lg:py-20 lg:pl-[45vw] justify-start items-start hide-scrollbar">
          <p className="font-mono  xs:text-xl md:text-lg lg:text-lg xl:text-lg 2xl:text-xl   text-(--black)">Projects </p>
          <Project link={"https://tapaknusa.up.railway.app/"} title={"Tapaknusa"} description={"An innovative e-commerce platform that promotes attractions and festivals in Indonesia, making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to experience and appreciate the beauty of local traditions and festivals."} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]} />
          <Project link={"https://tapaknusa.up.railway.app/"} title={"web2"} description={"An innovative e-commerce platform that promotes attractions and festivals in Indonesia, making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to experience and appreciate the beauty of local traditions and festivals."} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]} />
          <Project link={"https://tapaknusa.up.railway.app/"} title={"web3"} description={"An innovative e-commerce platform that promotes attractions and festivals in Indonesia, making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to experience and appreciate the beauty of local traditions and festivals."} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]} />
        </div>
      </div>
  </div>

  );
}
