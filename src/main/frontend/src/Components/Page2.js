import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './Page2.css';

function Page2({ signOut, user }) {
    return (
        <div className="page2-container">
            <h1 className="page2-title">Hello, {user.username}!</h1>
            <button className="page2-signout-button" onClick={signOut}>
                Sign Out
            </button>
            <p className="page2-description">
                Welcome to the Quiz App! Here you can explore various quizzes to test your knowledge and have fun!
                Click on the "Quizzes" link in the navigation bar to get started.
            </p>
            <img src="/QuizAppIcon.jpeg" alt="Quiz Background" className="quiz-background"/>
        </div>
    );
}

export default withAuthenticator(Page2);