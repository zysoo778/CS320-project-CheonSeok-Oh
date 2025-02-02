import {useEffect, useState} from 'react';
import {API_URL} from "../config";
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`${API_URL}/hello/personalized`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({first: 'Ensign', last: 'Student'})
      });
      const text = await response.text();
      setMessage(text);
    };
    fetchMessage();
  }, []);

  return (
      <div className="app-container">
        <h1 className="app-title">Welcome to the Quiz App!</h1>
        <p className="app-description">
          Test your knowledge with fun and challenging quizzes.
          Click on the "Page 2" tab in the navigation bar to sign-up and log-in!
        </p>
        {/*<h2 className="app-subtitle">Message from the backend:</h2>*/}
        {/*<p className="backend-message">{message}</p>*/}
      </div>
  );
}

export default App;
