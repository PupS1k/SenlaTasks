function createHolder(num) {
    return {
        numObj: num,
        getValue: function () {
            return this.numObj;
        },
        setValue: function (num) {
            this.numObj = num;
        }
    };
}

function main() {
    let num = [123, '23'];
    console.log(num);
    let obj = createHolder(num);
    console.log(obj);
}