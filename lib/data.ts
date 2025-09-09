import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import conformerImg from "@/public/conformer.png";
import violetImg from "@/public/violet1.jpg";
import wipImg from "@/public/wip.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "AI/ML Engineer Intern",
    location: "Boston, MA (Remote)",
    description:
      "Interned with Violet Therapeutics (based in Boston). Worked on ML-Driven Biomarker Discovery and Drug Target Prioritization Project. End-to-end development of an ML pipeline for biomarker discovery and drug target prioritization in multiple sclerosis using scRNA-seq data. Identified DEGs across disease states. Integrated Scanpy and Seurat for robust cross-platform analysis and cell-type annotation. Developed and trained Ridge, Lasso, and ANN models, achieving  95% accuracy for chronic active and 97% for chronic inactive MS classification. Built an end-to-end framework to prioritize druggable gene targets, incorporating GSEApy and CMAP-based drug repurposing. Validated key biomarkers on external datasets.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2025 - June 2025",
  },
  {
    title: "Master of Molecular Science and Software Engineering | UC Berkeley",
    location: "Berkeley, CA",
    description:
      "GPA: 3.9/4.0",
    icon: React.createElement(LuGraduationCap),
    date: "May 2025",
  },
  {
    title: "B.A. Molecular and Cell Biology | UC Berkeley",
    location: "Berkeley, CA",
    description: "Focus on Cell Biology, Development & Physiology",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023",
  },
] as const;

export const projectsData = [
  {
    title: "ML Conformer Energy Prediction",
    description:
      " Worked in a team of two to build a C++ neural network model to predict molecular conformer energies using atomic pairwise potentials.",
    tags: ["C++", "Python", "NumPy", "Pandas", "Matplotlib", "HDF5"],
    imageUrl: conformerImg,
  },
  {
    title: "ML-Driven Biomarker Discovery and Drug Target Prioritization",
    description:
      "Developed an ML pipeline for biomarker discovery and drug target prioritization in MS (Code unavailable to public :/ ).",
    tags: ["Python", "R", "PyTorch", "Scikit-learn","GSEApy"],
    imageUrl: violetImg,
  },
  {
    title: "Generative Radiological Image Captioning via Encoder-Decoder Architecture",
    description:
      "Under Construction!",
    tags: ["PyTorch", "CNN", "RNN", "NLP"],
    imageUrl: wipImg,
  },
] as const;

/*
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
*/

export const skillsData = {
  languages: [
    { name: "Python", tier: "🛠️ Proficient" },
    { name: "SQL", tier: "🛠️ Proficient" },
    { name: "R", tier: "📘 Familiar" },
    { name: "C++", tier: "📘 Familiar" },
  ],
  developmentTools: [
    { name: "Git", tier: "🛠️ Proficient" },
    { name: "Github", tier: "🛠️ Proficient" },
    { name: "Docker", tier: "🛠️ Proficient" },
    { name: "Jupyter", tier: "🛠️ Proficient" },
    { name: "Linux", tier: "🛠️ Proficient" },
    { name: "VS Code", tier: "🛠️ Proficient" },
    { name: "Bash", tier: "📘 Familiar" },
    { name: "Powershell", tier: "📘 Familiar" },
    { name: "Kubernetes", tier: "🌱 Learning" },
    { name: "AWS", tier: "🌱 Learning" },
  ],
  mlFrameworks: [
    { name: "PyTorch", tier: "🛠️ Proficient" },
    { name: "Scikit-learn", tier: "🛠️ Proficient" },
    { name: "Tensorflow", tier: "📘 Familiar" },
    { name: "Keras", tier: "📘 Familiar" },
    { name: "Torchvision", tier: "📘 Familiar" },
  ],
  visualizationTools: [
    { name: "Matplotlib", tier: "🛠️ Proficient" },
    { name: "Seaborn", tier: "🛠️ Proficient" },
    { name: "Scikit-image", tier: "📘 Familiar" },
    { name: "OpenCV", tier: "📘 Familiar" },
    { name: "TensorBoard", tier: "📘 Familiar" },
    { name: "UMAP", tier: "📘 Familiar" },
    { name: "Plotly", tier: "📘 Familiar" },
  ],
  scientificComputing: [
    { name: "Pandas", tier: "🛠️ Proficient" },
    { name: "NumPy", tier: "🛠️ Proficient" },
    { name: "ScanPy", tier: "📘 Familiar" },
    { name: "Seurat", tier: "📘 Familiar" },
    { name: "RDKit", tier: "📘 Familiar" },
    { name: "GSEApy", tier: "📘 Familiar" },
    { name: "SciPy", tier: "📘 Familiar" },
    { name: "Biopython", tier: "📘 Familiar" },
    { name: "CMAP", tier: "🌱 Learning" },
  ],
  hpcTools: [
    { name: "OpenMP", tier: "📘 Familiar" },
    { name: "MPI", tier: "🌱 Learning" },
    { name: "CUDA", tier: "🌱 Learning" },
  ],
};


