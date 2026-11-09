// src/agents/contentAgents.js
export class ProverbExpertAgent {
  generateContent() {
    const list = [
      { content: "Damlaya damlaya göl olur", detail: "Küçük birikimler büyük sonuçlar doğurur." },
      { content: "Sakla samanı, gelir zamanı", detail: "Her şeyin bir gün gerekli olabileceğini unutma." },
      { content: "Ayağını yorganına göre uzat", detail: "Harcamalarını gelirine göre ayarlamalısın." }
    ];
    const selected = list[Math.floor(Math.random() * list.length)];
    console.log("[Atasözü Uzman Ajanı]: Kültür veritabanından özgün bir eser seçildi...");
    return { type: "Atasözü & Deyim", ...selected };
  }
}

export class GameExpertAgent {
  generateContent() {
    const list = [
      { content: "Yapay zeka hangi dille yaygın geliştirilir? (P...)", detail: "Python" },
      { content: "Dünyanın en popüler web programlama dili nedir? (J...)", detail: "JavaScript" },
      { content: "Linux çekirdeğinin simgesi olan sevimli hayvan nedir?", detail: "Penguen (Tux)" }
    ];
    const selected = list[Math.floor(Math.random() * list.length)];
    console.log("[Oyun Uzman Ajanı]: Yeni bir bulmaca senaryosu simüle ediliyor...");
    return { type: "Oyun Bulmaca", ...selected };
  }
}

export class ShortsExpertAgent {
  generateContent() {
    const list = [
      { content: "1 Dakikada Otonom Yapay Zeka Kurulumu", detail: "Süre: 59sn | Trend: Yazılım" },
      { content: "Geleceğin Meslekleri Nelerdir?", detail: "Süre: 45sn | Trend: Kariyer" },
      { content: "Yazılımcıların Asla Yapmaması Gereken 3 Hata", detail: "Süre: 50sn | Trend: Kodlama" }
    ];
    const selected = list[Math.floor(Math.random() * list.length)];
    console.log("[Shorts Uzman Ajanı]: Viral olabilecek trend video kurgulanıyor...");
    return { type: "YouTube Shorts", ...selected };
  }
}