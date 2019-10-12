// let a = [1, 2, 3, 4, 5, 6];
// let name = ["long", "cuong", "hien", "dung ml"];
// console.log(a);
// console.log(name);

// console.log(name[3]);
// name[0] = "long ml";

// name.push("a", "b");  // them gia tri vao cuoi mang
// name.unshift("c");   //them gtri vao dau mang
// console.log(name);

// name.pop();          //xoa ptu cuoi mang
// console.log(name);   
// name.shift();        //xoa ptu dau mang
// console.log(name);
// name.splice(1, 2);   //bo phan tu (1: vi tri bat dau / 2: so ptu bi xoa tu vi tri bat dau)
// console.log(name);



//---
// let sum = 0;
// let num = [2, 5, 6, 7, 3, 9];
// for (let index = 0 ; index < num.length ; index++) {
//     let element = num[index];  // duyet cac ptu trong mang
//     console.log(element);
//     sum = sum + num[index];
// }
// let trungBinh = sum / num.length;
// console.log(trungBinh);




//---bt thao tac voi mang
let phones = ["nokia 1280", "iPhone 11", "samsung galaxy S9", "cuc gach"];
//in danh sach
for (let i = 0; i < phones.length; i++) {
    let danhSach = phones[i];
    console.log(`${i+1}. ${danhSach} `);
    
}

// //them ten dien thoai
// let tenDT = prompt('nhap DT can them: ');
// let themSDT = phones.push(tenDT);
// console.log(`\nDANH SACH MOI \n\n`);
// for (let i = 0; i < phones.length; i++) {
//     let danhSach = phones[i];
//     console.log(`${i+1}. ${danhSach} `);
    
// }

// //sua ten dien thoai
// let stt1 = prompt("nhap STT DT can sua doi: ");
// let add = prompt('nhap ten DT can sua doi: ');
// phones[stt1 - 1] = add;
// console.log(`\nDANH SACH MOI \n\n`);
// for (let i = 0; i < phones.length; i++) {
//     let danhSach = phones[i];
//     console.log(`${i+1}. ${danhSach} `);
    
// }

// //nhap stt xoa vi tri do
// let stt2 = prompt("nhap STT DT can xoa")
// phones.splice(stt2 - 1, 1);
// console.log(`\nDANH SACH MOI \n\n`);
// for (let i = 0; i < phones.length; i++) {
//     let danhSach = phones[i];
//     console.log(`${i+1}. ${danhSach} `);
    
// }

//nhap tu khoa tim kiem ten dt co tu khoa
let txt = prompt("nhap tu khoa tim kiem: ");
console.log("\n ten dien thoai tim thay: \n\n");
for (let i = 0; i < phones.length; i++) {
    
    if (phones[i].indexOf(txt) !== -1) {
        
        console.log(`${i+1}. ${phones[i]}`);
        
    }
}