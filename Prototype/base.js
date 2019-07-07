//如果纯手动的创建对象，那么这样的问题就是，如果我创建一百个，咋办
// let whh = {
//     name: "王花花",
//     age: 20,
//     gender: "female"
// };
// let lsd = {
//     name: "李栓蛋",
//     age: 23,
//     gender: "male"
// };
// console.log(whh, lsd);

//为了解决上面的问题，做一个function来生成对象,达到了一样的效果，减少了工作量
//这个function叫工厂函数，造对象的
// function user(name, age, gender) {
//     let person = {};
//     person.name = name;
//     person.age = age;
//     person.gender = gender;
//     return person;
// }
//
// console.log(user("王花花", 20, "female"));


//其实js原生提供了一个更简洁的生产对象方式,this代表了即将生成的对象
//默认生成了this对象并return了this
//要用new来召唤，称为构造器或构造函数constructor，首字母一般大写
function User(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let whh = new User("王花花", 20, "female");
console.log(whh);

function Dog() {
    this.bark = function () {
        console.log("Muhahaha")
    }
}

let dog = new Dog();
dog.bark();