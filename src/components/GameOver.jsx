import clsx from "clsx";
import "../styles/GameOver.css";

export default function GameStatus(props) {
  const className = clsx({});
  return (
    <section className={clsx("game-over", { won: true })}>
      <h2>{props.isGameWon ? "Você salvou à todos!" : "Oque você fez???"}</h2>
      <p>
        {props.isGameWon
          ? "Parabémns, graças ao seu conhecimento, a família dos sigmas estão à salvo."
          : "ASSASINO!!! Você matou a fámilia de todos os sigmas..."}
      </p>
    </section>
  );
}
