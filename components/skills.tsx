"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

// Optional: map internal keys to display-friendly titles
const categoryTitles: Record<string, string> = {
  languages: "Languages",
  developmentTools: "Development Tools & Platforms",
  mlFrameworks: "ML Frameworks",
  visualizationTools: "Visualization Tools",
  scientificComputing: "Scientific Computing Tools",
  hpcTools: "Parallel Computing and HPC Tools",
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="mb-10 text-left">
          <h3 className="text-xl font-semibold capitalize mb-4 dark:text-white/90">
            {categoryTitles[category] || category}
          </h3>
          <ul className="space-y-4">
            {skills.map((skill, index) => (
              <motion.li
                key={skill.name}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-600 dark:text-white/60">
                    {skill.tier}
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-white/50 italic">
                  {skill.usage}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
