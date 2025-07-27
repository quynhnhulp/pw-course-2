// Bài 1
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Tổng từ 1 đến 100 là:", sum);

// Bài 2
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Bai 3
const soLe = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        soLe.push(i);
    }
}
console.log(soLe);

// Bài 4
console.log(`In ra 10 email dựa trên tên người dùng và số thứ tự:`)
const email = [];
for (let i = 1; i <= 10; i++) {
    email.push(`user${i}@example.com`);
}

console.log(email);

// Baài 5
const doanhThu = [
    { month: 1, total: 160 },
    { month: 2, total: 150 },
    { month: 3, total: 200 },
    { month: 4, total: 180 },
    { month: 5, total: 170 },
    { month: 6, total: 160 },
    { month: 7, total: 190 },
    { month: 8, total: 210 },
    { month: 9, total: 230 },
    { month: 10, total: 150 },
    { month: 11, total: 170 },
    { month: 12, total: 240 }
];

let tongDoanhThu = 0;

for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu += doanhThu[i].total;
}

console.log("Tổng doanh thu cả năm là:", tongDoanhThu);