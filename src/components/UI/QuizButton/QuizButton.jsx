import React from 'react';
import classes from './QuizButton.module.css'

const QuizButton = ({label, ...props}) => {
  return (
    <button
      className={classes.QuizButton}
      {...props}
    >
      {label}
    </button>
  );
};

export default QuizButton;