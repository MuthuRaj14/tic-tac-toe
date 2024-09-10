

export default function Gameboard({ onSelect, board }) {



    return <ol id="game-board">
        {board.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((player, colIndex) => <li key={colIndex}><button onClick={() => onSelect(rowIndex, colIndex)} disabled={player !== null}>{player}</button></li>)}
            </ol>
        </li>)}
    </ol>


}