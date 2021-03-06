import { type } from 'os'
import React from 'react'

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}

export const QuestionCard: React.FC<Props>  = ( {question, answers, callback, userAnswer, questionNumber, totalQuestions} ) => {


    return (
        <div>
           <p>
               Question: {questionNumber} / {totalQuestions}
            </p>
           <p dangerouslySetInnerHTML={{ __html: question }} />

           <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}   
            </div> 
        </div>
    )
}
