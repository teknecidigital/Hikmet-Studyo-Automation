// src/agents/scriptwriterAgent.js
// Tekrara düşmeyen, dinamik hafızalı Master Senarist Ajanı

export class ScriptwriterAgent {
  constructor(name = "Hollywood Senaristi") {
    this.name = name;
    this.lastStrategy = null; // Son seçilen stratejiyi hafızada tutar
  }

  decideNextContent() {
    // Genişletilmiş ve çeşitlendirilmiş strateji havuzu
    const strategies = ["ATASOZU", "OYUN", "SHORTS", "TEKNOLOJI_HABERI", "KUPON_BILGI"];
    
    // Aynı stratejinin üst üste iki kez seçilmesini engellemek için filtreleme
    const availableStrategies = strategies.filter(s => s !== this.lastStrategy);
    
    // Havuzdan rastgele akıllı seçim yap
    const chosenStrategy = availableStrategies[Math.floor(Math.random() * availableStrategies.length)];
    
    // Hafızayı güncelle
    this.lastStrategy = chosenStrategy;

    console.log(`\n[${this.name}] Akıllı Senaryo Analizi: Tekrar engellendi. Sıradaki otonom akış için '${chosenStrategy}' stratejisi seçildi.`);
    return chosenStrategy;
  }
}