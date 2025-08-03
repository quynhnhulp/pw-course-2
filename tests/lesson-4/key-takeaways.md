# Javascript
## Phạm vi của biến
1. Phạm vi của biến, var (Global) và let (Scope: {}) 
2. Hoisting:
- `Var`: có thể truy cập được vào biến trước khi được khai báo: Giá trị undefined
```javascript
for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

 console.log(i); // 5

 // Hoisting
// // var
// console.log(a); // undefined
// var a = 5;
```

- `Let`: KHÔNG thể truy cập trước khi khai báo ==> `NÊN DÙNG  -> const or let`
```javascript

for (let i = 0; i < 5; i++) {
    //console.log(i);
}

 console.log(i); // i is not defined


 // // let
// console.log(b);
// let b = 5;
```

## Advance condition: if...else, if...else if, switch...case
1. **if ... else**

/*
if (condition) {
    run code when condition = true
} else {
    run code when condition = false
}
*/

2. **if ... else if ... if**

/*
if (condition1) {
    run code when condition = true
} else if (condition2) {
    run code when condition2 = true
} else {
    run code when all conditions = false
}
*/
```javascript
let diem = 9;

if (diem >= 8) {
    console.log("Hoc sinh gioi");
} else if (diem >= 5) {
    console.log("Hoc sinh kha");
} else {
    console.log("Hoc sinh yeu");
}
```
2. **switch ... case**

/*
switch (bieu_thuc) {
    case value_1:
        // run code
        break;
    case value_2:
        // run code
        break;
    case value_3:
        // run code
        break;
    default:
        // run code default
}

```javascript
let ngay = 27;

switch (ngay) {
    case 26:
        console.log("Thu 6");
        break;
    case 27:
        console.log("Thu 7");
        break;
    case 28:
        console.log("CN");
        break;
    default: 
        console.log("Ngay khong hop le");
}
```
## == and !=
- So sánh kiểu “lỏng lẻo”
- Convert giá trị về kiểu “lớn hơn”

``` javascript
const result = "5" == 5; // kiem tra: value
const result1 = "5" === 5; // kiem tra: value + data type

console.log(result); // true
console.log(result1); // false

const result2 = "5" != 5 // false
```

## ===, !==: 
- so sánh tuyệt đối

## Advance loops
1. **for ... in**
- Đối với object
```javascript
let product = {
    Banana: 20,
    Apple: 30,
    Orange: 15
}

for(let property in product) {
    console.log(property);
    console.log(product[property]); //in ra giá trị của object
}
```

- Đối với array
```javascript
const arr = ["a", "b", "c"];

for (let i in arr) {
    console.log(i);
    console.log(arr[i]);
}
```

2. **forEach**

// forEach -> dung cho array: logic lấy tất cả value & index
/*
array.forEach((value, index) => {
    
})
*/
```javasript
// const arr = ["a", "b", "c"];
// arr.forEach((value, index) => {
//     console.log(`${index}: ${value}`);
// })
```

3. **for ... of**
- dùng cho array
```javascript
const arr = ["a", "b", "c"];
for (let value of arr) {
    console.log(value);
}
```

4. **continue**

/*
- bo qua vong lap, chay vong lap tiep theo
- neu gap continue thi bo qua doan code chay phia duoi, va chay tiep vong lap tiep theo
*/

```javascript
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i); //1, 3, 5
}
```
5. **break**

/*
gap break -> thoat ra khoi vong lap luon */

```javascript
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        break;
    }

    console.log(i); //1
}
```

## String utils functions
1. **trim**
```javascript
let str = "   K16 Playwright    ";
// console.log(str);
str = str.trim();
console.log(str);
```

2. **toLowerCase() và toUpperCase()**
- console.log(str.toLowerCase());
- console.log(str.toUpperCase());

3. **includes()**
- includes() -> boolean

console.log(str.includes("K16")); //true
console.log(str.includes("k16")); // false

4. **replace()**

// str = str.replace("Playwright", "Cypress"); //K16 Cypress
// console.log(str);

5. **split()**

console.log(str.split(" ")); // [ 'K16', 'Playwright' ]

6. **split()**
```javascript
const emails = "emailA@gmail.com, emailB@gmail.com";
console.log(emails.split(",")); // ["emailA@gmail.com", " emailB@gmail.com"]
console.log(emails.split(".")); 

["emailA@gmail", "com", "emailB@gmail", "com"]
["emailA@gmail", "com, emailB@gmail", "com"]
```

