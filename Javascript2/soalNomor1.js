// 1. Method filter() = untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu
// Contoh penggunaan
const array = [3, 2, 1, 6, 5, 4, 7, 10, 9, 8];
console.log(`method filter(): ${array.filter((e) => e > 3)}`);

// 2. Method includes() = melakukan pencarian (peka huruf besar/kecil) apakah berisi atau mengandung karakter yang ditentukan
// Contoh penggunaan
const students = ['Budi', 'Susi', 'Tono'];
console.log(`method includes(): ${students.includes('Susi')}`);

// 3. Method slice() = melakukan pemotongan atau mengekstrak bagian tertentu mulai dari indeks awal hingga akhir sesuai dengan yang ditentukan
// Contoh penggunaan
console.log(`method slice(): ${students.slice(0, 2)}`);

// 4. Method push() = menambah satu atau lebih elemen ke akhir sebuah array.
// Contoh penggunaan
students.push('Agus');
console.log(`method push(): ${students}`);

// 5. Method pop() = menghapus elemen terakhir dari suatu array dan mengembalikan elemen yang dihapus
// Contoh penggunaan
students.pop();
console.log(`method pop(): ${students}`);

// 6. Method toLowerCase() = mengubah string menjadi huruf kecil semua
// Contoh penggunaan
const str = 'HelLO WorLD';
console.log(`method toLocaleLowerCase(): ${str.toLowerCase()}`);

// 7. Method toString() = untuk merubah nilai type data menjadi type data string
// Contoh penggunaan
const number = 12345;
console.log(`method toString(): ${typeof number.toString()}`);

// 8. Method trim() = menghapus spasi (white space) di awal dan akhir string termasuk spasi, tab, dan sebagainya.
// Contoh penggunaan
const word = '          Javascript           ';
console.log(`method trim(): ${word.trim()}`);

// 9. Method replace() = mengganti karakter tertentu di dalam string sesuai dengan karakter yang ditentukan.
// Contoh penggunaan
const word1 = 'I learn Javascript';
console.log(`method replace(): ${word1.replace('Javascript', 'ReactJS')}`);

// 10. Method repeat() = mengembalikan string sumber yang diulang sesuai dengan jumlah pengulangan yang ditentukan.
// Contoh penggunaan
const word2 = 'Javascript';
console.log(`method repeat(): ${word2.repeat(3)}`);
