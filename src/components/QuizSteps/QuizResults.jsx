import React from 'react';
import classes from "./QuizStep.module.css";

const QuizResults = ({points, questionsNumber}) => {
  return (
    <div>
      <h3 className={classes.QuizResults}>
        You answered right {points} of {questionsNumber} questions!
      </h3>
    </div>
  );
};

export default QuizResults;