7. substring()
```javascript
let str = "Hello World!";
console.log(str.substring(0, 5)); //Hello
console.log(str.substring(6)); //World!
```

8. indexOf()
```javascript
let str = "Hello World!";
console.log(str.indexOf("World!")); // 6
console.log(str.indexOf("K16!")); // -1
```

## Array utils functions
1. **map**
```javascript
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

console.log(newNumbers);
```
2. **filter**
```javascript
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.filter(num => num % 2 === 0);
console.log(newNumbers); //[2, 4]
```

3. **find** 
```javascript
let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); //2
```

5. **reduce()**
```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); //16

/*
- total: bien nhan gia tri duy nhat
- num: phan tu trong mang
- 0: gia tri khoi tao dau tien cho total
*/
```

6. **some()**
```javascript
let numbers = [1, 3, 3, 3, 5];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);
```
7. **every**
```javascript
let numbers = [2, 2, 2, 4, 6];
let hasEven = numbers.every(num => num % 2 === 0);
console.log(hasEven); //true
```
8. **push**
```javascript
let numbers = [2, 2, 2, 4, 6];
numbers.push(7, 8);
console.log(numbers); //[2, 2, 2, 4, 6, 7, 8]
``` 

9. **shift**
```javascript
let numbers = [2, 2, 2, 4, 6];
let firstNumber = numbers.shift();
console.log(firstNumber); //2
console.log(numbers); // [2, 2, 4, 6] 
```
10. **Sort**

// sort: Unicode (ASCII hoac UTF-16)
/*
Mac dinh: a la so dung truoc, b la dung sau
Tang dan dung: sort((a, b) => a - b)
- a - b = negative => a < b -> a dung truoc b
- a - b = positive => a > b -> b dung truoc a

Giam dan dung: sort((a, b) => b - a)
- b - a = negative => b < a -> a dung truoc b
- b - a = positive => b > a -> b dung truoc a
*/

let numbers = [1, 2, 3, 4, 5];
numbers.sort();
console.log(numbers); // [1, 2, 3, 4, 5]

numbers.sort((a, b) => b - a);
console.log(numbers); // [5, 4, 3, 2, 1]

# Kiến thức bổ sung để làm bài
1. **pop()**

Xóa và trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc
```javascript
let arr = [1, 2, 3];
let last = arr.pop(); // arr = [1, 2], last = 3
console.log(arr); // [1, 2]
console.log(last); // 3
```

2. **unshift()**

Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc.
```javascript
let arr = [1, 2, 3];
arr.unshift(0); // arr = [0, 1, 2, 3]
console.log(arr); // [0, 1, 2, 3]]
```

3. **trim()**

Loại bỏ khoảng trắng ở đầu và cuối chuỗi, không thay đổi chuỗi gốc mà trả về chuỗi
mới..
- const str = " Hello World ";
- Để xoá khoảng trắng ở đầu sử dụng trimStart()
- Để xoá khoảng trắng ở cuối sử dụng trimEnd()

4. **for of**

- Bản chất một chuỗi cũng là một mảng. Ví dụ chuỗi "Playwright" bản chất là một mảng gồm các kí tự ["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"]
Để lặp trong mảng này, bạn sử dụng string.length để lấy độ dài của chuỗi và lấy ra từng phần tử một theo index

- Ví dụ:
```javascript
const str = "K9 2024";
for (let i = 0; i < str.length; i++){
console.log(str[i]);
}
```

// Kết quả in ra
K
9
2
0
2
4

======================

1. Chuyển đổi hệ thập phân sang hệ thập lục phân
Trong JavaScript, bạn có thể sử dụng phương thức toString(16) để chuyển đổi một số thập phân sang hệ thập lục phân. Ví dụ:
```javascript
let decimalNumber = 120;
let hexadecimalNumber = decimalNumber.toString(16);
console.log(hexadecimalNumber); // Output: 78
```
2. Hàm toLowerCase và toUpperCase trong JavaScript
toLowerCase(): Chuyển đổi chuỗi thành chữ thường.
toUpperCase(): Chuyển đổi chuỗi thành chữ hoa.
Ví dụ:
```javascript
let text = "K16 Challenge";
let lowercaseText = text.toLowerCase();
let uppercaseText = text.toUpperCase();
console.log(lowercaseText); // Output: k16 challenge
console.log(uppercaseText); // Output: K16 CHALLENGE
```