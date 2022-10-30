import React, { useEffect, useState } from 'react';
import { lettersData } from '../utils/data';

const Keypad = ({ usedKeys }) => {
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
              <div key={index} className={color}>
                {letter.key}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Keypad;
