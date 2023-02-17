import React from "react";
import { GrLinkedin, GrFacebook, GrTwitter, GrGithub } from "react-icons/gr";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/essam2715/"
        target="_blank"
        rel="noopener noreferrer">
        <GrLinkedin />
      </a>
      <a href="http://facebook.com/essam2715/" target="_blank" rel="noopener noreferrer">
        <GrFacebook />
      </a>
      <a href="https://twitter.com/essam_u" target="_blank" rel="noopener noreferrer">
        <GrTwitter />
      </a>
      <a href="https://github.com/issam-S" target="_blank" rel="noopener noreferrer">
        <GrGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
