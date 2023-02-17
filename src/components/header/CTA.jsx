import React from "react";
import CV from "../../assets/Essam-Front_End-Developer.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download C.V
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
