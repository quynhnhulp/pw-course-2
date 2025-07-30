const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// Kiểm tra tất cả giá trị trong scores có > 70 không
let checkScore = scores.every(num => num > 70);
console.log(checkScore);

//  Kiểm tra tất cả giá trị trong ages có > 15 không.
let checkAge = ages.every(num => num > 15);
console.log(checkAge);

// Kiểm tra tất cả từ trong words có độ dài > 3 không
let checkWord = words.every(num => num.length > 3);
console.log(checkWord);