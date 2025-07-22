import Image from "next/image";
import Project from "../components/Project";
import Icon from "../components/Icon";
import Container from "../components/Container";
export default function Home() {
  return (
  <div className="grid sm:grid-flow-row  lg:grid-flow-col grid-col-2 gap-6  ">
    <div className='flex flex-col text-justify gap-4 p-20 justify-start items-start sm:min-h-[<50vh] lg:min-h-screen'>
        <p className="font-mono sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Hello 👋</p>
        <p className="border">I'm Madeline Handoyo</p>
        <p>A developer who enjoys creating beautiful, unique, and innovative software solutions that solve real-world problems. Here, I'll be sharing some of the cool projects I've worked on!</p>
        <Icon/>
    </div>
    <div className='flex flex-col text-justify gap-4 p-20 justify-start items-start sm:min-h-[<50vh] lg:min-h-screen'>
        <Project/>
    </div>
  </div>

  );
}
