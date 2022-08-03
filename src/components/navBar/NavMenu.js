import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

import "../../css/navMenu.css";

const NavMenu = () => {
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
      </div>
    </>
  );
};

export default NavMenu;
