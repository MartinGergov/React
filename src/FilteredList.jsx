import { useMemo } from "react";

export function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <div>
      <h2>Filtered List:</h2>
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>
            Nombre: <strong>{item.name}</strong>, Edad:
            <strong>{item.age}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
