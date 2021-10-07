//import React, { useEffect, useState, useCallback, useMemo } from 'react';
//import React, { useState, useMemo } from 'react';
import React, { useState, useRef, useEffect } from 'react';
//import { Counter } from './Counter';
// import { CounterMemo } from './CounterMemo';
// import { Hello } from './Hello';

//const initialCount = 0;
//const initialName = 'JavaScript';

const SampleUseRef = () => {
  const inputRef = useRef(null);

  const [text, setText] = useState('');

  useEffect(() => {
    console.log('レンダリング');
  });

  const handleClick = () => {
    setText(inputRef.current.value);
  };

  const inputReset = () => {
    setText('');
    inputRef.current.value = '';
  };

  return (
    <div>
      <input ref={inputRef} type='text' id='target' />
      <button onClick={handleClick}>set text</button>
      <button onClick={inputReset}>reset</button>
      <p>text: { text }</p>
    </div>
  );
};

// const square = (params) => {
//   const data = [...Array(100).keys()];

//   data.forEach(() => {
//     console.log(
//       `B+1のボタンがクリック、square関数実行中、
//       ループ処理を${data.length}回実行中…`
//     );
//   });

//   return params * params;
// }

export default function App() {
  // const [count, setCount] = useState(initialCount);
  // const [name, setName] = useState(initialName);

  // 副作用関数の宣言
  // const callbackFunction = () => {
  //   document.title = `${count}回クリックされました`;

  //   return () => {
  //     console.log('hoge');
  //   }
  // }

  //useEffect(callbackFunction, [count]);

  // const countIncrement = () => setCount((prevCount) => prevCount + 1);
  // const countDecrement = () => setCount((prevCount) => prevCount - 1);
  // const countReset = () => setCount(initialCount);

  // const handleChangeName = (e) => {
  //   setName(e.target.value);
  // }


  //React.memo検証のための記述
  // const [countA, setCountA] = useState(initialCount);
  // const [countB, setCountB] = useState(initialCount);

  //const countIncrementA = useCallback(() => setCountA((prevCountA) => prevCountA + 1), [countA]);
  //const countIncrementB = useCallback(() => setCountB((prevCountB) => prevCountB + 1), [countB]);

  // const countResultA = () => {
  //   setCountA((prevCountA) => prevCountA + 1);
  //   console.log('Aボタンがクリックされました');
  // }

  // const countResultB = () => {
  //   setCountB((prevCountB) => prevCountB + 1);
  //   console.log('Bボタンがクリックされました');
  // }

  //const squareArea = useMemo(() => square(countB), [countB]);
  //const squareArea = square(countB);

  return (
    <>
      <SampleUseRef />
      {/*
      <Counter
        text='Aボタン'
        count={countA}
        countIncrement={countResultA}
      />
      <Counter
        text='Bボタン'
        count={countB}
        countIncrement={countResultB}
      />
      <p>計算結果：{ squareArea }</p>

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
