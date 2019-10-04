//---bai 1
// const pi = 3.14;
// let r = parseFloat(prompt("Nhap ban kinh: "));
// let chuVi = 2 * pi * r;
// let dienTich = pi * r * r;
// console.log(`Chu vi = ${chuVi}, Dien tich = ${dienTich}`);


//---bai 2
// let chieuDai = parseFloat(prompt("Nhap chieu dai hinh chu nhat: "));
// let chieuRong = parseFloat(prompt("Nhap chieu rong hinh chu nhat: "));
// let chuVi = (chieuDai + chieuRong) * 2;
// let dienTich = chieuDai * chieuRong;
// console.log(`Chu vi hinh chu nhat la: ${chuVi}, Dien tich hinh chu nhat la: ${dienTich}`);


//---bai 3
// let x = Number(prompt("Nhap gia tri x: "));
// let y1 = Number(4 * (x * x + 10 * x * Math.sqrt(x) + 3 * x + 1));
// let y2 = Number((Math.sin(Math.PI * x * x) + Math.sqrt(x * x + 1)) / 
//                 (Math.exp(2 * x) + Math.cos(Math.PI * x / 4)));
// console.log(`y1 = ${y1}`);
// console.log(`y2 = ${y2}`);




//---bai 4
// let soTien = parseInt(prompt("nhap so tien(so tien phai la boi cua 10.000): "));
// if (soTien % 10000 !== 0){
//     console.log("So tien k hop le");
    
// }
// let a1 = parseInt(soTien / 100000); 
// let a2 = parseInt(soTien % 100000);
// let b1 = parseInt(a2 / 50000);
// let b2 = parseInt(a2 % 50000);
// let c1 = parseInt(b2 / 20000);
// let c2 = parseInt(b2 % 20000);
// let d1 = parseInt(c2 / 10000);

// console.log(`${soTien} vnđ = ${a1} tờ 100.000 + ${b1} tờ 50.000 + ${c1} tờ 20.000 + ${d1} tờ 10.000 vnđ`);


//---bai 5
// let nhapSo = parseInt(prompt('Nhap so nguyen co 3 chu so: '));
// let tong = parseInt(nhapSo / 100) + parseInt((nhapSo % 100) / 10) + parseInt((nhapSo % 100) % 10);
// console.log(`So ${nhapSo} co tong ca chu so la: ${tong}`);



