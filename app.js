var React = require('react');
var ReactDOM = require('react-dom');

var QuizApp = React.createClass({
  getInitialState: function() {
    return { questions: [], currentQuestion: 0, score: 0 };
  },

  componentDidMount: function() {
    this.setState({
      questions: [
        { question: 'What is the capital of France?', answer: 'Paris' },
        { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
        { question: 'What is the smallest country in the world?', answer: 'Vatican City' }
      ]
    });
  },

  handleAnswer: function(answer) {
    if (answer === this.state.questions[this.state.currentQuestion].answer) {
      this.setState({ score: this.state.score + 1 });
    }
    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
  },

  render: function() {
    if (this.state.currentQuestion >= this.state.questions.length) {
      return (
        <div>
          <h1>Quiz App</h1>
          <p>Score: {this.state.score} / {this.state.questions.length}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Quiz App</h1>
          <p>{this.state.questions[this.state.currentQuestion].question}</p>
          <input type="text" ref="answer" />
          <button onClick={this.handleAnswer.bind(this, this.refs.answer.value)}>Submit</button>
        </div>
      );
    }
  }
});

ReactDOM.render(
  <QuizApp />,
  document.getElementById('react-container')
);
