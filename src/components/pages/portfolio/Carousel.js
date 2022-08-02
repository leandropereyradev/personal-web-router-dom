import { FormattedMessage } from "react-intl";
import "../../../css/carousel.css";
import { bdPortfolio } from "./bdPortfolio";
import { useEffect, useState } from "react";
import img from "../../../assets/img";

const Carousel = () => {
  const [works] = useState(bdPortfolio);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = works.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, works]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="carousel">
      <div className="carousel-center">
        {works.map((singleWork, indexWork) => {
          const { id, title, subtitle, tech, web, github, image } = singleWork;
          let position = "nextSlide";
          if (indexWork === index) {
            position = "activeSlide";
          }
          if (indexWork === index - 1 || (index === 0 && indexWork === works.length - 1)) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <div className="carousel-container">
                <div className="carousel_image-container">
                  <img src={image} alt="images" />
                </div>
                <div className="carousel_titulo">
                  <h3>{title}</h3>
                  <h5>{subtitle}</h5>
                  <div className="carousel_contenedor-lineas">
                    <div className="carousel_linea-uno" />
                    <div className="carousel_linea-dos" />
                  </div>
                  <h6>{tech}</h6>
                  <div className="carousel_links">
                    {web ? (
                      <a
                        href={web}
                        target="_blank"
                        rel="noopener
                                noreferrer"
                      >
                        <FormattedMessage id="links_1" defaultMessage="Portfolio" />
                      </a>
                    ) : (
                      <></>
                    )}
                    {github ? (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener
                                noreferrer"
                      >
                        <FormattedMessage id="links_2" defaultMessage="Portfolio" />
                      </a>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        <img className="carousel-left" src={img.left} alt="left" onClick={() => setIndex(index - 1)} />
        <img className="carousel-right" src={img.right} alt="rigth" onClick={() => setIndex(index + 1)} />
      </div>
    </div>
  );
};

export default Carousel;
