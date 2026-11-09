// src/screens/proverbsScreen.js
import { getRandomProverbOrIdiom, getAllProverbsAndIdioms } from '../services/proverbsService.js';

export function renderProverbsScreen() {
  console.log("--- Atasözleri ve Deyimler Ekranı Yükleniyor ---");
  const featuredItem = getRandomProverbOrIdiom();
  console.log(`Günün Sözü (${featuredItem.type.toUpperCase()}): "${featuredItem.title}" - Anlamı: ${featuredItem.meaning}`);
  
  const allItems = getAllProverbsAndIdioms();
  console.log(`Toplam Kayıtlı Eser/Söz Sayısı: ${allItems.length}`);

  return {
    screenName: "ProverbsAndIdioms",
    featured: featuredItem,
    totalCount: allItems.length
  };
}