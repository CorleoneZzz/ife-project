//原生对象的原型
let a = {};
let b = new Object();
console.log(a.constructor === b.constructor);
console.log(a);
//打印出来的constructor: ƒ Object()
//等同于let a =new Object();
//造一个完全不继承任何东西的对象
let c = Object.create(null);
console.log(c);

let d = [];
let e = new Array();
console.log(d.constructor === e.constructor);