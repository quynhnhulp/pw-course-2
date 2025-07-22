const chieu_cao = 159;
console.log("Khai báo chiều cao của bạn (cm):", chieu_cao);
let so_le_cua_chieu_cao = chieu_cao % 100;
let can_nang_ly_tuong = (so_le_cua_chieu_cao * 9) / 10;
let muc_can_toi_da = so_le_cua_chieu_cao;
let muc_can_toi_thieu = (muc_can_toi_da * 8) / 10;

console.log("Cân nặng lý tưởng: " + can_nang_ly_tuong + ", cân nặng tối đa: " + muc_can_toi_da + ", cân nặng tối thiểu: " + muc_can_toi_thieu);