import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, updatedName);
    }
  }

  function handleChange(event) {
    setUpdatedName(event.target.value);
    //console.log(updatedName);
  }

  let btnCaption = "Edit";
  let playerName = <span className="player-name">{updatedName}</span>;
  if (isEditing) {
    playerName = (
      <input type="text" required value={updatedName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      {/* <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input />}
        <span className="player-symbol">{symbol}</span>
      </span> */}
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {/* {btnCaption} */}
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
