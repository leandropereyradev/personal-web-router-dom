import { motion } from "framer-motion";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import Catalunya from "../../assets/base/header/Catalunya";
import Espana from "../../assets/base/header/Espana";
import Inglaterra from "../../assets/base/header/Inglaterra";
import img from "../../assets/img";
import Animation from "../lang/Animation";

import "../../css/navMenu.css";

const NavMenu = () => {
  const [lang, setLang] = useState(false);

  const openLang = () => {
    setLang(!lang);
  };

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
    setLang(!lang);
    setTimeout(() => {
      setModal(false);
    }, 5000);
  };

  return (
    <>
      <div className="navMenu-container">
        <div className="navMenu_menu-container">
          <ul>
            <motion.li
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
            >
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                <FormattedMessage id="navMenu-home" defaultMessage="Home" />
              </NavLink>
            </motion.li>
            <motion.li
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
                delay: 2.3,
              }}
            >
              <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                <FormattedMessage id="navMenu-portfolio" defaultMessage="Portfolio" />
              </NavLink>
            </motion.li>
            <motion.li
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
                delay: 2.5,
              }}
            >
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                <FormattedMessage id="navMenu-about" defaultMessage="About Me" />
              </NavLink>
            </motion.li>
            <motion.li
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
                delay: 2.7,
              }}
            >
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                <FormattedMessage id="navMenu-contact" defaultMessage="Contact" />
              </NavLink>
            </motion.li>
          </ul>
        </div>
        <div className="navMenu-Lang">
          <motion.img
            initial={{
              scale: 2,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 3.1,
            }}
            src={img.earth}
            alt="earth"
            onClick={() => openLang()}
          />
        </div>
        {lang && (
          <div className="navMenu-Lang-container">
            <div className="navMenu_flag-container" onClick={() => openModal()}>
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
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <Espana />
              </motion.div>
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
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.3,
                }}
              >
                <Catalunya />
              </motion.div>
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
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              >
                <Inglaterra />
              </motion.div>
            </div>
          </div>
        )}
      </div>
      <Animation estado={modal} set={() => setModal(!modal)} />
    </>
  );
};

export default NavMenu;
