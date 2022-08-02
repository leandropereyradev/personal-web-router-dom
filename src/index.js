import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { LangProvider } from "./context/langContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <LangProvider>
      <App />
    </LangProvider>
);
