import React, { useEffect, useState } from 'react';
import Wordle from './components/Wordle';
import { solutions } from './utils/data';

const App = () => {
  const [solution, setSolution] = useState('');

  useEffect(() => {
    const randomSolution = solutions[Math.floor(Math.random() * solutions.length)];
    setSolution(randomSolution.word);
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle (Lingo)</h1>
      {solution ? <Wordle solution={solution} /> : null}
    </div>
  );
};

export default App;
