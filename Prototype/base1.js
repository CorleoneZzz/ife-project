//prototype和__proto__
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function () {
//         console.log("YO,我叫" + this.name + "今年" + this.age + "岁")
//     }
// }
//
// let whh = new User("王花花", 20);
// let lsd = new User("李栓蛋", 18);
// whh.greet();
// lsd.greet();
//结果是false，说明每实例化一次，都会新创建，这个方法被拷了两次，其实不需要，引出了原型的概念
// console.log(whh.greet === lsd.greet);

function A() {
}

A.prototype.name = "lalala";
let a = new A();
let b = new A();
console.log(a, b);
//说明proto指向的是一个prototype
console.log(a.__proto__ === b.__proto__);

//用这个解决之前的问题，放到prototype里，引用就好，不用反复生成，且方便中途改变
function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.greet = function () {
    console.log("YO,我叫" + this.name + "今年" + this.age + "岁")
};
let whh = new User("王花花", 20);
let lsd = new User("李栓蛋", 18);
whh.greet();
lsd.greet();
console.log(whh.greet === lsd.greet);
//总结：如果不使用prototype方法每次调用构造函数时都会生成一个实例，每一次生成都会占用一部分内存资源，这样就会造成内存资源的浪费。使用prototype方法就可以有效避免内存资源浪费的情况