import React, { useContext } from 'react';
import { Context } from './Provider';


export const ThirdChild = () => {
  const [state, setState] = useContext(Context);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <>
      <p>ThirdChild：現在のステータス{state ? 'true':'false'}</p>
      <button onClick={handleClick}>state変更ボタン</button>
    </>
  );
};
