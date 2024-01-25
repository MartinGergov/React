/* eslint-disable react/prop-types */
function Color({ color }) {
  return <li>{color.name}</li>;
}

export function Colors({ colorList }) {
  return (
    <div>
      <h2>Colors List</h2>
      <ul>
        {colorList.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    </div>
  );
}
