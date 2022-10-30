import React, { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution);
  const [showModal, setShowModal] = useState(false);
  const [showKeypad, setShowKeypad] = useState(true);

  const windowResize = () => {
    if (window.innerWidth > 768) {
      setShowKeypad(true);
    } else if (window.innerWidth <= 768) {
      setShowKeypad(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', windowResize);
    windowResize();

    return () => window.removeEventListener('resize', windowResize);
  }, []);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    if (turn > 5) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      {showKeypad ? <Keypad usedKeys={usedKeys} /> : <Modal disabled />}
      {showModal ? <Modal isCorrect={isCorrect} turn={turn} solution={solution} /> : null}
    </>
  );
};

export default Wordle;
