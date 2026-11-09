// src/services/proverbsService.js
const proverbsAndIdiomsData = [
    { id: 1, type: "atasozu", title: "Damlaya damlaya göl olur", meaning: "Küçük birikimler zamanla büyük miktarlara ulaşır." },
    { id: 2, type: "atasozu", title: "Ağaç yaşken eğilir", meaning: "İnsanlar küçük yaşlarda kolay eğitilir." },
    { id: 3, type: "deyim", title: "Etekleri zil çalmak", meaning: "Çok sevinmek, neşelenmek." },
    { id: 4, type: "deyim", title: "Çam devirmek", meaning: "Farkında olmadan pot kırmak." }
  ];
  
  export function getRandomProverbOrIdiom() {
    const randomIndex = Math.floor(Math.random() * proverbsAndIdiomsData.length);
    return proverbsAndIdiomsData[randomIndex];
  }
  
  export function getAllProverbsAndIdioms() {
    return proverbsAndIdiomsData;
  }