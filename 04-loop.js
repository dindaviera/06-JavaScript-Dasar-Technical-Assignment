/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
for(var i = 0; i < 100; i++){
    if(isPrime(i)) console.log(i);
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
//let primeCounter = 0;
//let fiftiethPrime;

/// EDIT HERE
let primeCounter=0;

let isPrime;
let fiftiethPrime = 2;
let n =2;

/// EDIT HERE
while (primeCounter < 50) {
    isPrime=true;
    for(let i =2 ; i < n;i++){
        if (n % i == 0){
            isPrime = false
        }
    }
    if (isPrime){
        fiftiethPrime = n ;
        primeCounter++
    }
    n++
}
console.log(fiftiethPrime)


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
do (oddCounter = 0, fiftiethOdd = true 
    {
    
} while (....)
do {
  console.log(i);
  i++;
} while (i <= 10);
