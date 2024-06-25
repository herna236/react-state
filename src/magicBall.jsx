import React, { useState } from 'react';

const randAnswers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

const getRandomAnswer = () => {
  const randomIndex = Math.floor(Math.random() * randAnswers.length);
  return randAnswers[randomIndex];
};

const MagicBall = () => {
  const [question, setQuestion] = useState("Think of a question");
  const [answer, setAnswer] = useState(null); // Use null initially

  const handleClick = () => {
    const randomAnswer = getRandomAnswer();
    setAnswer(randomAnswer);
    setQuestion(""); // Clear question after answering
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          width: '400px',
          height: '400px',
          backgroundColor: answer ? answer.color : 'black', // Set background color based on answer.color or default to black
          borderRadius: '50%',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        {answer ? answer.msg : question}
      </div>
      <button onClick={handleClick}>Shake the Ball</button>
    </div>
  );
};

export default MagicBall;

