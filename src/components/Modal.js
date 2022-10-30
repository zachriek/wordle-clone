import React from 'react';

const Modal = ({ isCorrect, turn, solution }) => {
  return (
    <div className="modal">
      {isCorrect ? (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution is {turn} guesses :)</p>
          <a href="/" className="btn">
            Play Again
          </a>
        </div>
      ) : null}
      {!isCorrect ? (
        <div>
          <h1>Nevermind!</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
          <a href="/" className="btn">
            Play Again
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
