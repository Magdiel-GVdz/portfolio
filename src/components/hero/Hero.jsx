import React from "react";
import "./hero.scss";
import heroImage from "../../assets/hero.jpeg";
import { animate, motion } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const imageVariants = {
  initial: {
    opacity: 0,
    x: 500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-300%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          whileInView={"animate"}
          
        >
          <motion.h1 variants={textVariants}>Hi, I'm Magdiel</motion.h1>
          <motion.h2 variants={textVariants}>AWS Cloud Engineer</motion.h2>
          <motion.p variants={textVariants}>
            A passionate Engineer with AWS certification and solid experience.
            Active in the AWS User Group in Saltillo, I collaborate and learn
            from a brilliant community. Ready to apply my skills and contribute
            to a dynamic team. For me, the sky is not the limit, it's just the
            beginning!
          </motion.p>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See My Work</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          {/* <p>Scroll down to see more</p> */}
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate={"animate"}>
        AWS DevOps Cloud Engineer Backend
      </motion.div>
      <motion.div className="heroContainer" variants={imageVariants} initial="initial" whileInView={"animate"}>
        <motion.img src={heroImage} alt="Magdiel GV" />
      </motion.div>
    </div>
  );
};

export default Hero;
