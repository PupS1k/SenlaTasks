function searchShortWord(id) {
    let line = document.getElementById(id).value.replace(/^[,.?!:;"' ]+|[,.?!:;"' ]+$/g,'');
    console.log(line);
    let words = line.split(/[,.?!:;"' ]+/g), min = words[0].length;
    console.log(words);
    words.forEach(function (word) {
        if (word.length < min) min = word.length;
    });
    elem = document.createElement("p");
    elem.innerHTML = "The shortest length of the word: " + min;
    document.body.appendChild(elem);
}