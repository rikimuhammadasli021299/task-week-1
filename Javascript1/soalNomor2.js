const hitungNilaiUN = (mtk, bahasaIndonesia, bahasaInggris, ipa, nilaiGrade) => {
  if (mtk && bahasaIndonesia && bahasaInggris && ipa && typeof mtk === 'number' && typeof bahasaIndonesia === 'number' && typeof bahasaInggris === 'number' && typeof ipa === 'number') {
    const rataRataNilai = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    nilaiGrade(rataRataNilai);
  } else {
    console.log('nilai tidak boleh ada yang kosong dan nilai harus bertipe number!');
  }
};

const hitungGarde = (nilai) => {
  if (nilai > 100 || nilai < 0) {
    console.log(`Skala nilai 0-100, total nilai yang diinputkan adalah ${nilai}`);
  } else {
    if (nilai <= 100 && nilai >= 90) {
      const grade = 'A';
      console.log(`Rata-Rata = ${nilai}\nGrade = ${grade}`);
    } else if (nilai < 90 && nilai >= 80) {
      const grade = 'B';
      console.log(`Rata-Rata = ${nilai}\nGrade = ${grade}`);
    } else if (nilai < 80 && nilai >= 70) {
      const grade = 'C';
      console.log(`Rata-Rata = ${nilai}\nGrade = ${grade}`);
    } else if (nilai < 70 && nilai >= 60) {
      const grade = 'D';
      console.log(`Rata-Rata = ${nilai}\nGrade = ${grade}`);
    } else if (nilai < 60 && nilai >= 0) {
      const grade = 'E';
      console.log(`Rata-Rata = ${nilai}\nGrade = ${grade}`);
    }
  }
};

const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

hitungNilaiUN(mtk, bahasaIndonesia, bahasaInggris, ipa, hitungGarde);
