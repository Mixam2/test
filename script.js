function achat() {
    alert('-500$');
}

function para() {
    let para = document.createElement('p');
    para.textContent = "new para";
    document.body.appendChild(para);

}

function page() {
    //document.body.(para);
    //document.body.write("<iframe src = 'in.html' width = '1100' height = '800'></iframe>");
    //document.write(" <h1>test c quoi</h1>");

    // document.appendChild("<h1>test c quoi</h1>");
    var n = document.getElementById("s")
    n.innerHTML = "<iframe src = 'in.html' width = '1100' height = '800'></iframe>"

}
document.write("<iframe src = 'in.html' width = '1100' height = '800'></iframe>");