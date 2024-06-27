function Win(winner) {
  return (
    <div>
      <img src={winner === "X" ? "cross.svg" : "circle.svg"}></img>
    </div>
  );
}

export default Win;
