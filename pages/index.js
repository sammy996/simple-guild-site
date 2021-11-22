import { useState } from 'react';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Counter/>
    </div>
  )
}

function Counter() {
  const [contador, setCounter] = useState(1);

  function addCounter() {
    setCounter(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={addCounter}>Adiconar</button>
    </div>
  )
}

export default Home()