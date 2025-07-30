const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// Tìm giá trị đầu tiên trong scores > 80. 
let firstValue1 = scores.find(num => num > 80);
console.log(firstValue1);

// Tìm giá trị đầu tiên trong ages > 20. 
let firstValue2 = ages.find(num => num > 20);
console.log(firstValue2);

// Tìm từ đầu tiên trong words có độ dài > 5. 
let firstValue3 = words.find(num => num.length > 5);
console.log(firstValue3);