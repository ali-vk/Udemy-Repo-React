import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [playeName, setPlayerName] = useState(initialName);

  function handleEdit() {
    setIsEdit((editing) => !editing);

    if (isEdit) {
      onChangeName(symbol, playeName);
    }
  }

  function handleChange(event) {
    // console.log(event.target);
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEdit ? (
          <input
            type="text"
            onChange={handleChange}
            value={playeName}
            placeholder="Enter Name"
          ></input>
        ) : (
          <span className="player-name">{playeName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {!isEdit ? (
        <button onClick={handleEdit}>Edit</button>
      ) : (
        <button onClick={handleEdit}>Save</button>
      )}
    </li>
  );
}
