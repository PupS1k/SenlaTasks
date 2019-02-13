function getDimensionalArray(array, num) {
    document.write("Входной массив: [" + array + "]");
    document.write("<br/>Входной размер: " + num + "<br/>");
    let newArr = [], partArr;
    document.write("Выходной массив: ");
    while (array.length > 0) {
        partArr = [];
        for (let i = 0; i < num && array.length > 0; i++) {
            partArr.push(array[0]);
            array.shift();
        }
        document.write("[" + partArr + "]");
        newArr.push(partArr);
    }
    console.log(array);
    console.log(newArr);
}