import { AnimatePresence, motion } from "framer-motion";
import "../../css/home.css";
import { FormattedMessage } from "react-intl";
import img from "../../assets/img";

const Home = () => {
  return (
    <AnimatePresence>
      <div className="home-container">
        <div className="header-container">
          <div className="header_title-container">
            <h1 className="header_title">
              <motion.span
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
              >
                Leandro{" "}
              </motion.span>
              <motion.span
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
              >
                Pereyra
              </motion.span>
            </h1>
            <div className="header_lines-container">
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
                  delay: 0.9,
                }}
                className="header_lines-container_firstLine"
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
                  delay: 1.1,
                }}
                className="header_lines-container_secondLine"
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
                delay: 1.3,
              }}
              className="header_subtitle"
            >
              <FormattedMessage id="header_subtitle" defaultMessage="Desarrollador" />
            </motion.h3>
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
                delay: 1.5,
              }}
              className="header_level"
            >
              v1.0 - Trainee
            </motion.h3>
          </div>
          <motion.div
            initial={{
              scale: 1.5,
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
            className="header_image-container"
          >
            <img src={img.logo} alt="logo" />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Home;
