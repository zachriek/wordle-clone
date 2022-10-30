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
              <div key={index} className={color} onClick={handleClick}>
                {letter.key}
              </div>
            );
          })
        : null}
      <div className="enter" onClick={handleClick}>
        Enter
      </div>
    </div>
  );
};

export default Keypad;
