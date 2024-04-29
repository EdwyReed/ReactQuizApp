import React from 'react';
import classes from './QuizAnswer.module.css'

const QuizAnswer = ({text, isCorrect, isAnswer, disabled, ...props}) => {

  const answerBackground = () => {
    if (isAnswer) {
      return isCorrect ? '#377e22' : '#c85c5c';
    }
  }

  return (
    <div
      {...props}
      className={classes.QuizAnswer}
      style={{
        backgroundColor: `${answerBackground()}`,
        color: `${answerBackground() ? 'white' : 'black'}`,
        pointerEvents: disabled ? 'none' : 'all',
        cursor: disabled ? 'default' : 'pointer'
      }}
    >
      {text}
    </div>
  );
};

export default QuizAnswer;