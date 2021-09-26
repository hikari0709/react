import React, { useState } from 'react';

const InputText = () => {
  const [inputTextValue, setInputTextValue] = useState('');
  const [text, setText] = useState('React');

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
      <input type='buttton' defaultValue='入力' onClick={ handleClick } />
    </div>
  );
};

const selevtValues = [
  { id: 1, item: 'item01' },
  { id: 2, item: 'item02' },
  { id: 3, item: 'item03' }
];

// map()関数を使ってoptionをvaluesで定義した数生成
const SelectItems = selevtValues.map((value) => {
  return (
    <option value={value.item} key={value.id}>
      {value.item}
    </option>
  );
});

const InputSelectBox = () => {
  // 初期値をvaluesで定義した1つ目のitemに設定する
  const [selectedValue, setSelectedValue] = useState(selevtValues[0]['item']);

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

// ラジオボタンにセットしたい項目を定義
const radioValues = [
  { id: 1, item: '白' },
  { id: 2, item: '黒' },
  { id: 3, item: 'グレー' },
];

// 親要素のInputRadioからchangeイベントとcheckedのステータスを受け取れるようにする
const RadioItems = ({ onChange, checked }) =>
  radioValues.map((value) => {
    return (
      <label key={value.id}>
        <input
          type='radio'
          value={value.item}
          onChange={onChange}
          checked={checked === value.item}
        />
        {value.item}
      </label>
    );
  });


  const InputRadio = () => {
    const [checkedValue, setCheckedValue] = useState(radioValues[0]['item']);
    const handleChangeRadio = (e) => setCheckedValue(e.target.value);

    return (
      <div>
        <p>現在選択されている値：{checkedValue}</p>
        <RadioItems onChange={handleChangeRadio} checked={checkedValue} />
      </div>
    );
  };

const checkboxValues = [
  { id: 1, item: 'りんご' },
  { id: 2, item: 'みかん' },
  { id: 3, item: 'なし' },
];

  const CheckboxItems = ({ onChange, checked }) =>
    checkboxValues.map((value) => {
      return (
        <label key={value.id}>
          <input
            type='checkbox'
            value={value.item}
            onChange={onChange}
            checked={checked.includes(value.item)}
          />
          { value.item }
        </label>
      );
    });

const InputCheckBox = () => {
  // 状態の初期値にオブジェクトを定義する
  const [checkedValues, setCheckedValues] = useState(
    // accとかcurってなんだろう？
    checkboxValues.reduce((acc, cur) => {
      acc[cur.item] = false
      return acc
    },
    {})
  );

  //チェックされたプロパティの状態が更新される
  //setCheckedValues({ ...checkedValues, [e.target.value]: e.target.checked });何が行われている？
  const handleChangeCheckBox = (e) => {
    setCheckedValues({ ...checkedValues, [e.target.value]: e.target.checked });
  };

  // Object.entries?
  const stateOfCheckedValues = Object.entries(checkedValues).reduce(
    (pre, [key, value]) => {
      value && pre.push(key);
      return pre;
    },
    []
  );


  return (
    <div>
      <p>
        選択されている値：{ stateOfCheckedValues.join(', ')}
      </p>
      <CheckboxItems onChange={handleChangeCheckBox} checked={ checkedValues } />
    </div>
  );
};


export default function App() {
  return (
    <>
      <InputText />
      <InputSelectBox />
      <InputRadio />
      <InputCheckBox />
    </>
  );
};
