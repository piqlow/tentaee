import "../styles/NewGameBtn.css";

export default function NewGameBtn(props) {
  return (
    <button className="new-game" onClick={props.newGame}>
      Novo Jogo
    </button>
  );
}
