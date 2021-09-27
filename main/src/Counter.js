export const Counter = ({
  count,
  countIncrement,
  countDecrement,
  countReset,
  initialCount
}) => {
  return (
    <>
      <p>現在のカウント数：{count}</p>
      <p>カウントの初期値：{initialCount}</p>
      <button onClick={countIncrement}>increment</button>
      <button onClick={countDecrement}>decrement</button>
      <button onClick={countReset}>reset</button>
    </>
  );
};
