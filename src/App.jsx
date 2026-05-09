import { useState } from "react";
import Header from "./components/Header";
import GameStatus from "./components/GameStatus";
import FamilyChips from "./components/FamilyChips.jsx";
import "./styles/App.css";
import family from "./data/family.js";

export default function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  return (
    <main>
      <Header />
      <GameStatus />
      <FamilyChips family={family} />
    </main>
  );
}
