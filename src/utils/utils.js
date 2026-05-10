import words from "../data/words.js";

export function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
