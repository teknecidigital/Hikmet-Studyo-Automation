// src/agents/contentAgents.js
// Her bir bölümün kendi alanında uzmanlaşmış otonom ajanları

export class ProverbExpertAgent {
    generateContent() {
      console.log("[Atasözü Uzman Ajanı]: Kültür veritabanı taranıyor ve yeni bir deyim/atasözü üretiliyor...");
      return {
        type: "Atasözü & Deyim",
        content: "Ayağını yorganına göre uzat",
        detail: "Harcamalarını gelirine göre ayarlamalısın."
      };
    }
  }
  
  export class GameExpertAgent {
    generateContent() {
      console.log("[Oyun Uzman Ajanı]: Yeni bir bulmaca senaryosu simüle ediliyor...");
      return {
        type: "Oyun Bulmaca",
        content: "Yapay zeka hangi programlama diliyle sıklıkla geliştirilir? (P...)",
        detail: "Python"
      };
    }
  }
  
  export class ShortsExpertAgent {
    generateContent() {
      console.log("[Shorts Uzman Ajanı]: Viral olabilecek trend video başlığı kurgulanıyor...");
      return {
        type: "YouTube Shorts",
        content: "1 Dakikada Otonom Sistem Kurulumu",
        detail: "Süre: 59sn | Hedef Kitle: Yazılımcılar"
      };
    }
  }