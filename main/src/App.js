import React, { useEffect, useState, useCallback } from 'react';
import { Counter } from './Counter';
import { CounterMemo } from './CounterMemo';
import { Hello } from './Hello';

const initialCount = 0;
const initialName = 'JavaScript';

export default function App() {
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState(initialName);

  // 副作用関数の宣言
  const callbackFunction = () => {
    document.title = `${count}回クリックされました`;

    // return () => {
    //   console.log('hoge');
    // }
  }

  useEffect(callbackFunction, [count]);

  // const countIncrement = () => setCount((prevCount) => prevCount + 1);
  // const countDecrement = () => setCount((prevCount) => prevCount - 1);
  // const countReset = () => setCount(initialCount);

  const handleChangeName = (e) => {
    setName(e.target.value);
  }


  //React.memo検証のための記述
  const [countA, setCountA] = useState(initialCount);
  const [countB, setCountB] = useState(initialCount);

  const countIncrementA = useCallback(() => setCountA((prevCountA) => prevCountA + 1), [countA]);
  const countIncrementB = useCallback(() => setCountB((prevCountB) => prevCountB + 1), [countB]);

  return (
    <>
      <Counter
        text='Aボタン'
        count={countA}
        countIncrement={countIncrementA}
      />
      <Counter
        text='Bボタン'
        count={countB}
        countIncrement={countIncrementB}
      />
      {/*
      <Hello
        name={name}
        handleChangeName={handleChangeName}
        initialName={initialName}
      /> */}
      {/* <CounterMemo
        text='Aボタン'
        count={countA}
      />
      <button onClick={countIncrementA}>increment</button>
      <CounterMemo
        text='Bボタン'
        count={countB}
      />
      <button onClick={countIncrementB}>increment</button> */}
    </>
  );
};
