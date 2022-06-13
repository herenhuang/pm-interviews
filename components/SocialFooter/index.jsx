import React from "react";
import "./SocialFooter.css";

function SocialFooter() {
  return (
    <div className="social-footer">
      <p className="footer-text inter-normal-white-12px">
        Product Manager Mock Interview Prep
        <br />
        Built with ♥ ♥ ♥ by Co.Lab
      </p>
      <div className="logo-white-container">        
        <a href="https://joincolab.io" target="_blank">
          <img className="github-logo-white" src="/img/Circle Logo.png" />
        </a>
        <a href="https://www.figma.com/@anima" target="_blank">
          <img className="ma-logo-white" src="/img/figma-logo-white-1@2x.svg" />
        </a>
        <a href="https://medium.com/@avishic/how-to-nail-your-yc-interview-e3a4d12871f3" target="_blank">
          <img className="medium-logo-white" src="/img/medium-logo-white-1@2x.svg" />
        </a>
        <a href="https://animaapp.com/?utm_source=anima-github-live&utm_campaign=yc-prep&utm_medium=anima-github-live" target="_blank">
          <img className="ma-logo-white" src="/img/anima-logo-white-2@2x.svg" />
        </a>
      </div>
    </div>
  );
}

export default SocialFooter;
