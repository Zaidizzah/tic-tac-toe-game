function Button({ clickHandler, buttonIndex, label, isFinished }) {
  return (
    <div
      role="button"
      className={`button ${isFinished ? "disabled" : ""}`}
      id={buttonIndex}
      onClick={(e) => clickHandler(e, buttonIndex)}
      aria-disabled={isFinished}
    >
      {label}
    </div>
  );
}

export default Button;
