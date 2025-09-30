import { motion } from "framer-motion";
import Project from "./Project";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "Leluri",
    projectType: "Digital Cultural Community Platform",
    description:
      "Digital community platform that connects artisans, studios, and culture enthusiasts to keep Indonesian culture alive and collaborative in the digital era.",
    proglang: ["Next.js", "Typescript", "React", "Tailwind CSS", "ShadCN UI", "Supabase", "Vercel"],
    link: "https://leluri.vercel.app/",
    imageLink: "/leluri.png",
    type: "Team",
    route: "Leluri",
  },
  {
    title: "Tapaknusa",
    projectType: "Cultural E-commerce Attraction Platform",
    description:
      "Responsive web platform that lets users effortlessly discover and book hidden Indonesian cultural attractions online.",
    proglang: ["Laravel", "HTML", "CSS", "JQuery", "MySQL", "Railway"],
    link: "https://tapaknusa.up.railway.app/",
    imageLink: "/tapaknusa.png",
    type: "Personal",
    route: "Tapaknusa",
  },
  {
    title: "Irrigo",
    projectType: "Irrigation Recommendation System",
    description:
      "Smart web app that predicts farmer's irrigation needs using AI, giving affordable and practical water guidance for rice crops.",
    proglang: ["Next.js", "Node.js", "Flask", "Python", "Random Forest", "Mapbox API", "OpenWeatherAPI", "EOSDA API", "Docker"],
    link: "-",
    imageLink: "/irrigo.png",
    type: "Personal",
    route: "Irrigo",
  },
];

export default function ProjectsSection({ individualRef }) {
  const router = useRouter();

  return (
    <div ref={individualRef} className="flex flex-col gap-6">
      <p className="sub-header-text lg:text-lg font-semibold">Projects</p>

      {projects.map((proj, idx) => (
        <motion.div
          key={proj.title}
        >
          <Project
            onClick={() => router.push(`/detailProject/${proj.route}`)}
            link={proj.link}
            title={proj.title}
            projectType={proj.projectType}
            proglang={proj.proglang}
            imageLink={proj.imageLink}
            description={proj.description}
            type={proj.type}
          />
        </motion.div>
      ))}
    </div>
  );
}
