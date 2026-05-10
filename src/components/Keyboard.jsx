import { useEffect } from "react";
import "../styles/Keyboard.css";
import clsx from "clsx";

export default function Keyboard(props) {
  const topRow = "qwertyuiop";
  const middleRow = "asdfghjkl";
  const bottomRow = "zxcvbnm";

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key >= "a" && e.key <= "z") {
        props.addGuessedLetter(e.key);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
  }, []);

  function createButtons(letters) {
    return letters.split("").map((letter) => {
      const isGuessed = props.guessedLetters.includes(letter);
      const isCorrect =
        isGuessed && props.currentWord.split("").includes(letter);
      const isWrong =
        isGuessed && !props.currentWord.split("").includes(letter);

      return (
        <button
          key={letter}
          className={`key ${clsx({
            correct: isCorrect,
            wrong: isWrong,
          })}`}
          onClick={() => props.addGuessedLetter(letter)}
        >
          {letter.toUpperCase()}
        </button>
      );
    });
  }

  return (
    <section className="keyboard">
      <div className="row">{createButtons(topRow)}</div>
      <div className="row">{createButtons(middleRow)}</div>
      <div className="row">{createButtons(bottomRow)}</div>
    </section>
  );
}
