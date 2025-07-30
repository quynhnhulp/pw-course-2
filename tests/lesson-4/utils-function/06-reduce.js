const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 6.1 Tính tổng các giá trị trong scores. 
let sum1 = scores.reduce((total, num) => total + num, 0);
console.log(sum1);

// 6.2 Tính tích các giá trị trong numbers. 
let sum2 = numbers.reduce((total, num) => total + num, 0);
console.log(sum2);

// 6.3 Tính tổng các giá trị trong expenses.
let sum3 = expenses.reduce((total, num) => total + num, 0);
console.log(sum3); 