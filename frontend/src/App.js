import './App.css';
import { useState } from 'react';
import Button from './Button';

function App() {

  const [count, setCount] = useState(0)

  const incrementCount = (increment) => {
    console.log('increment called')
    setCount(count + increment)
    console.log(count)
  }

  return (
    <div className="App">
      <h1>Count = {count}</h1>
      <Button increment={1} onClickFunction={incrementCount} />
    </div>
  );
}

export default App;
