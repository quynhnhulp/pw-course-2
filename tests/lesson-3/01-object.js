// Bài 1
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
};

console.log(`Năm sản xuất của xe: ${car["year"]}`);

// Bài 2
let person = {
    name: "Như",
    address: {
        street: "1A Trần Hưng Đạo",
        city: "Hồ Chí Minh",
        country: "Việt Nam"
    }
};

console.log(`Tên đường là: ${person["address"]["street"]}`);

// Bài 3
let student = {
    name: "Như Phạm",
    grades: {
        math: 10,
        english: 8
    }
};

console.log("Điểm toán là", student["grades"]["math"]);

// Bài 4
let settings = {
    volumne: 90,
    brightness: 70
}
settings.volumne = 100;

console.log("Cài đặt mới", settings);

// Bài 5
let bike = {
}
bike.color = "red";

console.log("Color thêm vào màu: ", bike.color);
console.log(bike);

// Bài 6

let employee = {
    name: "Như",
    age: 27
}
delete employee.age;
console.log(employee);

// Bài 7
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};