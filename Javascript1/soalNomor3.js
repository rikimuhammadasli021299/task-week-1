const printSegitiga = 9;

if (typeof printSegitiga === 'number') {
  for (let i = 0; i < printSegitiga; i++) {
    let cetak = '';
    for (let j = 1; j <= printSegitiga - i; j++) {
      cetak += j;
    }
    console.log(cetak);
  }
} else {
  console.log('Data harus number');
}
