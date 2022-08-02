import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import "../../../css/aboutPop.css";
import img from "../../../assets/img";

const AboutPop = () => {
  return (
    <div className="aboutPop_about">
      <h3 className="aboutPop_title">
        <FormattedMessage id="aboutPop_title" defaultMessage="AboutPop" />
      </h3>
      <div className="aboutPop_info-container">
        <div className="aboutPop_info_title-container">
          <h1 className="aboutPop_info_title_title">
            <FormattedMessage id="aboutPop_info_title_title" defaultMessage="AboutPop" />
          </h1>
          <p className="version">v1.0 - Trainee</p>
          <p className="aboutPop_info_title_text">
            <FormattedMessage id="aboutPop_info_title_text" defaultMessage="AboutPop" />
          </p>
          <div className="aboutPop-papa">
            <p className="aboutPop_info_title_text dialog">
              "<FormattedMessage id="aboutPop_info_title_text_dialog" defaultMessage="AboutPop" />"
            </p>
            <img src={img.papa} alt="papa" />
          </div>
          <p className="aboutPop_info_title_text">
            <FormattedMessage id="aboutPop_info_title_text_1" defaultMessage="AboutPop" />
          </p>
          <p className="aboutPop_info_title_text">
            <FormattedMessage id="aboutPop_info_title_text_2" defaultMessage="AboutPop" />
          </p>
          <p className="aboutPop_info_title_text">
            <FormattedMessage id="aboutPop_info_title_text_3" defaultMessage="AboutPop" />
          </p>
        </div>
        <div className="aboutPop_skills-container">
          <h3>Skills Trainee</h3>
          <div className="skill-container">
            <motion.img
              initial={{
                scale: 3,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3,
              }}
              src={img.react}
              alt="react"
            />
            <motion.img
              initial={{
                scale: 3,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.5,
              }}
              src={img.html}
              alt="html"
            />
            <motion.img
              initial={{
                scale: 3,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.7,
              }}
              src={img.css}
              alt="css"
            />
          </div>
          <div className="skill-container">
            <motion.img
              initial={{
                scale: 3,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.9,
              }}
              src={img.js}
              alt="js"
            />
            <motion.img
              initial={{
                scale: 3,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.1,
              }}
              src={img.wp}
              alt="wp"
            />
            <motion.img
              initial={{
                scale: 3,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.3,
              }}
              src={img.git}
              alt="git"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPop;
