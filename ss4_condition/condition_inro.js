
// let a = 30;
// let b = 20;
// let soSanhBang = a !== b;
// console.log(soSanhBang);

//---so sanh a vs b
// let nhapSoA = Number(prompt("nhap so a: "));
// let nhapSoB = Number(prompt("nhap so b: "));

// if (nhapSoA > nhapSoB){
//     console.log("a lon hon b");
// }

//---so sánh chẵn lẻ
// let n = Number(prompt("nhap n: "));
// if (n%2 === 0){
//     console.log("n la so chan");
// }
// else {
//     console.log("n la so le");
// }
 
//---tìm số lớn nhất trong 3 số
// let a = Number(prompt("nhap a: "));
// let b = Number(prompt("nhap b: "));
// let c = Number(prompt("nhap c: "));

// if(a>b && a>b){
//     console.log("a la so lon nhat");
    
// }
// else if (b>a && b>c){
//     console.log("b la so lon nhat");
    
// }
// else {he co
//     console.log("c la so lon nhat");
    
// }


//---nhap vao thang trong nam in ra so ngay cua thang (thang 2 co the co 28 hoac 29 ngay)
let thang = Number(prompt("thang: "));
if(thang === 2){
    console.log(`Tháng 2 có 28 hoặc 29 ngày`);
    
}
else if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12){
    console.log(`Tháng ${thang} có 31 ngày`);
    
}
else if (thang === 4 || thang === 6 || thang === 9 || thang === 11){
    console.log(`Tháng ${thang} có 30 ngày`);
    
}