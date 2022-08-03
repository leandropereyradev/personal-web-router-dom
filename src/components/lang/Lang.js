import { motion } from "framer-motion";
import { useState } from "react";
import Catalunya from "../../assets/base/header/Catalunya";
import Espana from "../../assets/base/header/Espana";
import Inglaterra from "../../assets/base/header/Inglaterra";
import Earth from "../../assets/base/nav/Earth";
import "../../css/lang.css";
import Animation from "./Animation";

const Lang = () => {
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
    }, 4000);
  };
  return (
    <div>
      <motion.div
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
        className="navMenu-Lang"
      >
        <Earth openModal={() => openLang()} />
      </motion.div>
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
      <Animation estado={modal} set={() => setModal(!modal)} />
    </div>
  );
};

export default Lang;
