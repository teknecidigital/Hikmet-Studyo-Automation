// src/agents/scriptwriterAgent.js
// Projenin Master Senarist Ajanı: İçerik stratejisini ve akışını belirler.

export class ScriptwriterAgent {
    constructor(name = "Master Senarist") {
      this.name = name;
    }
  
    decideNextContent() {
      const strategies = ["ATASOZU", "OYUN", "SHORTS"];
      const chosenStrategy = strategies[Math.floor(Math.random() * strategies.length)];
      
      console.log(`\n[${this.name}] Senaryo Analizi: Sıradaki otonom yayın akışı için '${chosenStrategy}' stratejisi seçildi.`);
      return chosenStrategy;
    }
  }