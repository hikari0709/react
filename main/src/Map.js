// const Map = () => {
//   const sample = [1, 2, 3, 4, 5, 6];

//   const sumpleResult = sample.map((value) => {
//     return value * value;
//   })

//   return (
//     <p>{ sumpleResult }</p>
//   );
// };

// export default function App() {
//   return <Map />
// };
const numbers = [1, 2, 3, 4, 5];

const ListItems = () => {
  const items = numbers.map((item) => <li key={item.toString()}>{item}</li>)
  return <ul>{items}</ul>
};

export default function App() {
  return <ListItems />
};
