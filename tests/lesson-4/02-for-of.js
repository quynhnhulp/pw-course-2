const str = "Playwright";
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 2.1 In lần lượt từng ký tự của str
console.log("In lần lượt từng ký tự của Playwright:");
for (let value of str) {
    console.log(value);
}

// 2.2 Tạo mảng đảo ngược từ str
console.log("Tạo mảng đảo ngược của Playwright:");
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}

// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
let firstPosition = -1;
let lastPosition = -1;
let currentPosition = 0;

for (const element of arr) {
    if (element === 3) {
        if (firstPosition === -1) {
            firstPosition = currentPosition;
        }
        lastPosition = currentPosition;
    }
    currentPosition++;
}
""
console.log("arr = [1, 2, 3, 4, 3, 55, 23]");
console.log("Vị trí đầu tiên của giá trị 3:", firstPosition);
console.log("Vị trí cuối cùng của giá trị 3:", lastPosition);

// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr
console.log("dupArr = [1, 2, 3, 1, 2, 4, 5]");

const uniqueData = [];

for (const num of dupArr) {
    if (num != 1) {
        uniqueData.push(num);
    }
}

console.log(uniqueData);

// em chưa hiểu rõ cách làm để chỉ lấy phần tử xuất hiện 1 lần