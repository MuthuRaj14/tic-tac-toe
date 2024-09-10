export default function GameOver({winner,onRestart}){
    return(
        <div id="game-over">
            <h2>Game Over 1</h2>
            {winner&&<p>{winner} WON !</p>}
            {!winner&&<p>It is a DRAW!</p>}

            <p><button onClick={onRestart}>Rematch ?</button></p>
        </div>
    )
}