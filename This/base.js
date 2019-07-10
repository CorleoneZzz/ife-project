//This是个啥
let user =
    {
        fname: '王',
        lname: '花花',
        fullName: function () {
            //1.this等于父级对象（将函数作为方法来调时）
            return this.fname + this.lname;
            //此时如果将user改成person，要改的地方很多，此时引出this
            //return user.fname + user.lname;
        }
    };
//2.this是啥取决于this所在的函数在哪里被调用的，此刻等于全局变量window（严格模式下是undefined）
let get_full_name = user.fullName;
console.log(get_full_name()); //输出NAN
console.log(user.fullName());
// 3.当一个函数作为构造器被调用时，this就代表即将生成的对象


//this的作用就是在不同环境下，给不同的父级赋能，就不用一直传参
function yo() {
    console.log('Yo, 我是' + this.name);
}

let whh = {
    name: 'whh',
};
let lsd = {
    name: 'lsd',
};
whh.yo = yo;
lsd.yo = yo;

whh.yo();
lsd.yo();