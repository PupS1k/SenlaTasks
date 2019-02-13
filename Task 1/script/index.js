function createSheeps(id) {
    let line = "";
    let quantitySheeps = document.getElementById(id).value;
    for (let i = 1; i <= quantitySheeps; i++)
        line += (i + " sheep...");
    elem = document.createElement("p");
    elem.innerHTML = line;
    document.body.appendChild(elem);
}