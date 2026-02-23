import { useEffect, useState } from "react";
import Button from "./Button";
import ButtonStart from "./ButtonStart";

function Main() {
  const [player, setPlayer] = useState("X");
  const [boards, setBoards] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  // Check the current state tic tac tue boards
  useEffect(() => {
    const playerWinner = checkWinner(boards);
    const drawBoardsPattern =
      boards.filter((val) => val !== null).length === boards.length;

    if (playerWinner) setWinner(playerWinner);
    if (drawBoardsPattern || playerWinner) setIsFinished(true);

    // Check if any possible way the game is DRAW
    if (playerWinner || drawBoardsPattern) {
      setTimeout(
        () =>
          playerWinner
            ? alert(`Player: '${playerWinner}' is the winner, congrate!`)
            : alert("The game is DRAW!"),
        100,
      );
    }
  }, [boards]);

  function checkWinner(boards) {
    const winPattern = [
      [0, 1, 2],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];

    for (let pattern of winPattern) {
      const [a, b, c] = pattern;

      // Chek if any possible way the game is finished and know who's win
      if (boards[a] && boards[a] === boards[b] && boards[a] === boards[c]) {
        return boards[a];
      }
    }

    return null;
  }

  const buttonClickHandler = (e, buttonIndex) => {
      // check if winner is found or if board has been initialized with player value
      if (boards[buttonIndex] || winner) return;

      // Set player and coordinate
      setPlayer(player === "X" ? "O" : "X");
      setBoards(
        boards.map((currValue, index) =>
          index === buttonIndex ? player : currValue,
        ),
      );
    },
    startHandler = () => {
      setBoards(boards.map(() => null));
      setPlayer("X");
      setIsFinished(false);
      setWinner(null);
    };

  return (
    <>
      <h1 className="winner-player">
        The winner is: {winner !== null ? `player ${winner}` : "-"}
      </h1>
      <div className="tic-tac-toe-game">
        {boards.map((value, index) => (
          <Button
            clickHandler={buttonClickHandler}
            key={index}
            buttonIndex={index}
            label={value}
            isFinished={isFinished}
          />
        ))}
      </div>
      <ButtonStart
        isFinished={isFinished}
        startHandler={startHandler}
      />
    </>
  );
}

export default Main;
