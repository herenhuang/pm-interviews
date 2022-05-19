import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import QuestionScreen from "./components/QuestionScreen";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/question-screen">
          <QuestionScreen
            title="Question comes here"
            timerProps={questionScreenData.timerProps}
            mainButtonProps={questionScreenData.mainButtonProps}
          />
        </Route>
        <Route path="/:path(|welcome-screen)">
          <WelcomeScreen
            title={
              <React.Fragment>
                YC Interview
                <br />
                Preperation
              </React.Fragment>
            }
            subtitle={
              <React.Fragment>
                Practice your story &amp; numbers,
                <br />
                get ready to a 10 minute interview.
              </React.Fragment>
            }
            mainButtonProps={welcomeScreenData.mainButtonProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const timerData = {
    text: "30",
};

const mainButton1Data = {
    children: "Next",
};

const questionScreenData = {
    timerProps: timerData,
    mainButtonProps: mainButton1Data,
};

const mainButton2Data = {
    children: "Start",
};

const welcomeScreenData = {
    mainButtonProps: mainButton2Data,
};

