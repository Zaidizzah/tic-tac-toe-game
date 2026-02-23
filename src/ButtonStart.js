function ButtonStart({ isFinished, startHandler }) {
  return (
    <button
      type="button"
      className="btn-start-game"
      aria-pressed="false"
      onClick={startHandler}
    >
      start game{isFinished ? " again" : ""}
    </button>
  );
}

export default ButtonStart;
