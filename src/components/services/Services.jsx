import React from "react";
import "./services.css";
import { BsCodeSquare } from "react-icons/bs";
import { MdScreenshot } from "react-icons/md";
import { SlWrench } from "react-icons/sl";
import { FaLinode } from "react-icons/fa";
function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* Start UI & UX Service */}
        <div className="service">
          <span>
            <SlWrench />
          </span>
          <p>
            The work I provide is of the highest quality, fully responsive, and
            tested in a wide range of devices. I take great care to ensure each
            project is well-documented and easily maintainable so you can
            enhance a website as your company grows.
          </p>
        </div>
        {/* end UI & UX Service */}
        {/* Start WEB Devpolment */}
        <div className="service">
          <span>
            <MdScreenshot />
          </span>
          <p>
            important to get right. I create responsive websites that allow the
            user to experience your website in the best and most appropriate way
            suited to the device they are using. By working using progressive
            enhancement, your website is delivered with a responsive layout that
            can best make use of the space available on the smallest to largest
            devices. Cross-browser
          </p>
        </div>
        {/* end WEB Devpolment */}
        {/* Start CONTENT CREATION */}
        <div className="service">
          <span>
            <FaLinode />
          </span>
          <p>
            Often front-end development of a website is overlooked, but being
            the part of your project that combines design, back-end development
            and the layer that your users interact with, from my experience, it
            is the most
          </p>
        </div>
        <div className="service">
          <span>
            <BsCodeSquare />
          </span>
          <p>
            compatibility is ensured by using feature detection so older
            browsers still in use today provide a solid experience, whilst
            modern browsers can go the next step and enhance a user’s time spent
            on your sitez
          </p>
        </div>
        {/* end CONTENT CREATION */}
      </div>
    </section>
  );
}

export default Services;
