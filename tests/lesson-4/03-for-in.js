const student = { "name": "Alex", "age": 10, "salary": 20 };
// 3.1 In tên và giá trị mỗi thuộc tính của student

for (let property in student) {
    console.log(property);
    console.log(student[property]); //in ra giá trị của object
}

// 3.2 Tính tổng các giá trị số trong student
// em ko biết dùng hàm nào nhận dạng đó là giá trị số

// 3.3 Tạo mảng chứa tên các thuộc tính của student 
const newArr = [];

for (const key in student) {
    newArr.push(key);
}

console.log("Mảng chứa tên thuộc tính của student: ", newArr);