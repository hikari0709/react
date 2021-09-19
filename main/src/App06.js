const Hello = () => {
  const isReact = true;

  // 即時関数えお利用することでJSX内にif文を書くことができる
  return (
    <p>
      {(() => {
        if (isReact) {
          return 'Hello! React!';
        } else {
          return 'Hello!';
        }
      })()}
    </p>
  );

  // {}で囲むとJSX内に式を記述できる
  // return <p>{ isReact ? 'Hello! React!' : 'Hello!' }</p>;

  // 論理積演算子 && 条件がtrueの時だけ値を返す
  //return <p>{isReact && 'Hello! React!'}</p>;

  // 論理和演算子 || 条件がfalseの時だけ値を返す
  //return <p>{isReact || 'Hello! React!'}</p>;
};

export default function App() {
  return <Hello />
};
