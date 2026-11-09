// src/agents/autonomousOrchestrator.js
import { ScriptwriterAgent } from './scriptwriterAgent.js';
import { ProverbExpertAgent, GameExpertAgent, ShortsExpertAgent } from './contentAgents.js';

export function runAutonomousLoop() {
  const senarist = new ScriptwriterAgent("Hollywood Senaristi");
  const proverbAgent = new ProverbExpertAgent();
  const gameAgent = new GameExpertAgent();
  const shortsAgent = new ShortsExpertAgent();

  console.log("==================================================");
  console.log("  TEKNECİ DIGITAL - TAM OTONOM AJAN SİSTEMİ BAŞLADI ");
  console.log("==================================================");

  // Senarist sonraki adımı belirler
  const strategy = senarist.decideNextContent();

  let producedContent = null;

  // Stratejiye göre ilgili uzman ajan görevi devralır
  if (strategy === "ATASOZU") {
    producedContent = proverbAgent.generateContent();
  } else if (strategy === "OYUN") {
    producedContent = gameAgent.generateContent();
  } else {
    producedContent = shortsAgent.generateContent();
  }

  console.log("\n--- OTONOM ÜRETİM RAPORU ---");
  console.log(`Kategori : ${producedContent.type}`);
  console.log(`Üretim   : ${producedContent.content}`);
  console.log(`Detay    : ${producedContent.detail}`);
  console.log("==================================================");
  console.log("  SİSTEM YENİ DÖNGÜ İÇİN BEKLİYOR (ARKAYA YASLANIN) ");
  console.log("==================================================");
}