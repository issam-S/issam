import React from "react";
import "./about.css";
import ME from "../../assets/es.png";
import { TbAward } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { HiFolderOpen } from "react-icons/hi";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="know" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5>Expriance</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clinets</h5>
              <small>worldwide</small>
            </article>
            <article className="about__card">
              <HiFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Complated Projects</small>
            </article>
          </div>
          <p>
          Hi, my name is Essam. I am 28 years old, and I am a front-end developer with great passion for developing the educational web. More than 1 year experience
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
