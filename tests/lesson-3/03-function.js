// Bài 1
function multiply(a, b) {
    const mul = a * b;
    return mul;
};

const result1 = multiply(5, 6);
console.log(`cặp 1: ${result1}`);
const result2 = multiply(4, 7);
console.log(`cặp 1: ${result2}`);

// Bài 2
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
};

console.log("Giá trị nhỏ nhất là:", findMin(5, 1, 3));
console.log("Giá trị nhỏ nhất là:", findMin(3, 8, 0));

// Bài 3
let studentArr = [
    { name: "Như", score: 85 },
    { name: "Bình", score: 72 },
    { name: "Phong", score: 91 },
    { name: "An", score: 65 }
]

function getTopStudents(studentArr, threshold) {
    const topStudents = [];

    for (let i = 0; i < studentArr.length; i++) {
        if (studentArr[i].score >= threshold) {
            topStudents.push(studentArr[i].name);
        }
    }

    return topStudents;
}

const result = getTopStudents(studentArr, 80);
console.log("Học sinh đạt có điểm >= threshold:", result);

// Bài 4
function calculateInterest(principal, rate, years) {
    const interest = principal * rate * years / 100;
    const total = principal + interest;
    return total;
}

const getTotal = calculateInterest(20000000, 5, 2);
console.log("Tổng tiền nhận được từ gốc 200000 với lãi 5% trong 2 năm là: ", getTotal);