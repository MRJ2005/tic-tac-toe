import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setiIsEditing] = useState(false);

    function handleEditClick() {
        setiIsEditing(isEditing => !isEditing);
    }
    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    //let playerName = isEditing ? <input type="text" required value={name}></input> : <span className="player-name">{name}</span>;
    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing)
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>;

    return (
        <li className={isActive? 'active': undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li >
    )
}