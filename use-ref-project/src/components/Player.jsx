import { useRef, useState } from "react";

export default function Player() {
  const [name, setName] = useState(null);
  // const [saved, setSaved] = useState(false);
  const playerName = useRef();
  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input 
          ref={playerName}
          type="text"
          // value={name}
          // onChange={(event) => {
          //   setSaved(false);
          //   setName(event.target.value);
          // }}
        />
        <button
          onClick={() => {
            setName(playerName.current.value);
            playerName.current.value = '';
          }}
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
