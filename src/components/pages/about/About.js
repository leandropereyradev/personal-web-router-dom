import { AnimatePresence, motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import "../../../css/about.css";
import img from "../../../assets/img";
import AboutPop from "./AboutPop";

const About = () => {
  return (
    <AnimatePresence>
      <div className="about-container">
        <div className="about-header">
          <div className="about_title-container">
            <motion.h1
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
                delay: 0.3,
              }}
              className="about_title"
            >
              <FormattedMessage id="about_title" defaultMessage="Sobre Mi" />
            </motion.h1>
            <div className="about_lines-container">
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
                  delay: 0.5,
                }}
                className="about_lines-container_firstLine"
              ></motion.div>
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
                  delay: 0.7,
                }}
                className="about_lines-container_secondLine"
              ></motion.div>
            </div>
            <motion.h3
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
                delay: 0.9,
              }}
              className="about_subtitle"
            >
              <FormattedMessage id="about_subtitle" defaultMessage="development" />
            </motion.h3>
          </div>
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
              delay: 1.1,
            }}
            className="about_image-container"
          >
            <img src={img.photo} alt="logo" />
          </motion.div>
        </div>
        <AboutPop />
      </div>
    </AnimatePresence>
  );
};

export default About;
