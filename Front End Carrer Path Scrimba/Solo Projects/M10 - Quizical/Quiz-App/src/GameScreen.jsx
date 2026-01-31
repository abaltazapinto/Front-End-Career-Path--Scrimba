import react, {useState, useEffect} from "react"
import {decode} from 'html-entities';

export default function GameScreen(){
    // set up states
    const [currentAnswers, setCurrentAnswers] = useState(["", "", "", "", ""])
    const [correctAnswers, setCorrectAnswers] = useState([]) // the correct answers of all the questions
    const [questions, setQuestions] = useState([]) // the questions
    const [answerChoices, setAnswerChoices] = useState([]) // a list of lists that holds all of the answer choices and shuffles each sublist
    const [resetCount, setResetCount] = useState(0) // used for restarting the game
    const [hasChecked, setHasChecked] = useState(false)
    const [numCorrect, setNumCorrect] = useState(0)

    // get the question/answer data
    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => {
                const questionsArr = []
                const correctArr = []
                const answerChoicesArr = []

                data.results.forEach(result => {
                    questionsArr.push(decode(result.question))
                    correctArr.push(decode(result.correct_answer))

                    // create answer choices array
                    const answersTemp = result.incorrect_answers.map(ans => decode(ans))
                    answersTemp.push(decode(result.correct_answer))

                    // shuffle array 
                    for (let i = answersTemp.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1))
                        let temp = answersTemp[i];
                        answersTemp[i] = answersTemp[j];
                        answersTemp[j] = temp;
                    }

                    answerChoicesArr.push(answersTemp)
                })

                setQuestions(questionsArr)
                setCorrectAnswers(correctArr)
                setAnswerChoices(answerChoicesArr)
            })
            .catch(err => console.error("Fetch error:", err))
    }, [resetCount]) // starts off at 0 so it runs just once

    function updateCurrentAnswers(index, newValue) {
        const newAnswers = [...currentAnswers] // copy the array
        newAnswers[index] = newValue          // update the selected question
        setCurrentAnswers(newAnswers)         // save it to state
    }

    function resetGame() {
        setHasChecked(false)
        setCurrentAnswers(["", "", "", "", ""])
        setResetCount(prev => prev + 1)
    }

    function checkanswers() {
        setHasChecked(true)
        // count how many are correct
        correctAnswers.map((answer, index) => {
            if (answer === currentAnswers[index]) {
                setNumCorrect(prev => prev+1)
            }
        })
    }

    // map the questions and use the index 
    const questionElements = questions.map((question, index) => {
        if (!answerChoices[index]) return null;

        const answers = answerChoices[index].map((answer, answerIndex) => {
            const inputId = `question${index}answer${answerIndex}`;
            let className = "";

            if (hasChecked) {
                const userChoice = currentAnswers[index];
                const correctChoice = correctAnswers[index];

                if (answer === correctChoice) {
                    className = "right";
                } else if (answer === userChoice) {
                    className = "wrong";
                } else {
                    className = "unselected";
                }
            }

            return (
                <div key={inputId} className="answer-option">
                    <input
                        type="radio"
                        id={inputId}
                        name={`question${index}`}
                        value={answer}
                        onChange={() => updateCurrentAnswers(index, answer)}
                        checked={currentAnswers[index] === answer}
                        disabled={hasChecked}
                    />
                    <label htmlFor={inputId} className={className}>{answer}</label>
                </div>
            );
        });

        return (
            <div className="question" key={`question${index}`}>
                <p>{question}</p>
                <div className="answer-choices">
                    {answers}
                </div>
            </div>
        );
    });

    function PlayAgain() {
        return (
            <div className="play_again">
                <p>You scored {numCorrect}/5 correct answers</p>
                <button onClick={resetGame}>Play again?</button>
            </div>
        )
    }

    return (
        <div className="question-holder">
            {questionElements}
            {!hasChecked && <button className="check" onClick={() => checkanswers(currentAnswers)}>Check Answers</button>}
            {hasChecked && <PlayAgain/>}
        </div>
    )
}