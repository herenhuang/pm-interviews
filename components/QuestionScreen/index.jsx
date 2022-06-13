import React, { useState, useEffect, useRef } from "react";
import Timer from "../Timer";
import MainButton from "../MainButton";
import SocialFooter from "../SocialFooter";
import "./QuestionScreen.css";

function QuestionScreen(props) {
  const { title } = props;
  const [question, setQuestion] = useState("Loading...");
  const [questions, setQuestions] = useState(["Loading..."]);
  const [questionIndex, setQuestionIndex] = useState(1);

  const next = () => {
    const random = Math.floor(Math.random() * questions.length);
    setQuestion(questions[random]);
    setQuestionIndex(questionIndex + 1);    
  };

  const getData = () => {
    fetch("/data/questions.json", {})
      .then(function (response) {
        return response.json();
      })
      .then(function (qJson) {
        setQuestions(qJson);
        setQuestion(qJson[0]);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {    
  }, [questionIndex]);

  return (
    <div className="container-center-horizontal">
      <div className="question-screen screen">
        <h1 className="title valign-text-middle inter-bold-white-32px">{question}</h1>
        <Timer initialSeconds={30} index={questionIndex} />
        <MainButton onClick={() => next()}>Next question ~</MainButton>
        <SocialFooter />
      </div>
    </div>
  );
}

export default QuestionScreen;
