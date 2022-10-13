//call
var obj={num:3};
var add=function(a,b,c){
    return this.num+a+b+c;
};
console.log(add.call(obj,1,3,5));

//apply
var obj={num:3};
var add=function(a,b,c){
    return this.num+a+b+c;
};
var arr=[1,3,5]
console.log(add.apply(obj,arr));

//bind
var obj={num:3};
var add=function(a,b,c){
    return this.num+a+b+c;
};
var bound=add.bind(obj);
console.log(bound(1,3,5));
//Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
var student={age:20};
var printAge=function(){
    return this.age;
};
var bound=printAge.bind(student);
console.log(bound())
