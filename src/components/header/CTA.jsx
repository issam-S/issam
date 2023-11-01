import React from "react";
import CV from "../../assets/Essam-FrontEnd.pdf";
import StarButton from "../Buttons/starButton/StarButton";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download>
        <StarButton title="Download C.V" />
      </a>

      <a href="#contact">
        <StarButton title="Let's Talk" />
      </a>
    </div>
  );
}

export default CTA;
