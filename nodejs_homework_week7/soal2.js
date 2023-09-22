const fs = require('fs');

const logFileName = 'homework.log';

fs.readFile('homework.log', 'utf-8', (err, data) => {
  if (err) {
    console.error('Terjadi kesalahan saat membaca file.log:', err);
  }else {
    fs.writeFile('log.txt', data, (err) => {
      if (err) {
        console.error('Terjadi kesalahan saat menulis ke file log.txt:', err);
      } else {
        console.log(`Isi dari ${logFileName} berhasil ditambahkan ke dalam log.txt`);
      }
    })
  }
  
});