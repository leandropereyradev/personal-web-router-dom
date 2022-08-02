import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./nav.css";
import img from "../../assets/img";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 2,
        }}
        className="nav-container"
      >
        <div className="nav_menu-container">
          <img src={img.menu} alt="logo" className="logo" onClick={() => openMenu()} />
          {open && (
            <>
              <Link to="/">
                <motion.img
                  initial={{
                    scale: 0,
                    opacity: 0,
                    x: 0,
                    y: 60,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: -10,
                    y: -140,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.3,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    x: 0,
                    y: 60,
                  }}
                  src={img.home}
                  alt="home"
                  className="home"
                  onClick={() => openMenu()}
                />
              </Link>
              <Link to="/portfolio">
                <motion.img
                  initial={{
                    scale: 0,
                    opacity: 0,
                    x: 50,
                    y: 60,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: -60,
                    y: -120,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.4,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    x: 50,
                    y: 60,
                  }}
                  src={img.portfolio}
                  alt="portfolio"
                  className="portfolio"
                  onClick={() => openMenu()}
                />
              </Link>
              <Link to="/about">
                <motion.img
                  initial={{
                    scale: 0,
                    opacity: 0,
                    x: 50,
                    y: 30,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: -130,
                    y: -90,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    x: 50,
                    y: 20,
                  }}
                  src={img.about}
                  alt="about"
                  className="about"
                  onClick={() => openMenu()}
                />
              </Link>
              <Link to="/contact">
                <motion.img
                  initial={{
                    scale: 0,
                    opacity: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: -170,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    x: 0,
                    y: 0,
                  }}
                  src={img.contact}
                  alt="contact"
                  className="contact"
                  onClick={() => openMenu()}
                />
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Nav;
