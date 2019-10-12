//---day Fibonacci
// let n = prompt("nhap n: ");
// let n1 = 1;
// let n2 = 1;
// let n3 = 0;
// let t = 0;

// console.log(n1);
// console.log(n2);

// for (let index = 3; index <= n ; index++) {
//     n3 = n1 + n2;
//     n1 = n2;
//     n2 = n3;
//     t = t + n3;
//     console.log(`${n3}\n`);
// }
// let tong = 0;
// tong = tong + 2 + t; 

// console.log(`phan tu thu ${n}: ${n3}`); // in ra phan tu thu n cua day Fibonacci
// console.log(`tong cua day so S = ${tong}`);


//---ve hinh
let chieuCao = prompt("nhap chieu dai: ");
let chieuRong = prompt("nhap chieu rong: ");
for (let a = 1; a <= chieuCao; a++) {
    for (let b = 1; b <= chieuRong; b++) {
        document.write("*");// in tren html
    }
    document.write('<br/>');// xuong dong tren html
}