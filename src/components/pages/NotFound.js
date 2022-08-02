import "../../css/notFound.css";
import { AnimatePresence, motion } from "framer-motion";
import img from "../../assets/img";

const NotFound = () => {
  return (
    <AnimatePresence>
      <div className="notFound-container">
        <div className="notFound-cloud">
          <motion.img
            initial={{
              x: 400,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 7,
              ease: "easeOut",
            }}
            src={img.cloud}
            alt="clud"
          />
        </div>
        <div className="notFound-branch">
          <motion.img
            initial={{
              x: -300,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 3,
            }}
            src={img.branch}
            alt="branch"
          />
        </div>
        <div className="notFound-totoro">
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: 2,
            }}
            src={img.totoro}
            alt="totoro"
          />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default NotFound;
