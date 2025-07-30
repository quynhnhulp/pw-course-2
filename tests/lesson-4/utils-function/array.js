// Thêm/xóa phần tử trong mảng (push, pop, shift, unshift) 
const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];

// 1. push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names. 
numbers.push(4);
names.push("David");
console.log(numbers);
console.log(names);

// 2. pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4]. 
const numbers2 = [1, 2, 3, 4];
let last = numbers2.pop();
console.log(numbers2);

// 3. unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names. 
numbers.unshift(0);
console.log(numbers);
names.unshift("David");
console.log(names);

// 4. shift: Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4].
const numbers4 = [1, 2, 3, 4];
let firstNumber = numbers4.shift();
console.log(numbers4);