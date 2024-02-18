import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-12vw" y="-10vw" />
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="Javascript" x="-22vw" y="-10vw" />
        <Skill name="ReactJS" x="12vw" y="-10vw" />
        <Skill name="NextJS" x="12vw" y="10vw" />
        <Skill name="Figma" x="22vw" y="-10vw" />
        <Skill name="Firebase" x="22vw" y="10vw" />
        <Skill name="TailwindCSS" x="0vw" y="-13vw" />
        <Skill name="Java" x="0vw" y="8vw" />
        <Skill name="C" x="0vw" y="13vw" />

      </div>
    </>
  );
};

export default Skills;
