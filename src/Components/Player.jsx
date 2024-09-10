import { useState } from "react";


export default function Player({player,symbol,isActive}){
    const[isEditing,setIsEditing]=useState(false)
    const[playerName,setPlayerName]=useState(player)
    function handleName(event){
        setPlayerName(event.target.value);
    }
    function buttonHandle(){
        setIsEditing((editing)=> !editing);

    }
    let component=null;
    let buttonValue=null;
    if(isEditing===false){
        component=(<span className="player-name">{playerName}</span>);
        buttonValue="Edit"
    }
    else{
        component=(<span className=""><input required value={playerName} onChange={handleName}/></span>)
        buttonValue="Save"

    }
    return(
        <li className={isActive ? "active":undefined}>
            <span className="player">
                {component}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={buttonHandle} >{buttonValue}</button>
        </li>

    );
}

