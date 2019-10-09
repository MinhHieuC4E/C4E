// let n = parseInt(prompt("nhap n: "));
// //let m = parseInt(prompt("nhap m: "));
// if (n % 2 === 0){
//     for (let index = n; index >= 0; index -= 2) {
//         console.log(index);
//     }
// }
// else{
//     for (let index = n-1; index >= 0; index -= 2) {
//         console.log(index);
//     }
// }


// ---? in so chan tu n => 0


//---tinh tong
// let n = parseInt(prompt("nhap n: "));
// let x = 0;
// for (let index = 1; index <= n; index++) {
//     x += 1 / (index + 1) * index ;
// }
// console.log(x);




//---vong lap while

// let n = Number(prompt('nhap n: '));
// while (n < 8) {
//     n = Number(prompt("nhap so lon hon bang 8: "))
// }
// console.log(n);




//---kiem tra mat khau

// let matKhau = prompt("nhap mat khau: ");
// let kt = matKhau.length;
// let a = matKhau.indexOf("@");
// let b = matKhau.indexOf(".");
// let c = matKhau.indexOf("#");
// while ((kt < 8 ) || (a === -1 && b === -1 && c === -1)) {
//     matKhau = prompt("Mat khau phai tu 8 ky tu tro len \n va chua ky tu \" @ \" , \" . \" , \" # \" !!! : ");
//     kt = matKhau.length;
//     a = matKhau.indexOf("@");
//     b = matKhau.indexOf(".");
//     c = matKhau.indexOf("#");
// }
// console.log(`Mat khau: ${matKhau}`);

