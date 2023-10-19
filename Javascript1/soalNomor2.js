const hitungGrade = (nilai) => {
  let grade = '';
  if (nilai <= 100 && nilai >= 90) {
    return (grade = 'A');
  } else if (nilai < 90 && nilai >= 80) {
    return (grade = 'B');
  } else if (nilai < 80 && nilai >= 70) {
    return (grade = 'C');
  } else if (nilai < 70 && nilai >= 60) {
    return (grade = 'D');
  } else {
    return (grade = 'E');
  }
};

const hitungNilaiUN = (mtk, bahasaIndonesia, bahasaInggris, ipa, nilaiGrade) => {
  if (mtk && bahasaIndonesia && bahasaInggris && ipa && typeof mtk === 'number' && typeof bahasaIndonesia === 'number' && typeof bahasaInggris === 'number' && typeof ipa === 'number') {
    const rataRataNilai = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    if (rataRataNilai > 100 || rataRataNilai < 0) {
      console.log(`Skala nilai 0-100, total nilai yang diinputkan adalah ${rataRataNilai}`);
    } else {
      const grade = nilaiGrade(rataRataNilai);
      console.log(`Rata-Rata = ${rataRataNilai}\nGrade = ${grade}`);
    }
  } else {
    console.log('nilai tidak boleh ada yang kosong dan nilai harus bertipe number!');
  }
};

const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

hitungNilaiUN(mtk, bahasaIndonesia, bahasaInggris, ipa, hitungGrade);
