cosnt[activePlayer, setActivePlayer] = useState('X');

function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
}
