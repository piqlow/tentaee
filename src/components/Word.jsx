import "../styles/Word.css";
import clsx from "clsx";

export default function Word(props) {
  const letterElements = props.currentWord.split("").map((letter, i) => {
    const shouldRevealLetter = props.guessedLetters.includes(letter);
    return (
      <span key={i}>{shouldRevealLetter ? letter.toUpperCase() : ""}</span>
    );
  });
  return (
    <section className={clsx("word", { "opacity-50": props.isGameOver })}>
      {letterElements}
    </section>
  );
}
