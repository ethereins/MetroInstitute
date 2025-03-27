console.log("Ini adalah Submission Back-end Meeting 1.");
console.log("")

console.log("Soal 1: Variabel dan Tipe Data");
//String 
let perintah = "\"Cepat cuci piring-piring itu!\"";
let pertanyaan = "'Kenapa, sih, aku terus yang disuruh?'";
console.log(perintah);
console.log(pertanyaan);

//Number
let ukuransepatu = 42;
let tinggibadan = 176;
let beratbadan = 60;
console.log("\nAnak itu biasanya membeli sepatu dengan ukuran " + ukuransepatu + ". Ia kira-kira memiliki tinggi badan " + tinggibadan + " cm dan berat badan " + beratbadan + " kg.");

//boolean
let marah = true;
let senang = false;
console.log("\nSiapa orang yang suka tugasnya diplagiasi? Tidak ada!" , marah);
console.log("Seseorang senang jika orang asing menumpahkan minuman ke bajunya." , senang);

console.log("\nSoal 2: Percabangan If-else if-else.");
let IPK = 1.99;
console.log("IPK Anda adalah: " + IPK + ".")
    if (IPK >= 3.50 && IPK <= 4.00) {
        console.log('Anda dapat mengambil SKS maksimal hingga 24 sks.');
    } else if (IPK >= 3.00 && IPK < 3.50) {
        console.log('Anda dapat mengambil SKS maksimal hingga 21 sks.');
    } else if (IPK >= 2.50 && IPK < 3.00) {
        console.log('Anda dapat mengambil SKS maksimal hingga 18 sks.');
    } else if (IPK >= 2.00 && IPK < 2.50) {
        console.log('Anda dapat mengambil SKS maksimal hingga 15 sks.');
    } else if (IPK >= 0 && IPK < 2.00) {
        console.log('Anda dapat mengambil SKS maksimal hingga 12 sks dan Anda wajib konsultasi dengan dosen pembimbing akademik.');
    } else {
        console.log("Masukkan sesuai format yang diminta! (Range 0.00-4.00)")
    }

console.log("\nSoal 3: Perulangan For.");
console.log("Bilangan genap di antara angka 2 dan 20 adalah:");
for (let i = 2; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

console.log("\nSoal 4: Function.");
console.log("Kita akan menghitung volume balok.")
function hitungVolumeTabung(V){
    const pi = 3.14;
    return  pi * r * r * t;
} 
let r = 7;
let t = 14;
console.log(`Jika Anda memiliki jari-jari tabung ` , r , ` cm dan tinggi tabung ` , t , ` cm, maka total volume balok Anda adalah ${hitungVolumeTabung(r, t)} cm kubik.`);

console.log("\nSoal 5: Array.");
console.log("Kita memiliki beberapa bilangan kuadrat prima. \nBilangan kuadrat prima adalah bilangan kuadrat (hasil pangkat 2) dari suatu bilangan prima.");
let bilangankuadrat = [4, 9, 25, 49, 121, 169, 289, 361, 529, 841, 961, 1369, 1681, 1849, 2209, 2809, 3481];
console.log('Arraynya yakni :' , bilangankuadrat, 'dengan jumlah elemen pada array adalah sebanyak' , bilangankuadrat.length , 'bilangan.');