const scores = [85, 90, 78];

// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90. 
const newScores = scores.map(score => {
  if (score < 90) {
    return score * 1.1; // tăng 10%
  } else {
    return score * 0.95; // giảm 5%
  }
});

console.log(newScores);

// 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi. 
const numbers = [1, 2, 3];
const newArr = numbers.map(num => String(num));
console.log(newArr);

// 4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị. 
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);