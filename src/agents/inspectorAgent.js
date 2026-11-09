// src/agents/inspectorAgent.js
// İçerikleri denetleyen, onaylayan veya düzeltme için geri gönderen Kalite Kontrol Ajanı

export class InspectorAgent {
    constructor(name = "Baş Denetçi") {
      this.name = name;
    }
  
    inspectContent(contentObj) {
      console.log(`\n[${this.name}]: "${contentObj.type}" kategorisindeki yeni üretim denetleniyor...`);
  
      // Basit kalite kontrol kriterleri (Örn: İçerik boş mu, detay var mı?)
      if (!contentObj.content || !contentObj.detail) {
        console.log(`[${this.name}]: ❌ REDDEDİLDİ! İçerik eksik veya hatalı, düzeltilmesi için geriye gönderiliyor.`);
        return { approved: false, feedback: "Eksik veri, tekrar üretilmeli." };
      }
  
      // Başarılı denetim onayı
      console.log(`[${this.name}]: ✅ ONAYLANDI! İçerik kalite standartlarına uygun, sonraki aşamaya geçebilir.`);
      return { approved: true, feedback: "Standartlara uygun." };
    }
  }