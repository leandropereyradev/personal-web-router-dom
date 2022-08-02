import "./css/flags.css";
import { langContext } from "../../../context/langContext";
import { useContext } from "react";

const Catalunya = () => {
  const lang = useContext(langContext);

  return (
    <svg
      onClick={() => lang.changeLang("cat")}
      version="1.1"
      className="catalunya"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 540 325"
    >
      <path d="M0 0h540v325H0V0z" className="cataYellow" />
      <path className="cataRed" d="M0 32.5h540v36.8H0zM0 107.7h540v36.8H0zM0 183h540v36.8H0zM0 256h540v36.8H0z" />
    </svg>
  );
};

export default Catalunya;
