import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';

function App() {
  return (
    constructor(props) {
      super(props);

      this.state={
        counter: 0,
        questionId: 1,
        question:'',
        answerOptions:[],
        answer:'',
        answersCount: {},
        result: '',
      };
    }
    componentDidMount() {
      const shuffledAnswerOptions = quizQuestions.map((question) = > this.shuffleArray(question.answers));

      this.setState({
        question: quizQuestions[0].question,
        answerOptions: shuffledAnswerOptions[0]
      });
    }
    shuffleArray(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element...
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };
    }
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Allen Digital Quiz</h2>
      </div>
      <Question content="What services are you looking for?" />
    </div>
  );
}

export default App;
