import React from 'react';

const Modal = ({ isCorrect, turn, solution, disabled }) => {
  if (disabled) {
    return (
      <div className="modal">
        <div>
          <h1>Can't be opened!</h1>
          <p className="solution">Not Support</p>
          <p>Please open in desktop :D</p>
        </div>
      </div>
    );
  }

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
