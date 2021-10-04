import React, { memo } from 'react';

export const CounterMemo = ({
  text,
  count
}) => {
  console.log(`${text}がクリックされました`);
  return (
    <>
      <p>現在のカウント数：{count}</p>
    </>
  );
};
