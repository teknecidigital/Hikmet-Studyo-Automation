// src/agents/autonomousOrchestrator.js
import { ScriptwriterAgent } from './scriptwriterAgent.js';
import { ProverbExpertAgent, GameExpertAgent, ShortsExpertAgent } from './contentAgents.js';
import { InspectorAgent } from './inspectorAgent.js';
import { publishShortsToYouTube } from '../services/youtubeService.js';
import { execSync } from 'child_process';

function autoCommitAndPush(category, title) {
  try {
    execSync('git add .', { stdio: 'ignore' });
    execSync(`git commit -m "Otonom Uretim ve Denetim: [${category}] ${title}"`, { stdio: 'ignore' });
    execSync('git push origin main', { stdio: 'ignore' });
    console.log(`[GitHub Otomasyon]: Onaylanan üretim GitHub bulut deposuna aktarıldı! 🚀`);
  } catch (error) {
    console.log(`[GitHub Otomasyon]: Git aktarımı güncel.`);
  }
}

export function runContinuousAutonomousLoop() {
  const senarist = new ScriptwriterAgent("Hollywood Senaristi");
  const proverbAgent = new ProverbExpertAgent();
  const gameAgent = new GameExpertAgent();
  const shortsAgent = new ShortsExpertAgent();
  const inspector = new InspectorAgent("Baş Denetçi");

  console.log("==================================================");
  console.log("  TEKNECİ DIGITAL - DENETÇİ & YOUTUBE OTONOM SİSTEM ");
  console.log("==================================================");

  let cycle = 1;

  setInterval(async () => {
    console.log(`\n================ DÖNGÜ #${cycle++} BAŞLATILIYOR ================`);
    const strategy = senarist.decideNextContent();

    let producedContent = null;

    // 1. Aşama: Uzman Ajan Üretimi
    if (strategy === "ATASOZU" || strategy === "KUPON_BILGI") {
      producedContent = proverbAgent.generateContent();
    } else if (strategy === "OYUN") {
      producedContent = gameAgent.generateContent();
    } else {
      producedContent = shortsAgent.generateContent();
    }

    console.log(`[Üretim Raporu] Kategori: ${producedContent.type} | İçerik: ${producedContent.content}`);

    // 2. Aşama: Denetçi Ajan Kontrolü (Kalite Güvence)
    const inspectionResult = inspector.inspectContent(producedContent);

    if (!inspectionResult.approved) {
      console.log(`[Akış Durumu]: İçerik denetimden geçemediği için bu döngü pas geçiliyor.`);
      console.log("--------------------------------------------------");
      return;
    }

    // 3. Aşama: Onay Alındıysa Dağıtım ve Yayın (YouTube & GitHub)
    if (producedContent.type === "YouTube Shorts") {
      await publishShortsToYouTube(producedContent);
    }

    // GitHub bulut yedeklemesi
    autoCommitAndPush(producedContent.type, producedContent.content);
    
    console.log("--------------------------------------------------");
  }, 5000);
}