import React from 'react';
import classes from "./QuizStepIcon.module.css"
import { ReactComponent as CorrectSVG } from "../../../assets/CorrectIcon.svg";
import { ReactComponent as IncorrectSVG } from "../../../assets/IncorrectIcon.svg";

const QuizStepIcon = ({answer}) => {

  const iconStyle = () => {
    if (answer !== '0') {
      return answer === 'true' ? '#377e22' : '#c85c5c';
    } else return '#cccccc'
  }

  return (
    <div
      className={classes.QuizStepIcon}
      style={{
        backgroundColor: `${iconStyle()}`
      }}
    >
      {answer === 'true' && <CorrectSVG/>}
      {answer === 'false' && <IncorrectSVG/>}
    </div>
  );
};

export default QuizStepIcon;