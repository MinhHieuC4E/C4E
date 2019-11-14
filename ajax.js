// function loadDoc() {
//     var xhttp = new XMLHttpRequest(); // tao yeu cau
//     xhttp.onreadystatechange = function () { //kiem tra trang thai state
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText);
//             document.getElementById("demo").innerHTML = this.responseText;
//             let data = JSON.parse(this.responseText);
//             console.log(data);
//             console.log(data.date);

//             let json = JSON.stringify(data);
//             console.log(json);

//         }
//     };
//     xhttp.open("GET", "https://weather-data-demo.herokuapp.com/get-weather-today", true);
//     xhttp.send();
// }https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png

let dsDT = [
    {
        "id": "dt1",
        "name": "iphone x",
        "image": "C:/Users/admins/Desktop/WebXemPhim/img/KeHuyDiet.jpg"
    },
    {
        "id": "dt2",
        "name": "galaxy s9",
        "image": "https://www.viettablet.com/images/thumbnails/480/516/detailed/26/samsung-galaxy-s9-cu-viettablet.jpg"
    }
]

function displaySanPham() {
    let s = ''
    for (let i = 0; i < dsDT.length; i++) {
        const dt = dsDT[i];
        s += `<tr>
                <td>${i + 1}</td>        
                <td>${dt.name}</td>
                <td>
                    <button onclick = detail('${dt.id}')>detail</button>
                </td>
              </tr>`
    }
    document.getElementById("danh-sach-san-pham").innerHTML = s;
}
displaySanPham();

function detail(id) {
    localStorage.setItem("DTselected",id);
    window.location.href = "sp.html";
}

localStorage.setItem("DSDT",JSON.stringify(dsDT));//luu dsDT len localStorage(chi luu dc str)