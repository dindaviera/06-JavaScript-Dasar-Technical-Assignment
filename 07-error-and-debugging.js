/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error 
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
- Type Error terjadi apabila ada kesalahan yang muncul ketika jenis penulisan(angka, string, dll) yang digunakan atau diakses tidak kompatibel
- Reference Error terjadi ketika menggunakan variable yang belum dideklarasikan
- Range Error terjadi apabila menggunakan angka diluar value yang sudah ditetapkan atau biasa disebut a number "out of range" has occurred 
- Syntac Eror terjadi apabila terjadi kesalahan pada syntax saat mengevaluasi kode yang dibuat 

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

-apabila menjalankan baris kode diatas maka yang terjadi adalah error / kode tidak dapat dijalankan
- error tersebut termasuk kedalam kategori reference error
-hal tersebut terjadi karena belum mendeklarasikan variabel 
