"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      
      <p className="mb-3">
        <span className="font-semibold">
          During my undergraduate studies at UC Berkeley
        </span>
        , I was surrounded by incredibly talented peers and mentors and introduced
        to the power of computational biology. I became inspired to explore how{" "}
        <span className="italic font-medium">machine learning</span> could uncover
        patterns in biological data and advance biomedical research. This
        motivation led me to pursue a{" "}
        <span className="font-semibold">Master’s in Molecular Science and Software Engineering {" "}</span> 
        at <span className="font-bold">UC Berkeley</span>, where I focused on applying machine learning to real-world biomedical
        challenges such as{" "}
        <span className="font-medium">
          identifying biomarkers, predicting molecular behavior, and developing
          tools for drug discovery
        </span>
        .
        <br />
        <br />
        My <span className="font-bold">core stack</span> includes{" "}
        <span className="font-medium">
          Python, SQL, PyTorch, TensorFlow
        </span>
        , and bioinformatics platforms like{" "}
        <span className="font-medium">Scanpy</span>. I am also familiar with{" "}
        <span className="italic">R and C++</span>, and I am always eager to learn
        new technologies. As a{" "}
        <span className="font-semibold">recent graduate</span>, I am excited to
        leverage my{" "}
        <span className="font-medium">scientific background and technical skills</span>{" "}
        to contribute to meaningful, interdisciplinary work in biotechnology and
        research. I am currently {" "}
        <span className="font-bold">seeking a full-time position</span> as a software
        engineer.
      </p>

      <p>
        <span className="italic font-semibold">Outside of coding</span>, I enjoy
        spending time outdoors—whether{" "}
        hiking, playing pickleball, or soccer.
        I also enjoy{" "}
        playing video games, watching movies,
        and spending time with my dog,{" "}
        Onix.
      </p>
    </motion.section>
  );
}
