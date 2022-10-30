import React, { useEffect, useState } from 'react';
import { lettersData } from '../utils/data';

const Keypad = ({ usedKeys, handleClick }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(lettersData);
  }, [setLetters]);

  return (
    <div className="keypad">
      {letters
        ? letters.map((letter, index) => {
            const color = usedKeys[letter.key];
            return (
              <div key={index} className={`pad ${color}`} onClick={handleClick}>
                {letter.key}
              </div>
            );
          })
        : null}
      <div className="keypad-action">
        <div className="pad backspace" onClick={handleClick}>
          Backspace
        </div>
        <div className="pad enter" onClick={handleClick}>
          Enter
        </div>
      </div>
    </div>
  );
};

export default Keypad;
