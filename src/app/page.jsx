import Image from "next/image";
import Project from "../components/Project";
import Icon from "../components/Icon";

export default function Home() {
  return (
  <div className="grid sm:grid-flow-row  lg:grid-flow-col grid-col-2 gap-6  ">
    <div className='flex flex-col text-justify gap-10 p-20 justify-start items-start sm:min-h-[<50vh] lg:min-h-screen'>
        <div className="grid gap-2">
          <p className="font-mono  sm:text-xs md:text-base lg:text-base xl:text-lg 2xl:text-xl  hover:animate-wiggle">Hello <span className="hover:animate-wiggle">👋</span></p>
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">I'm Madeline Handoyo</p>
        </div>
        <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">A developer who enjoys <span className=" cursor-pointer font-semibold hover:text-(--yellow) transition duration-200 ease-in-out ">creating beautiful</span>, unique, and innovative software solutions that <span className="cursor-pointer  font-semibold hover:text-(--yellow) transition duration-200 ease-in-out">solve real-world problems</span>. Here, I'll be sharing some of the cool projects I've worked on!</p>
        <Icon/>
    </div>
    <div className='flex flex-col text-justify gap-4 p-20 justify-start items-start sm:min-h-[<50vh] lg:min-h-screen'>
        <p className="font-mono  sm:text-xs md:text-base lg:text-base xl:text-lg 2xl:text-xl">Projects</p>
        <Project/>
    </div>
  </div>

  );
}
