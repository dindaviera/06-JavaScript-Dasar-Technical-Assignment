/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
-Ada 2 variabel scope pada javascript yaitu Local Scope dan Global Scope
-Global Scope dalah lingkup ketika sebuah variabel bisa diakses dari mana saja, baik di dalam maupun di luar dari suatu fungsi atau blok (grup) kode. Global scope dideklarasikan diluar block. Sedangkan Local Scope adalah ketika sebuah variabel hanya bisa diakses di dalam sebuah fungsi atau blok kode. Semua variabel yang dideklarasikan di dalam sebuah fungsi/blok hanya bisa di diakses dalam fungsi/blok tersebut saja.
- implementasi : 
const provinsi = 'jawa tengah';

function namaKota() {
  let ibukotaProvinsi = 'jakarta';
  const kodeTelepon = 021;
  console.log(provinsi); // Output: jawa tengah
  if (provinsi === 'jawa tengah') {
     ibukotaProvinsi = 'semarang';
     const kodeTelepon = 024;
     console.log(provinsi); // Output: jawa tengah
  }
  return provinsi;
}

console.log(namaKota()); // Output: semarang
console.log(provinsi); // Output: jawa tengah 

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
- yang akan tampil didalam console adalah "Mariah"
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
- hasil yang ditampilkan bukan nilai dari variable name karena variable berada diluar function atau berada dilingkup global sehingga console dari fungsi pada local scope bisa berubah tidak menampilkan nilai dari variable name  

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
