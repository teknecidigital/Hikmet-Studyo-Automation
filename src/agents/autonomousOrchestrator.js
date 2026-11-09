// src/agents/autonomousOrchestrator.js
import { ScriptwriterAgent } from './scriptwriterAgent.js';
import { ProverbExpertAgent, GameExpertAgent, ShortsExpertAgent } from './contentAgents.js';
import { publishShortsToYouTube } from '../services/youtubeService.js';
import { execSync } from 'child_process';

function autoCommitAndPush(category, title) {
  try {
    execSync('git add .', { stdio: 'ignore' });
    execSync(`git commit -m "Otonom Uretim: [${category}] ${title}"`, { stdio: 'ignore' });
    execSync('git push origin main', { stdio: 'ignore' });
    console.log(`[GitHub Otomasyon]: Yeni üretim GitHub'a aktarıldı! 🚀`);
  } catch (error) {
    console.log(`[GitHub Otomasyon]: Aktarım güncel.`);
  }
}

export function runContinuousAutonomousLoop() {
  const senarist = new ScriptwriterAgent("Hollywood Senaristi");
  const proverbAgent = new ProverbExpertAgent();
  const gameAgent = new GameExpertAgent();
  const shortsAgent = new ShortsExpertAgent();

  console.log("==================================================");
  console.log("  TEKNECİ DIGITAL - 7/24 YOUTUBE & OTONOM SİSTEM  ");
  console.log("==================================================");

  let cycle = 1;

  setInterval(async () => {
    console.log(`\n--- DÖNGÜ #${cycle++} BAŞLATILIYOR ---`);
    const strategy = senarist.decideNextContent();

    let producedContent = null;

    if (strategy === "ATASOZU") {
      producedContent = proverbAgent.generateContent();
    } else if (strategy === "OYUN") {
      producedContent = gameAgent.generateContent();
    } else {
      producedContent = shortsAgent.generateContent();
      await publishShortsToYouTube(producedContent);
    }

    console.log(`[Otonom Rapor] Kategori: ${producedContent.type} | İçerik: ${producedContent.content}`);
    autoCommitAndPush(producedContent.type, producedContent.content);
    console.log("--------------------------------------------------");
  }, 5000);
}