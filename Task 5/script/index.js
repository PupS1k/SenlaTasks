function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

function getLowerestIndex(array, num) {
    array.push(num);
    array.sort(compareNumeric);
    num = array.indexOf(num);
    return num;
}
function main() {
    let array = [1,2,2,2,3,3,4,4,5];
    let num = 3;
    document.write("Входной массив: [" + array + "]");
    document.write("<br/>Входное число: " + num + "<br/>");
    num = getLowerestIndex(array,num);
    document.write("Наименьший индекс: " + num);
    console.log("Наименьший индекс: " + num);
}