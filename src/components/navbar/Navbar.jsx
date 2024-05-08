import "./navbar.scss";
import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import mediumLogo from "../../assets/medium.svg";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar /> 
      <div className="wrapper">

        <motion.span 
        initial={{opacity: 0, scale: 0.5}} 
        whileInView={{opacity: 1, scale: 1}} 
        transition={{duration: 0.3}}
        >Magdiel GV</motion.span>

        <motion.div 
        className="social"
        initial={{opacity: 0}}
        transition={{duration: 0.3}}
        whileInView={{opacity: 1, scale: 2}}
        >
          <a href="https://github.com/Magdiel-GVdz" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="github logo" />
          </a>
          <a href="https://www.linkedin.com/in/magdielgv/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="linkedin logo" />
          </a>
          <a href="https://medium.com/@magdiel.gvdz" target="_blank" rel="noopener noreferrer">
            <img src={mediumLogo} alt="medium logo" />
          </a>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Navbar;
