// alert("halo semua");
console.log('selamat pagi');

// variable

// let var const

let nama = "muhammad Nouval Habibie";
// let nama = "muhammad Nouval Habibie";
let umur = 22;

var nama2 = "muhammad Nouval Habibie";
var nama2 = "budi";

console.log(nama);
console.log(umur);


const nama3= "asep suparman";
// nama3 = "budi";
console.log(nama3);


//tipe data

// Primitif
//String
let komputer ="asus"

//Number
let luas = 123


//Boolean
let aktif = true;
let mati = false;

//Undifined
let unand;
console.log(unand);

//Null
let nomorhp = null;


// tipe data non primitif
// object

let mahasiswa = {
    nama: "Nouval",
    nim: "2211521020",
    umur: 21,
    email: "nouvalhabibie18@gmail.com",
    alamat:{
        jalan: "jalan kelapa gading raya no 4",
        kelurahan: "ulak karang selatan"
    }
}

console.log(mahasiswa);
console.log(mahasiswa['umur']);
console.log(`Umur Mahasiswa dengan nama ${mahasiswa['nama']} adalah ${mahasiswa['umur']}`);
console.log(mahasiswa.alamat.jalan)


// arrray

let buah = ['apel', 'mangga', 'jeruk']

let campuran = [1, 'rumah', 'kantor', 3.15, true]
console.log(campuran)
console.log(buah)
console.log(buah[0]);
console.log(buah.length);


let angka = [1, 2, 3]
console.log('angka', angka)
let angkabaru = [...angka, 4, 5]
console.log('spread operator',angkabaru)

// type correction
let a = 10
let b = "5"
console.log(a+b);
console.log(a-b);


let c = 5;
let d= 10

// aritmatika
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a % b);
console.log(a ** b);

//increment
let e = 3
let newe = ++e

console.log(newe)

//decrement
console.log(--d);


// operator perbandingabn

console.log ( "5" == 5);
console.log ( "5" === 5);
console.log ( "5" !== 5);
console.log ( "5" != 5);

console.log ( 5 <= 6);
console.log ( 5 >= 6);

//operator logika

console.log ("operator logika and = ", true && false);
console.log ("operator logika and = ", true && true);

console.log ("operator logika or = ", true || true);

console.log ("operator logika or = ", true || false);
console.log ("operator logika or = ", false || false);


// ternary operator

// let buah;
const ternary = 1 === '2' ? true : false;
console.log(ternary)


// struktur control
// PERCABANGAN
let ukuran=5;
if(ukuran > 10){
    console.log('ukuran ini kebesaran');

}else{
    console.log('ukuran ini kekecilan');

}

// PERULANGAN
// FOR
for (let i = 0 ; i<5 ; i++){
    console.log(' ini perulangan ke', i+1);
}

// WHILE 
// Function

function greeting (nama){
    return `halo selamat pagi ${nama}`
}

console.log(greeting('asep'))


const arrow= (nama) =>{
    return `halo selamat pagi ${nama}`
}


console.log(arrow('budi'))