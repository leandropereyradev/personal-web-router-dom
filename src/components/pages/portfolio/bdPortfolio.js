import img from "../../../assets/img";
import { FormattedMessage } from "react-intl";

export const bdPortfolio = [
  {
    id: 1,
    title: "Celia Martín Pérez",
    subtitle: <FormattedMessage id="celia" defaultMessage="PortDB" />,
    tech: "WordPress",
    web: "https://celiamartinperez.com/",
    image: img.celia,
  },
  {
    id: 2,
    title: "El Menú de Alicia",
    subtitle: <FormattedMessage id="alicia" defaultMessage="PortDB" />,
    tech: "WordPress",
    web: "https://elmenudealicia.es/",
    image: img.alicia,
  },
  {
    id: 3,
    title: "Bienestar",
    subtitle: <FormattedMessage id="yoga" defaultMessage="PortDB" />,
    tech: "WordPress",
    web: "https://yogaypilatesoviedo.com/",
    image: img.yoga,
  },
  {
    id: 4,
    title: <FormattedMessage id="todo" defaultMessage="PortDB" />,
    subtitle: "ToDo App Web",
    tech: "React.JS | TailWind | JavaScript",
    web: "https://leandropereyra.github.io/todolist/",
    github: "https://github.com/leandropereyra/todolist",
    image: img.lista,
  },
  {
    id: 5,
    title: "Weather App",
    subtitle: <FormattedMessage id="weather" defaultMessage="PortDB" />,
    tech: "React.JS | TailWind | JavaScript",
    web: "https://leandropereyra.github.io/weatherapp/",
    github: "https://github.com/leandropereyra/weatherapp",
    image: img.weather,
  },
  {
    id: 6,
    title: "Leandro Pereyra",
    subtitle: <FormattedMessage id="leandro" defaultMessage="PortDB" />,
    tech: "React.JS | JavaScript",
    github: "https://github.com/leandropereyradev/personal-web-router-dom",
    image: img.leandro,
  },
];
