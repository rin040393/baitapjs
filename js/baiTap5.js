//Tính tổng 2 ký số của số vừa nhập (ví du: 12, 56,89)
//Input
var number = 89;
var soHangChuc = 0;
var soDonVi = 0;
//Output
var tong = 0;
soHangChuc = Math.floor(number/10);
var soDu = number % 10;
soDonVi = soDu % 10;
tong = soHangChuc + soDonVi;
console.log('Tổng của 2 ký số = ', tong);