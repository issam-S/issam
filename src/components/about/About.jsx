import React from "react";
import "./about.css";
import ME from "../../assets/es.jpg";
import { TbAward } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { HiFolderOpen } from "react-icons/hi";
import StarButton from "../Buttons/starButton/StarButton";
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
            Hi, my name is Essam. I am 28 years old, and I am a front-end
            developer with great passion for developing the educational web.
            More than 1 year experience The work I provide is of the highest
            quality, fully responsive, and tested in a wide range of devices. I
            take great care to ensure each project is well-documented and easily
            maintainable so you can enhance a website as your company grows.
            Often front-end development of a website is overlooked, but being
            the part of your project that combines design, back-end development
            and the layer that your users interact with, from my experience, it
            is the most important to get right. I create responsive websites
            that allow the user to experience your website in the best and most
            appropriate way suited to the device they are using. By working
            using progressive enhancement, your website is delivered with a
            responsive layout that can best make use of the space available on
            the smallest to largest devices. Cross-browser compatibility is
            ensured by using feature detection so older browsers still in use
            today provide a solid experience, whilst modern browsers can go the
            next step and enhance a user’s time spent on your site
          </p>
          <a href="#contact">
            <StarButton title="Let's Talk" />
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
