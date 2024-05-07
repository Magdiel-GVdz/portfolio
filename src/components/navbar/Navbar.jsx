import "./navbar.scss";
import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import mediumLogo from "../../assets/medium.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">

        <motion.span>Magdiel GV</motion.span>

        <div className="social">
          <a href="#">
            <img src={githubLogo} alt="github logo" />
          </a>
          <a href="#">
            <img src={linkedinLogo} alt="linkedin logo" />
          </a>
          <a href="#">
            <img src={mediumLogo} alt="medium logo" />
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
