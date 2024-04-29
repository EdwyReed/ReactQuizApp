import React, {useState} from 'react';
import QuizButton from "./UI/QuizButton/QuizButton";
import QuizStepCounter from "./UI/QuizStepCounter/QuizStepCounter";
import QuizResults from "./QuizSteps/QuizResults";
import QuizStep from "./QuizSteps/QuizStep";
import QuizStepIconsRow from "./UI/QuizStepIconsRow/QuizStepIconsRow";

const Quiz = ({questions}) => {
  const [answers, setAnswers] = useState(Array.from('0'.repeat(questions.length)))
  const [points, setPoints] = useState(0)
  const [step, setStep] = useState(1)
  const maxSteps = questions.length;

  const nextStep = () => setStep(step + 1)
  const onAnswer = (isCorrect) => {
    setPoints(isCorrect ? points + 1 : points)
    setAnswers(answers.map((answer, index) => {
      if (step === index + 1) {
        return isCorrect ? 'true' : 'false'
      } else return answer
    }))
  }

  console.log(questions)

  return (
    <div className="QuizContent">
      <QuizStepCounter step={step} maxSteps={maxSteps}/>
      {step <= maxSteps
        ? questions.map((question, index) =>
          step - 1 === index &&
          <QuizStep
            onAnswer={onAnswer}
            question={question}
            key={index}/>
        )
        : <QuizResults points={points} questionsNumber={maxSteps}/>
      }
      {step <= maxSteps &&
        <QuizButton
          label={step < maxSteps ? 'Next' : 'Finish'}
          onClick={nextStep}
        />
      }
      <QuizStepIconsRow answers={answers}/>
    </div>
  );
};

export default Quiz;