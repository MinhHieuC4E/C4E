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
// while ((matKhau.length < 8 ) || 
// ((matKhau.indexOf("@") === -1 
// && matKhau.indexOf("#") === -1
// && matKhau.indexOf(".") === -1))) {
//     matKhau = prompt("Mat khau phai tu 8 ky tu tro len \n va chua ky tu \" @ \" , \" . \" , \" # \" !!! : ");
// }
// console.log(`Mat khau: ${matKhau}`);



//----
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1 ) {
//         break;
//     }
//     console.log(i);
    
// }



//---kiem tra so nguyen to
let isSNT = true;
let n = prompt("nhap so: ");
for (let i = 2; i < n ; i++) {
    if (n % i === 0){
        isSNT = false;
        break; // su dung break toi uu lenh
    }
}
if (isSNT) {
    console.log(`${n} la so nguyen to`);
}
else {
    console.log(`${n} khong la so nguyen to`);
    
}
