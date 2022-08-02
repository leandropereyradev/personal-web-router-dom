import "./css/flags.css";
import { langContext } from "../../../context/langContext";
import { useContext } from "react";

const Espana = () => {
  const lang = useContext(langContext);

  return (
    <svg onClick={() => lang.changeLang("es")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 325" className="espana">
      <path d="M0 0h540v325H0V0z" className="espaRed" />
      <path d="M0 81.2h540v162.5H0V81.2z" className="espaYellow" />
    </svg>
  );
};

export default Espana;
