import { AnimatePresence, motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import "../../../css/portfolio.css";
import img from "../../../assets/img";
import Carousel from "./Carousel";

const Portfolio = () => {
  return (
    <AnimatePresence>
      <div className="portfolio-container">
        <div className="portfolio_title-container">
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
            className="portfolio_title"
          >
            <FormattedMessage id="portfolio_title" defaultMessage="Portfolio" />
          </motion.h1>
          <div className="portfolio_lines-container">
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
              className="portfolio_lines-container_firstLine"
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
              className="portfolio_lines-container_secondLine"
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
            className="portfolio_subtitle"
          >
            <FormattedMessage id="portfolio_subtitle" defaultMessage="proyectos" />
          </motion.h3>
        </div>
        <div className="portfolio-images">
          <div className="portfolio_image-container">
            <motion.img
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
              src={img.celia}
              alt="celia"
              className="celia"
            />
            <motion.img
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
              src={img.yoga}
              alt="yoga"
              className="yoga"
            />
            <motion.img
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
              src={img.leandro}
              alt="leandro"
              className="leandro"
            />
            <motion.img
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
              src={img.alicia}
              alt="alicia"
              className="alicia"
            />
          </div>
        </div>
      </div>
      <Carousel />
    </AnimatePresence>
  );
};

export default Portfolio;
