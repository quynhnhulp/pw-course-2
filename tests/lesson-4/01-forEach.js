const numbers = [1, 2, 3];

//1.1 In lần lượt từng phần tử của numbers.
console.log("Những phần tử của nubmers:");
numbers.forEach((value) => {
    console.log(value);
})

//1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
let sum = 0;
let max = numbers[0];
let min = numbers[0];

numbers.forEach((num) => {
    sum += num;
    if (num > max) max = num;
    if (num < min) min = num;
});

console.log("Tổng:", sum);
console.log("Giá trị lớn nhất:", max);
console.log("Giá trị nhỏ nhất:", min);

// Tạo mảng mới từ numbers, mỗi phần tử nhân đôi 

const doubledNumbers = [];

numbers.forEach((num) => {
    doubledNumbers.push(num * 2);
});

console.log("Mảng mới với mỗi phần tử nhân đôi:", doubledNumbers);

