var obj={num:2};
var add=function(a){
    return this.num+a;
};
console.log(add.call(obj,3));