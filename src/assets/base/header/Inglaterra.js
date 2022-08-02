import "./css/flags.css";
import { langContext } from "../../../context/langContext";
import { useContext } from "react";

const Inglaterra = () => {
  const lang = useContext(langContext);

  return (
    <svg
      onClick={() => lang.changeLang("en")}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 540 325"
      className="inglaterra"
    >
      <path className="inglaBlue" d="M0 0h540v325H0z" />
      <path
        className="inglaWhite"
        d="M540 0h-67.6L331.8 84.6V0H207.9v88L59.2 0H0v43.9l106.7 63.4H0V220h105.8L0 283.9V325h70l137.9-83.2V325h123.9v-84.6L474.2 325H540v-40.7L431.6 220H540V107.4H432.2l107.8-65V0z"
      />
      <g className="inglaRed">
        <path d="M173.8 107.4 0 0v28.3l129.9 79c15.7.1 30.8.1 43.9.1zM366.4 220 540 325v-26.4L410.4 220h-44zM207.9 220h-35.8L0 325h41.2l166.6-99.9c.1-1.8.1-3.5.1-5.1zM331.8 107.4h33.3L540 2.6V0h-39.4L331.8 100.8v6.6z" />
      </g>
      <path className="inglaRed" d="M540 131.3H305.2V0h-70.8v131.3H0v64.8h234.4V325h70.8V196.1H540z" />
    </svg>
  );
};

export default Inglaterra;
