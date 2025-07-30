const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// Lọc các giá trị trong scores > 80.
let newNumbers = scores.filter(num => num > 80);
console.log(newNumbers);

// Lọc các giá trị trong ages ≥ 18.
let newValues = ages.filter(num => num >= 18);
console.log(newValues);

// Lọc các từ trong words có độ dài > 5
let newWords = words.filter(num => num.length > 5);
console.log(newWords);