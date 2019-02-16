function searchShortWord(id) {
    let line = document.getElementById(id).value.replace(/^[,.?!:;"' ]+|[,.?!:;"' ]+$/g, '');
    let words = line.split(/[,.?!:;"' ]+/g), min = words[0].length;
    words.forEach(function (word) {
        if (word.length < min) min = word.length;
    });
    try {
        let elem = document.getElementsByTagName('p')[0];
        elem.innerHTML = "The shortest length of the word: " + min;
        document.body.appendChild(elem);
    } catch (e) {
        let elem = document.createElement("p");
        elem.innerHTML = "The shortest length of the word: " + min;
        document.body.appendChild(elem);
    }
}