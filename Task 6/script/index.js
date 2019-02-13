function createFrame(array, symbol) {
    let maxSizeLine = 0;
    let str, newArr = [];
    array.forEach(function (line) {
        str = line.replace(/^\s+|\s+$/g, "");
        newArr.push(str);
        if (str.length > maxSizeLine) maxSizeLine = str.length;
    });
    str = '';
    for (let i = 0; i < maxSizeLine + 4; i++) {
        str += symbol;
    }
    document.write(str + '<br/>');
    console.log(str);
    newArr.forEach(function (line) {
        str = symbol;
        line[0] === ' ' ? str += line : str += (' ' + line);
        line[line.length - 1] === ' ' ? str += symbol : str += (' ' + symbol);
        console.log(str);
        document.write(str + '<br/>');
    });
    str = '';
    for (let i = 0; i < maxSizeLine + 4; i++) {
        str += symbol;
    }
    document.write(str);
    console.log(str);
}