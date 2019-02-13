function createHolder(num){
    return obj ={
        numObj:num,
        getValue:function(){
            return this.numObj;
        },
        setValue:function (num) {
            this.numObj = num;
        }
    };
}
function main(num) {
    console.log(num);
    obj = createHolder(num);
    console.log(obj);
    console.log(obj.getValue());
    obj.setValue(35);
    console.log(obj.getValue());
}