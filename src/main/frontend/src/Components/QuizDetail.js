import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './QuizDetail.css';

const QuizDetail = () => {
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchQuizDetails = async () => {
            try {
                const quizResponse = await fetch(`http://localhost:8080/quizzes/${quizId}`);
                if (!quizResponse.ok) {
                    throw new Error('Failed to fetch quiz details');
                }
                const quizData = await quizResponse.json();
                setQuiz(quizData);

                const questionsResponse = await fetch(`http://localhost:8080/questions?quiz_id=${quizId}`);
                if (!questionsResponse.ok) {
                    throw new Error('Failed to fetch questions');
                }
                const questionsData = await questionsResponse.json();
                setQuestions(questionsData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchQuizDetails();
    }, [quizId]);

    return (
        <div className="quiz-detail-container">
            <h1>Quiz Detail</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && quiz && (
                <>
                    <h2>{quiz.title}</h2>
                    <p>{quiz.description}</p>
                    <ul className="question-list">
                        {questions.map((question) => (
                            <li key={question.question_id} className="question-item">
                                <h3>{question.question_text}</h3>
                                <p>Correct Answer: {question.correct_answer}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default QuizDetail;