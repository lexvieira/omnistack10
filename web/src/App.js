import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [counter, setCounter] = useState(0);
  //useState returns a vector, disrupt in params

  function incrementCounter() {
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
