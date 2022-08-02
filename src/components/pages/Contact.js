import { AnimatePresence, motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import "../../css/contact.css";
import img from "../../assets/img";

const Contact = () => {
  return (
    <AnimatePresence>
      <div className="contact-container">
        <div className="contact_title">
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
          >
            <FormattedMessage id="contact_title" defaultMessage="Contact" />
          </motion.h1>
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
            delay: 0.5,
          }}
          className="contact_paragraph"
        >
          <p>
            <FormattedMessage id="contact_paragraph_1" defaultMessage="Contact" />
          </p>
          <p>
            <FormattedMessage id="contact_paragraph_2" defaultMessage="Contact" />
          </p>
        </motion.div>
        <div className="contact_icons">
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
            className="contact_icons-line"
          />
          <div className="contact_icons-icons">
            <motion.a
              initial={{
                scale: 3,
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
              href="mailto:contacto@leandropereyra.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img.mail} alt="mail" className="iconContact" />
            </motion.a>
            <motion.a
              initial={{
                scale: 3,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.7,
              }}
              href="https://github.com/leandropereyradev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img.github} alt="github" className="iconContact" />
            </motion.a>
            <motion.a
              initial={{
                scale: 3,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.9,
              }}
              href="https://www.linkedin.com/in/leandropereyradev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img.linkedin} alt="linkedin" className="iconContact" />
            </motion.a>
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
              delay: 0.9,
            }}
            className="contact_icons-line"
          />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Contact;
