const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// 5.1 Kiểm tra scores có giá trị nào > 80 không. 
let hasValue1 = scores.some(num => num > 80);
console.log(hasValue1);

// 5.2 Kiểm tra ages có giá trị nào < 18 không. 
let hasValue2 = ages.some(num => num < 18);
console.log(hasValue2);

// 5.3 Kiểm tra words có từ nào dài > 5 không.
let hasValue3 = words.some(num => num.length > 5);
console.log(hasValue3);