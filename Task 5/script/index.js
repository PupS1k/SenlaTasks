function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

function getLowerestIndex(array, num) {
    document.write("Входной массив: [" + array + "]");
    console.log("Входной массив: [" + array + "]");
    document.write("<br/>Входное число: " + num + "<br/>");
    document.write("Выходной массив: ");
    array.push(num);
    array.sort(compareNumeric);
    console.log("Выходной массив: [" + array + "]____Число: " + num);
    console.log("Первый элемент массива: " + array[0]);
    document.write("[" + array + "]");
    document.write("<br/>Первый элемент массива: " + array[0]);
}