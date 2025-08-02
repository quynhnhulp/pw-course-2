// 1. Khởi động Tàu Vũ trụ K16
let departurePlanet = "Trái Đất";

let mission = "Khám phá Vũ trụ K16";

let crew = ["Như", "An", "Chi", "Dũng", "Hà"];

function launchShip(crew) {
    let crewList = crew.join(", ");
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}

let welcomeMessage = launchShip(crew);
console.log(`Thông điệp chào mừng: ${welcomeMessage}`);

// 2. Du hành đến hành tinh bí ẩn

function calculateDistance(speed, time) {
    return speed * time;
}

let distance = calculateDistance(1000, 24);

console.log(`Khoảng cách đến hành tinh bí ẩn là ${distance} km.`);

// 3. Hành tinh kỳ lạ

function convertTimeToHex(time) {
    return time.toString(16);
}


let decimalNumber = 120;
let hexadecimalNumber = convertTimeToHex(decimalNumber);


console.log(`Thời gian 120 giây tương đương với ${hexadecimalNumber} trong hệ thập lục phân.`);

// 4. Khám phá kho báu

function decryptCode(code) {
    let text = '';
    for (let char of code) {
        if (char === char.toLowerCase()) {
            text += char.toUpperCase();
        } else if (char === char.toUpperCase()) {
            text += char.toLowerCase();
        } else {
            text += char;
        }
    }
    return text;
}

let code = "K16 Challenge";
let result = decryptCode(code);

console.log(`Mật mã đã giải mã là: ${result}`);

// 5. Trở về Trái đất

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();




