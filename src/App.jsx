import { useState } from "react";
import clsx from "clsx";
import Confetti from "react-confetti";
import "./styles/App.css";

import Header from "./components/Header";
import GameOver from "./components/GameOver.jsx";
import FamilyChips from "./components/FamilyChips.jsx";
import Word from "./components/Word.jsx";
import Keyboard from "./components/Keyboard.jsx";

import { getRandomWord } from "./utils/utils.js";
import family from "./data/family.js";
import NewGameBtn from "./components/NewGameBtn.jsx";

export default function App() {
  // const [currentWord, setCurrentWord] = useState("react");
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState(["-"]);

  const wrongGuessCount = guessedLetters
    .filter((letter) => letter !== "-")
    .filter((letter) => !currentWord.includes(letter)).length;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= family.length;
  const isGameOver = isGameWon || isGameLost;

  // dev
  console.clear();
  console.log(
    `\n--= Game Viewer =--\nGuess: ${guessedLetters.length}\nWrong Guess: ${wrongGuessCount}\nisGameWon: ${isGameWon}\nisGameLost: ${isGameLost}\nisGameOver: ${isGameOver}`,
  );

  function addGuessedLetter(letter) {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter],
    );
  }

  function newGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters(["-"]);
  }

  console.log(guessedLetters);

  const opacityClass = clsx({ "opacity-50": isGameOver });

  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <main>
      {isGameWon && (
        <Confetti width={width} height={height} numberOfPieces={40} />
      )}

      <Header isGameOver={isGameOver} />

      {isGameOver && (
        <GameOver
          isGameWon={isGameWon}
          isGameLost={isGameLost}
          newGame={newGame}
        />
      )}

      <FamilyChips
        family={family}
        isGameOver={isGameOver}
        wrongGuessCount={wrongGuessCount}
      />

      <Word
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameOver={isGameOver}
      />

      <Keyboard
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        addGuessedLetter={addGuessedLetter}
        isGameOver={isGameOver}
      />

      {isGameOver ? <NewGameBtn newGame={newGame} /> : null}
    </main>
  );
}
