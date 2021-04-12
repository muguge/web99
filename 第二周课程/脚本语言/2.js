/*let objec1 = new Object(); //66//为空
console.log(objec1.__proto__); //[Number:0]//{}
console.log(objec1.__proto__.__proto__); //{}//null
//模板字符串
alert(`你好，我是${name},今年${age}岁`);
let str = "return" + "`Hello! ${name}`";
let func = new Function("name", str);
console.log(func("zzw"));

function func2(name) {
    return "我是" + name;
}*/
alert("我的第一个js");
var res = 8 || 3;
console.log(res);
/*if(1){
    console.log("真的");
}else{
    console.log("假的");
}*/
//false,"",'',0,null,undefined都为假
var a = 2,
    b = 1;
var i = a < b && a--;
console.log(a);
//短路与&&，短路或||,与&,或|