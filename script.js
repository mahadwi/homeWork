class Form {
  constructor() {
    this.name = ""
    this.age = ""
    this.uangSangu = ""
  }

  setValues(name, age, uangSangu) {
    this.name = name
    this.age = age
    this.uangSangu = uangSangu
  }

  calculateAge(tanggalLahir) {
    const today = new Date();
    const birthDate = new Date(tanggalLahir);
  
    let umur = today.getFullYear() - birthDate.getFullYear();
    const bulanSekarang = today.getMonth();
    const bulanLahir = birthDate.getMonth();
  
    if (bulanSekarang < bulanLahir || (bulanSekarang === bulanLahir && today.getDate() < birthDate.getDate())) {
      umur--;
    }
  
    return umur;
  }

}

const hitungUmur = (tangglaLahir) => {
  const umur = new Form();
  const age = umur.calculateAge(tangglaLahir);
  document.getElementById("umur").innerHTML = `${age} Tahun`;
}

const resetForm = () => {
  document.getElementById("formRegistrasi").reset();
}

const hitungRataRata = (arr) => {
  if (arr.length === 0) {
    return 0; // Mengembalikan 0 jika array kosong
  }

  const total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const rataRata = total / arr.length;

  return rataRata;
}

let data = [];

const submitForm = () => {
  return new Promise((resolve, reject) => {

    const name = document.getElementById("nama").value;
    const age = document.getElementById("tanggalLahir").value;
    const uangSangu = document.getElementById("uangSangu").value;
  
    const formObject = new Form();
    const umur = formObject.calculateAge(age);
  
    if(name.length < 10){
      alert('Nama minimal 10 karakter')
      return false;
    }
  
    if(umur < 25) {
      alert('Umur Minimal 25 Tahun');
      return false;
    }
  
    if(uangSangu < 100000) {
      alert("Uang sangu kurang dari Rp.100.000");
      return false;
    }else if (uangSangu > 1000000){
      alert("Uang sangu maksimal Rp.1.000.000");
      return false;
    }
  
    formObject.setValues(name, umur, uangSangu);
    setTimeout(() => {
      const isDataValid = data.push(formObject);
      if(isDataValid){
        resolve("Data Berhasil Disimpan");
      }else {
        reject("Data gagal Simpan");
      }
    }, 1000);

    
  })
}

const onSubmitForm = async () => {
  try {
    const response = await submitForm();
    alert(response);
    tampilkanData();
    resetForm();
  } catch (error) {
    console.error(error);
  }
}

const tampilkanData = () => {
  const table = document.getElementById("dataTable");
  table.innerHTML = "";

  let totalUmur = 0;
  let totalUangSangu = 0;

  for (let i = 0; i < data.length; i++) {
    let row = table.insertRow(i);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    const umur = parseInt(data[i].age, 10);
    const uangSangu = parseInt(data[i].uangSangu, 10);

    cell1.innerHTML = data[i].name;
    cell2.innerHTML = umur;
    cell3.innerHTML = uangSangu;

    totalUmur += umur;
    totalUangSangu += uangSangu;
  }

  const rataRataUmur = data.length > 0 ? totalUmur / data.length : 0;
  const rataRataUangSangu = data.length > 0 ? totalUangSangu / data.length : 0;

  document.getElementById("rataRata").textContent = `Rata rata pendaftar memiliki uang sangu sebesar ${rataRataUangSangu} dengan rata rata umur ${rataRataUmur}`;
}



