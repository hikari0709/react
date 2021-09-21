import React, { useState } from 'react';

const InputText = () => {
  const [inputTextValue, setInputTextValue] = useState('');
  const [text, setText] = useState('JavaScript');

  //入力状態を更新するイベントハンドラ
  const handleChange = (e) => setInputTextValue(e.target.value);

  //空の野地列に更新するイベントハンドラ
  const handleClick = () => {
    setText(inputTextValue);
    setInputTextValue('');
  }

  return (
    <div>
      <p>はじめまして　{text} !</p>
      <input type='text' value={inputTextValue} onChange={handleChange} />
      <input type='buttton' value='入力' onClick={ handleClick } />
    </div>
  );
};

export default function App() {
  return <InputText />
};
