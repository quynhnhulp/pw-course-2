const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

// 1. Thay khoảng trắng bằng "." trong phoneNumber. 
const updatePhone1 = phoneNumber.replace(" ", ".");
const updatePhone2 = updatePhone1.replace(" ", ".");
console.log(updatePhone2);

// 2. Thay "lỗi" bằng "bug" trong report. 
const updatedReport = report.replace("lỗi", "bug");
console.log(updatedReport);

// 3. Thay "," bằng "." trong numbersStr.
const updatedNumber1 = numbersStr.replace(",", ".");
const updatedNumber2 = updatedNumber1.replace(",", ".");
console.log(updatedNumber2); 
