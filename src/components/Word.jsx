import "../styles/Word.css";

export default function Word(props) {
  const letterElements = props.currentWord
    .split("")
    .map((letter, i) => <span key={i}>{i}</span>);
  return <section className="word">{letterElements}</section>;
}
