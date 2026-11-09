// src/components/gameComponent.js
// Oyunlar Modülü için Otonom Oyun Altyapısı

const wordPuzzleData = [
    { question: "Türkiye'nin başkenti neresidir?", answer: "Ankara" },
    { question: "Yazılım dünyasında en popüler dillerden biri (J...)", answer: "JavaScript" },
    { question: "En büyük okyanus hangisidir?", answer: "Pasifik" }
  ];
  
  export function runRandomGamePuzzle() {
    console.log("--- Oyun Modülü Başlatılıyor ---");
    const randomIndex = Math.floor(Math.random() * wordPuzzleData.length);
    const selectedPuzzle = wordPuzzleData[randomIndex];
  
    console.log(`Bulmaca Sorusu: ${selectedPuzzle.question}`);
    
    return {
      gameType: "WordPuzzle",
      question: selectedPuzzle.question,
      correctAnswer: selectedPuzzle.answer 
    };
  }