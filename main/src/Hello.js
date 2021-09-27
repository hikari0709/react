export const Hello = ({
  name,
  handleChangeName,
  initialName
}) => {
  return (
    <div>
      <p>Hello, {name}</p>
      <p>nameの初期値：{initialName}</p>
      <input type='text' onChange={handleChangeName} />
    </div>
  );
};
