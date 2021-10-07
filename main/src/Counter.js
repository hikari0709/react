import React from 'react';

export const Counter = React.memo(({
  text,
  count,
  countIncrement,
  countDecrement,
  countReset,
  initialCount
}) => {
  return (
    <>
      <p>現在のカウント数：{count}</p>
      <button onClick={countIncrement}>increment</button>
      {/* <button onClick={countDecrement}>decrement</button>
      <button onClick={countReset}>reset</button> */}
    </>
  );
});
