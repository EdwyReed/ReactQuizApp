import React from 'react';
import QuizStepIcon from "../QuizStepIcon/QuizStepIcon";
import classes from './QuizStepIconsRow.module.css'

const QuizStepIconsRow = ({answers}) => {
  return (
    <div className={classes.QuizStepIconsRow}>
      {answers.map((answer, index) =>
        <QuizStepIcon answer={answer} key={index}/>
      )}
    </div>
  );
};

export default QuizStepIconsRow;