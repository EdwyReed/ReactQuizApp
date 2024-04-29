import React, {useState} from 'react';
import classes from './QuizStep.module.css'
import QuizAnswer from "../UI/QuizAnswer/QuizAnswer";

const QuizStep = ({question, onAnswer}) => {

  const [answered, setAnswered] = useState(
    {
      answer: undefined,
      correct: undefined
    })

  const submit = (index, answer) => {
    setAnswered({answer: index, correct: answer.isCorrect})
    onAnswer(answer.isCorrect)
  }

  return (
    <div className="QuizStep">
      <h3 className={classes.StepQuestion}>
        {question.question}
      </h3>
      <div className={classes.StepAnswersContainer}>
        {question.answers.map((answer, index) =>
          <QuizAnswer
            key={index}
            text={answer.text}
            isCorrect={answer.isCorrect}
            isAnswer={index === answered.answer}
            disabled={answered.answer !== undefined}
            onClick={() => submit(index, answer)}
          />
        )}
      </div>
    </div>
  );
};

export default QuizStep;