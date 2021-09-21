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

const values = [
  { id: 1, item: 'item01' },
  { id: 2, item: 'item02' },
  { id: 3, item: 'item03' }
];

const SelectItems = values.map((value) => {
  return (
    <option value={value.item} key={value.id}>
      {value.item}
    </option>
  );
});

const InputSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState(values[0]['item']);

  const handleChangeSelectBox = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <p>{selectedValue}</p>
      <select value={selectedValue} onChange={handleChangeSelectBox}>
        {SelectItems}
      </select>
    </div>
  );
};

export default function App() {
  return (
    <>
      <InputText />
      <InputSelectBox />
    </>
  );
};
