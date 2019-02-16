function randColor() {
    let color = '#';
    for (let i = 0; i < 6; i++)
        color += Math.floor(Math.random() * 10).toString();
    return color;
}

function checkData(id) {
    let sizeSquare = document.getElementById(id).value;
    for (let i = 0; i < 31; i++) {
        try {
            let div = document.getElementsByTagName('DIV')[0];
            div.parentNode.removeChild(div);
        } catch (e) {
            sizeSquare <= 30 && sizeSquare >= 0 ? createSquare(sizeSquare) : alert('Ошибка!!!\nРазрешены только числа от 0 до 30');
            break;
        }
    }
}

function createSquare(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        document.body.appendChild(row);
        for (let j = 0; j < size; j++) {
            let field = document.createElement("div");
            field.style.width = size + 'px';
            field.style.height = size + 'px';
            field.style.marginBottom = '4px';
            field.style.display = 'inline-block';
            field.style.backgroundColor = randColor();
            row.appendChild(field);
        }
    }
}