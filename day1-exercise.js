
//1. membuat variable length dan width
//2. membuat variable rumusnya
//3. memasukan variable rumus kedalam console.log

//NO 1
const length = 5;
const width = 3;
const x = (length * width)

console.log(x);

// NO.2
const y = 2*(length + width)

console.log(y);

// NO.3
const r = 5;
const xy = 2 * r

console.log(xy);

const C = 2 * Math.PI * r
console.log(C);

const r2= r**2;
const A = Math.PI * r2

console.log(A);

//NO.4
const angleA = 80;
const angleB = 65;
const AngleTotal = 180;
const anglesC = AngleTotal - (angleA + angleB);

console.log(anglesC);

//masukan variable now dengan value tanggal hari ini
//masukan variable date1 dengan value new Date dan tanggal 2022-01-20

// NO.5
const date1 = new Date ("2022-01-20");
const date2 = new Date ("2022-01-22");
const difference = (date2-date1);
const dday= difference / (24*60*60*1000); //1000 milisecond=1dtk , 60 detik = 1menit, 60 menit = 1 jam, 24 jam = 1 hari

console.log (dday);
//buat data 400 hari menjadi hitungan tahun, bulan, hari
//400 hari= 1 tahun lebih 35 hari(1 bulan lebih 5 hari)

// NO.6
const days = 400;

const year1 = parseInt(days / 365);
const month1 = parseInt((days % 365) / 30);
const day1 = parseInt((days % 365) % 30);

console.log(`${year1} year ${month1} month ${day1} day`);

const days2 = 366

const year2 = parseInt (days2 / 365);
const month2 = parseInt((days2 % 365) / 30);
const day2 = parseInt ((days2 % 365) % 30);

console.log(`${year2} year ${month2} month ${day2} day`);
