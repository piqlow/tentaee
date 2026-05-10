import "../styles/Word.css";

export default function Word(props) {
  const letterElements = props.currentWord.split("").map((letter, i) => {
    const shouldRevealLetter = props.guessedLetters.includes(letter);
    return (
      <span key={i}>{shouldRevealLetter ? letter.toUpperCase() : ""}</span>
    );
  });
  return <section className="word">{letterElements}</section>;
}
