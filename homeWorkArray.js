// Fungsi untuk mendapatkan nilai random dari 1 - 50
function getRandomValue() {
  return Math.floor(Math.random() * 50) + 1;
}

/* 
Fungsi untuk mencari nilai minimal dari sebuah array
menentukan variable min yang diisikan elemen pertama dari arrayyang akan digunakan untuk  membandingkan dengan elemen lainnya
kemudian menggunakan for untuk mengiterasi seluruh element array
Jika elemen saat ini lebih kecil dari min, maka kita memperbarui nilai min dengan elemen tersebut.
nilai min akan berisi nilai minimum dari seluruh array. 
*/
function getMinValue(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

function getMaxValue(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++){
    if(array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// Menghitung total dari sebuah array
function hitungTotal(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
      total += array[i];
  }
  return total;
}

// Menghitung rata-rata dari sebuah array
function hitungRataRata(array) {
  let total = hitungTotal(array);
  return total / array.length;
}

let nilaiRandom = [];
for (let i = 0; i < 100; i++) {
  nilaiRandom.push(getRandomValue());
}

console.log(`Nilai random dari 1 - 50 : ${nilaiRandom}`);

let nilaiGanjil = [];
let nilaiGenap = [];

// mencari nilai genap an ganjil menggunakan fungsi foreach
nilaiRandom.forEach(nilai => {
  if(nilai % 2 === 0) {
    nilaiGenap.push(nilai);
  }else {
    nilaiGanjil.push(nilai);
  }  
});

console.log("Nilai Ganjil:", nilaiGanjil);
console.log("Nilai Genap:", nilaiGenap);

const minGanjil = getMinValue(nilaiGanjil);
const maxGanjil = getMaxValue(nilaiGanjil);
const totalGanjil = hitungTotal(nilaiGanjil);
const rataGanjil = hitungRataRata(nilaiGanjil);

console.log(`Nilai minimal dari array ganjil : ${minGanjil}`);
console.log(`Nilai maksimal dari array ganjil : ${maxGanjil}`);
console.log(`Total nilai dari array ganjil : ${totalGanjil}`);
console.log(`Rata - rata nilai array ganjil : ${rataGanjil}`);

const minGenap = getMinValue(nilaiGenap);
const maxGenap = getMaxValue(nilaiGenap);
const totalGenap = hitungTotal(nilaiGenap);
const rataGenap = hitungRataRata(nilaiGenap);

console.log(`Nilai minimal dari array genap : ${minGenap}`);
console.log(`Nilai maksimal dari array genap : ${maxGenap}`);
console.log(`Total nilai dari array genap : ${totalGenap}`);
console.log(`Rata - rata nilai dari array genap : ${rataGenap}`);

minGanjil > minGenap ? console.log('Minimal nilai dari array ganjil lebih besar dari minimal nilai dari array genap') : console.log('Minimal nilai dari array ganjil lebih kecil dari minimal nilai dari array genap');

maxGanjil > maxGenap ? console.log('Maximal nilai dari array ganjil lebih besar dari maximal nilai dari array genap') : console.log('Maximal nilai dari array ganjil lebih kecil dari maximal nilai dari array genap');

totalGanjil === totalGenap ? console.log('Total nilai dari array ganjil sama dengan total nilai dari array genap') :  console.log('Total nilai dari array ganjil berbeda dengan total nilai dari array genap');

rataGanjil > rataGenap ? console.log('Nilai rata - rata dari array genjil lebih besar dari nilai rata - rata array genap') : console.log('Nilai rata - rata dari array genjil lebih kecil dari nilai rata - rata array genap');