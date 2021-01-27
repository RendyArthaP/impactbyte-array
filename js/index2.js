// Soal 2
let namaKelompok = ['Bambang', 'Joko', 'Abdul', 'Jali', 'Hakim']
let leaderKelompok = namaKelompok[0];

let kelompok1 = namaKelompok.splice(1,2);
let kelompok2 = namaKelompok.splice(1);

document.write(`Ketua kelompok ini adalah ${leaderKelompok} <br/>`)
document.write(`Kelompok pertama terdiri dari ${kelompok1} <br/>`)
document.write(`Kelompok kedua terdiri dari ${kelompok2}`)

console.log(leaderKelompok)
console.log(kelompok1)
console.log(kelompok2)