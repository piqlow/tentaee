import "../styles/Header.css";
import clsx from "clsx";

export default function Header(props) {
  return (
    <header className={clsx({ "opacity-50": props.isGameOver })}>
      <h1>Tentaae</h1>
      <p>
        Adivinhe a palavra para salvar a Família do Leandro. Caso erre 8 vezes,
        todos morrerão!
      </p>
    </header>
  );
}
