'use client';
import Image from "next/image";
import Project from "../components/Project";
import Icon from "../components/Icon";
import Toogle from "../components/Toogle";
import ProfileImage from "../components/ProfileImage";

export default function Home() {
  return (

      <div className="projects-container">
          <p className="font-mono text-lg">Projects </p>
          <Project link={"https://tapaknusa.up.railway.app/"} title={"Tapaknusa"} description={"An innovative e-commerce platform that promotes attractions and festivals in Indonesia, making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions."} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]} />
          <Project link={"https://tapaknusa.up.railway.app/"} title={"web2"} description={"An innovative e-commerce platform that promotes attractions and festivals in Indonesia, making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to experience and appreciate the beauty of local traditions and festivals."} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]} />
          <Project link={"https://tapaknusa.up.railway.app/"} title={"web3"} description={"An innovative e-commerce platform that promotes attractions and festivals in Indonesia, making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to experience and appreciate the beauty of local traditions and festivals."} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]} />
      </div>
    
    //<div  className="btn border xs:xs-container sm:sm-container md:md-container lg:lg-container xl:xl-container xl2:xl2-container xl3:xl3-container">Hello im madeline</div>


  //     <div className='flex flex-col xs:min-h-[50vh] lg:max-w-[50vw] lg:w-[100vw]  lg:min-h-screen'>
  //       <div className="xs:flex xs:flex-col lg:h-full lg:fixed mx-4 lg:right-0 lg:w-[100vw] text-justify xs:gap-8 md:gap-4 xs:py-25 xs:p-4 xs:pt-0 lg:pt-20 lg:p-20 lg:py-20 lg:pl-[45vw] justify-start items-start hide-scrollbar">
  //         <p className="font-mono  xs:text-xl md:text-lg lg:text-lg xl:text-lg 2xl:text-xl   text-(--black)">Projects </p>
  //         <Project link={"https://tapaknusa.up.railway.app/"} title={"Tapaknusa"} description={"An e-commerce platform that promotes attractions and festivals in Indonesia, making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions."} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]} />
  //         <Project link={"https://tapaknusa.up.railway.app/"} title={"web2"} description={"An innovative e-commerce platform that promotes attractions and festivals in Indonesia, making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to experience and appreciate the beauty of local traditions and festivals."} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]} />
  //         <Project link={"https://tapaknusa.up.railway.app/"} title={"web3"} description={"An innovative e-commerce platform that promotes attractions and festivals in Indonesia, making it easy for people to discover and buy tickets for events that aren’t always available online. The goal is to raise awareness about Indonesia’s rich culture and vibrant attractions, allowing people to experience and appreciate the beauty of local traditions and festivals."} proglang={["Laravel","HTML","CSS","JQuery","MySQL"]} />
  //       </div>
  //     </div>
  // </div>

  );
}
