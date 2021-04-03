import React from "react";
import { fetchQuestion } from "../services/triviaServices";

const divStyle = {
  backgroundColor: "#D9EAF8",
  margin: "50px",
  padding: "30px",
  borderRadius: "15px",
};


export const Card = ({question, answers, correctAnswer, isCorrect}) => {
  const checkAnswer = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer){
      isCorrect(true);
      return true
    } else {
      isCorrect(false);
      return false 
    }
  };

  const allAnswers = () => {
    return [...answers, correctAnswer]
  };

  return(
    <React.Fragment>
      <div style={divStyle}>
        <h2> {question} </h2>
        {allAnswers().map((answer, index) => (
          <p key = {index} onClick={() => checkAnswer(answer)}>{answer} </p>
        ))}
      </div>
    </React.Fragment>
  );
};

/*
 Mezclar las posibles respuestas
 Poner Limites  x<1 x>10 
*/