import { useState } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import GameStatus from "./components/GameStatus";
import FamilyChips from "./components/FamilyChips.jsx";
import Word from "./components/Word.jsx";
import Keyboard from "./components/Keyboard.jsx";

import { getRandomWord } from "./utils/utils.js";
import family from "./data/family.js";

export default function App() {
  // const [currentWord, setCurrentWord] = useState("react");
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  function addGuessedLetter(letter) {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter],
    );
  }

  console.log(guessedLetters);

  return (
    <main>
      <Header />

      {/* <GameStatus /> */}

      <FamilyChips family={family} />

      <Word currentWord={currentWord} guessedLetters={guessedLetters} />

      <Keyboard
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </main>
  );
}
