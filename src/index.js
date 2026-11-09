// src/index.js
// Tekneci Digital Projesi - Otonom Ana Çalıştırma Merkezi

import { renderProverbsScreen } from './screens/proverbsScreen.js';
import { renderShortsScreen } from './screens/shortsScreen.js';
import { runRandomGamePuzzle } from './components/gameComponent.js';

console.log("========================================");
console.log("  TEKNECİ DIGITAL - OTONOM SİSTEM BAŞLIYOR  ");
console.log("========================================");

// 1. Atasözleri ve Deyimler Modülünü Çalıştır
const proverbsResult = renderProverbsScreen();

console.log("----------------------------------------");

// 2. Oyunlar Modülünü Çalıştır
const gameResult = runRandomGamePuzzle();

console.log("----------------------------------------");

// 3. YouTube Shorts Modülünü Çalıştır
const shortsResult = renderShortsScreen();

console.log("========================================");
console.log("  TÜM MODÜLLER BAŞARIYLA ENTEGRE EDİLDİ  ");
console.log("========================================");