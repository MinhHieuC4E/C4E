// lay ra ds dien thoai va chuyen str => oject
let dsDienThoai = JSON.parse(localStorage.getItem("DSDT")); 

// lay id dien thoai vua click
let dtSelected_id = localStorage.getItem("DTselected"); 

// tim va chi ra dt ng dung da chon
let dtSelected;
for (let i = 0; i < dsDienThoai.length; i++) {
    const dt = dsDienThoai[i];
    if (dt.id === dtSelected_id) {
        dtSelected = dt;
        break;
    }
}

let name = `<h2>${dtSelected.name}</h2>`;
document.getElementById('sanpham').innerHTML += name;
let img = `<img src="${dtSelected.image}"/>`;   
document.getElementById('sanpham').innerHTML += img;
