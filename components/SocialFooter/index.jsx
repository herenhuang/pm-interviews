import React from "react";
import "./SocialFooter.css";

function SocialFooter() {
  return (
    <div className="social-footer">
      <p className="footer-text inter-normal-white-12px">
        Product Manager Mock Interview Prep
        <br />
        Built with ❤️ by Co.Lab
      </p>
      <div className="logo-white-container">        
        <a href="https://joincolab.io" target="_blank">
          <img className="github-logo-white" src="/img/Circle Logo.png" />
        </a>
        <a href="https://www.figma.com/@anima" target="_blank">
          <img className="ma-logo-white" src="/img/icons8-twitter-50.png" />
        </a>
        <a href="https://linkedin.com/company/joincolab" target="_blank">
          <img className="medium-logo-white" src="/img/icons8-linkedin-2-50.png" />
        </a>
        <a href="https://https://www.instagram.com/joincolab_io/" target="_blank">
          <img className="ma-logo-white" src="/img/icons8-instagram-logo-50.png" />
        </a>
      </div>
    </div>
  );
}

export default SocialFooter;
