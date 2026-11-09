// src/screens/shortsScreen.js
// YouTube Shorts Modülü için Otonom Akış Ekranı

const shortVideosData = [
    { id: 101, title: "1 Dakikada JavaScript İpuçları", duration: "58sn", views: "12K" },
    { id: 102, title: "En Popüler Atasözleri Hikayeleri", duration: "45sn", views: "25K" },
    { id: 103, title: "Günün Bilgi Bulmacası", duration: "30sn", views: "8K" }
  ];
  
  export function renderShortsScreen() {
    console.log("--- YouTube Shorts Akışı Yükleniyor ---");
    
    // Rastgele bir Shorts videosu seçelim
    const randomIndex = Math.floor(Math.random() * shortVideosData.length);
    const activeShort = shortVideosData[randomIndex];
  
    console.log(`Aktif Video: "${activeShort.title}" (${activeShort.duration}) - İzlenme: ${activeShort.views}`);
  
    return {
      screenName: "YouTubeShorts",
      currentVideo: activeShort,
      totalShortsCount: shortVideosData.length
    };
  }