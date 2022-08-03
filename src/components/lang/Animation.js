import "../../css/animation.css";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../../assets/img";

const Animation = ({ estado }) => {
  return (
    <AnimatePresence>
      {estado && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [1, 1, 1, 0],
          }}
          transition={{
            duration: 2.5,
            ease: "easeOut",
          }}
          className="animation-container"
        >
          <div className="image-container">
            <motion.img
              animate={{
                scale: [1.8, 1],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                // delay: 1,
              }}
              src={Img.logo}
              alt="logo"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Animation;
