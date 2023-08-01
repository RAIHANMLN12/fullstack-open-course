import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;

  if (totalFeedback === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Average: {(good - bad) / totalFeedback}</p>
      <p>Positive Percentage: {(good / totalFeedback) * 100} %</p>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  return (
    <>
      <div>
        <h1>Give Feedback!</h1>
        <Button handleClick={handleGoodClick} text="Good" />
        <Button handleClick={handleNeutralClick} text="Neutral" />
        <Button handleClick={handleBadClick} text="Bad" />
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
}

export default App;
