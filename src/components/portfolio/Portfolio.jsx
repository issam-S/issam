import React from "react";
import "./portfolio.css";
import Image1 from "../../assets/portfolio/1.png";
import Image2 from "../../assets/portfolio/2.png";
import Image3 from "../../assets/portfolio/3.png";
import Image4 from "../../assets/portfolio/4.png";
import Image5 from "../../assets/portfolio/5.png";
import Image6 from "../../assets/portfolio/6.png";
import Image7 from "../../assets/portfolio/7.png";
import Image8 from "../../assets/portfolio/8.png";
import Image9 from "../../assets/portfolio/9.png";
import GithubButton from "../Buttons/githubButton/GithubButton";
import StarButton from "../Buttons/starButton/StarButton";
const data = [
  {
    id: 9,
    image: Image9,
    title: "events app",
    github: "https://github.com/issam-S/event-app",
    demo: "https://event-app-ar.vercel.app/",
  },
  {
    id: 1,
    image: Image1,
    title: "New Castle College",
    github: "https://github.com/issam-S/newCastle-College",
    demo: "https://issam-s.github.io/newCastle-College/",
  },
  {
    id: 2,
    image: Image2,
    title: "Chairman Holding ",
    github: "https://github.com/issam-S/chairmanCode",
    demo: "https://issam-s.github.io/chairmanCode/",
  },
  {
    id: 3,
    image: Image3,
    title: "Dream Travel",
    github: "https://github.com/issam-S/Dream-Travel",
    demo: "https://issam-s.github.io/Dream-Travel/",
  },
  {
    id: 4,
    image: Image4,
    title: "Shokak",
    github: "https://github.com/issam-S/apartment",
    demo: "https://issam-s.github.io/apartment/",
  },
  {
    id: 5,
    image: Image5,
    title: "MrDiscount",
    github: "https://github.com/issam-S/MrDiscount",
    demo: "https://issam-s.github.io/MrDiscount/",
  },
  {
    id: 6,
    image: Image6,
    title: "leon IO",
    github: "https://github.com/issam-S/leon",
    demo: "https://issam-s.github.io/leon/",
  },
  {
    id: 7,
    image: Image7,
    title: "KSA Sport",
    github: "https://github.com/issam-S/KSA-Sport-",
    demo: "https://issam-s.github.io/KSA-Sport-/",
  },
  {
    id: 8,
    image: Image8,
    title: "portfolio",
    github: "https://github.com/issam-S/old-Portfolio",
    demo: "https://issam-s.github.io/old-Portfolio/",
  },
];
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image ">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github}>
                  <GithubButton />
                </a>
                <a href={demo} target="_blank" rel="noreferrer">
                  <StarButton title="Live Demo" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
