import React from "react";
import MainButton from "../MainButton";
import SocialFooter from "../SocialFooter";
import "./WelcomeScreen.css";
import { useHistory } from "react-router-dom";

function WelcomeScreen(props) {
  const { title, subtitle } = props;
  let history = useHistory();

  return (
    <div className="container-center-horizontal">
      <div className="welcome-screen screen">
        <div className="title-2 inter-bold-white-32px">{title}</div>
        <p className="subtitle">{subtitle}</p>
        <MainButton className="main-button-1" onClick={()=> history.push("/question-screen")}>Start</MainButton>
        <SocialFooter />
      </div>
    </div>
  );
}

export default WelcomeScreen;
