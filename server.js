const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Quiz Application Backend!');
});

const quizzes = [
    { quiz_id: 1, title: 'Scientific Knowledge', description: 'This quiz tests your scientific knowledge.' },
    { quiz_id: 2, title: 'Common Knowledge', description: 'This quiz tests general knowledge that everyone should know.' },
];

app.get('/quizzes', (req, res) => {
    res.json(quizzes);
});

app.get('/quiz/:quizId', (req, res) => {
    const quizId = parseInt(req.params.quizId);
    const quiz = quizzes.find((q) => q.quiz_id === quizId);
    if (quiz) {
        res.json(quiz);
    } else {
        res.status(404).json({ error: 'Quiz not found' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});