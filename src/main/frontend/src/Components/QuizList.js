import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './QuizList.css';

const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await fetch('http://localhost:8080/quizzes');
                if (!response.ok) {
                    throw new Error('Failed to fetch quizzes');
                }
                const data = await response.json();
                setQuizzes(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchQuizzes();
    }, []);

    const quizImages = {
        'Scientific Knowledge': '/ScientificKnowledge.jpg',
        'Common Knowledge': '/CommonKnowledge.jpg'
    };

    return (
        <div className="quiz-list-container">
            <h1>Quiz List</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <ul className="quiz-list">
                    {quizzes.map((quiz, index) => (
                        <li key={quiz.quiz_id || `quiz-${index}`} className="quiz-item">
                            <Link to={`/quiz/${quiz.quiz_id}`} className="quiz-link">
                                {quizImages[quiz.title] && (
                                    <img
                                        src={quizImages[quiz.title]}
                                        alt={quiz.title}
                                        className="quiz-image"
                                    />
                                )}
                                <div className="quiz-text">
                                    <h2>{quiz.title}</h2>
                                    <p>{quiz.description}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default QuizList;