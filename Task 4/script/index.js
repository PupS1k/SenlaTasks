function main() {
    let array = [4, 2, 5, 5, 3, 2, 7, 3];
    let num = 5;
    document.write("Входной массив: [" + array + "]");
    document.write("<br/>Входной размер: " + num);
    array = getDimensionalArray(array, num);
    console.log(array);
}

function getDimensionalArray(array, num) {
    if (array.length > num) {
        let newArr = [], partArr;
        while (array.length > 0) {
            partArr = [];
            for (let i = 0; i < num && array.length > 0; i++) {
                partArr.push(array[0]);
                array.shift();
            }
            newArr.push(partArr);
        }
        return newArr;
    } else return array;
}