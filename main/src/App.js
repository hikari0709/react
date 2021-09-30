import React, { useEffect, useState } from 'react';
import { Counter } from './Counter';
import { Hello } from './Hello';

const initialCount = 0;
const initialName = 'JavaScript';

export default function App() {
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState(initialName);

  // 副作用関数の宣言
  const callbackFunction = () => {
    document.title = `${count}回クリックされました`;

    return () => {
      console.log('hoge');
    }
  }

  useEffect(callbackFunction, [count]);

  const countIncrement = () => setCount((prevCount) => prevCount + 1);
  const countDecrement = () => setCount((prevCount) => prevCount - 1);
  const countReset = () => setCount(initialCount);

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  return (
    <>
      <Counter
        count={count}
        countIncrement={countIncrement}
        countDecrement={countDecrement}
        countReset={countReset}
        initialCount={initialCount}
      />
      <Hello
        name={name}
        handleChangeName={handleChangeName}
        initialName={initialName}
      />
    </>
  );
};
