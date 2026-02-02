import { useRef, useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  const [search, setSearch] = useState("");
  const lastChange = useRef();

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(search.toLowerCase()),
  );

  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearch(event.target.value);
    }, 500);
  }
  return (
    <div className="searchable-list">
      <input type="search" placeholder="Seaarch" onChange={handleChange} />
      <ul>
        {searchResults.map((item, index) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
