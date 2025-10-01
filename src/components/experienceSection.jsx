import { FiCode, FiBook, FiAward, FiUserCheck } from "react-icons/fi";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Developer · Client Projects",
    date: "Jul 2025 – Present",
    description:
      "Built company profile websites for small businesses using Next.js, React, and TailwindCSS. Enhanced client visibility with responsive design and SEO-friendly implementation.",
    skills: ["Web Development", "SEO", "Attention to Detail"],
    icon: <FiCode className="text-yellow-600 text-xl" />,
  },
  {
    role: "Tutor & Mentor · BINUS University",
    date: "Sep 2023 – Present",
    description:
      "Awarded 16-credit scholarships two times streak. Mentored peers in OOP, AI, and Software Engineering, Agile, Code Reenginering, improving their academic performance and coding confidence.",
    skills: ["Mentoring","Software Engineering","Time Management" ],
    icon: <FiBook className="text-yellow-600 text-xl" />,
  },

  {
    role: "Ureeka Member · BINUS",
    date: "Apr 2024 – Present",
    description:
      "Represented BINUS in national software and UI/UX competitions. Strengthened teamwork, problem-solving, and technical presentation skills.",
    skills: ["UI/UX", "Fullstack Development", "Teamwork","Problem Solving"],
    icon: <FiAward className="text-yellow-600 text-xl" />,
  },
];

export default function ExperienceSection() {
  return (
    <div className="flex flex-col gap-6 ">
      <p className="sub-header-text lg:text-lg font-semibold">Experience</p>

      <div className="relative ">
        {/* Timeline vertical line */}
        <div className="absolute left-5 top-0 w-[0.05rem] h-full bg-gray-400"></div>

        <div className="flex flex-col gap-10 ml-10 ">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative"
            >
              {/* Circle on timeline */}
              <div className="absolute -left-6 top-5 w-2 h-2 rounded-full bg-gray-400"></div>

              {/* Card */}
              <div className=" p-3 rounded-md  ">
                <div className="flex items-center gap-2 mb-2">
                  {exp.icon}
                  <h3 className="text-(--gray) font-semibold lg:text-base ">{exp.role}</h3>
                </div>
                <p className="text-gray-500 text-xs mb-3 ">{exp.date}</p>
                <p className="text-(--gray) mb-3 text-xs ">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-yellow-600 text-(--white) text-[0.7rem] font-semibold px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
