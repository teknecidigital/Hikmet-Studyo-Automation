// src/agents/autonomousOrchestrator.js
import { ScriptwriterAgent } from './scriptwriterAgent.js';
import { ProverbExpertAgent, GameExpertAgent, ShortsExpertAgent } from './contentAgents.js';
import { execSync } from 'child_process';

function autoCommitAndPush(category, title) {
  try {
    execSync('git add .', { stdio: 'ignore' });
    execSync(`git commit -m "Otonom Üretim: [${category}] ${title}"`, { stdio: 'ignore' });
    execSync('git push origin main', { stdio: 'ignore' });
    console.log(`[GitHub Otomasyon]: Yeni üretim başarıyla buluta (GitHub) aktarıldı! 🚀`);
  } catch (error) {
    console.log(`[GitHub Otomasyon]: Aktarım sırasında beklenen durum (değişiklik yok veya bağlantı bekleniyor).`);
  }
}

export function runContinuousAutonomousLoop() {
  const senarist = new ScriptwriterAgent("Hollywood Senaristi");
  const proverbAgent = new ProverbExpertAgent();
  const gameAgent = new GameExpertAgent();
  const shortsAgent = new ShortsExpertAgent();

  console.log("==================================================");
  console.log("  TEKNECİ DIGITAL - 7/24 KESİNTİSİZ OTONOM SİSTEM  ");
  console.log("==================================================");

  let cycle = 1;

  // Her 5 saniyede bir (5000 milisaniye) çalışan sonsuz döngü
  setInterval(() => {
    console.log(`\n--- DÖNGÜ #${cycle++} BAŞLATILIYOR ---`);
    const strategy = senarist.decideNextContent();

    let producedContent = null;

    if (strategy === "ATASOZU") {
      producedContent = proverbAgent.generateContent();
    } else if (strategy === "OYUN") {
      producedContent = gameAgent.generateContent();
    } else {
      producedContent = shortsAgent.generateContent();
    }

    console.log(`[Otonom Rapor] Kategori: ${producedContent.type} | İçerik: ${producedContent.content}`);
    
    // GitHub'a otomatik aktarımı tetikle
    autoCommitAndPush(producedContent.type, producedContent.content);
    
    console.log("--------------------------------------------------");
    console.log("Sıradaki otonom döngü için 5 saniye bekleniyor...\n");
  }, 5000);
}