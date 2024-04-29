import React from 'react';
import classes from "./QuizStepCounter.module.css";

const QuizStepCounter = ({step, maxSteps}) => {
  if (step <=3) {
    return (
      <div className='QuizStepCounter'>
        <span className={classes.QuestionCounter}>Question {step} of {maxSteps}</span>
        <div className={classes.Delimiter}/>
      </div>
    );
  } else {
    return (
      <div className='QuizStepCounter'>
        <span className={classes.QuestionCounter}>Quiz Results</span>
        <div className={classes.Delimiter}/>
      </div>
    );
  }
};

export default QuizStepCounter;