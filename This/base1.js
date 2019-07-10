// call,apply,bind
function yo() {
    console.log("yo,我是" + this.name)
}


//上为下的快捷调用方式
yo();
yo.call();
//此时this指向全局
//call的作用是绑定function里的this的值

let whh = {
    name: "王花花"
};
//通过更改this，给whh赋能yo的功能（执行环境）
yo.call(whh);

//也可传参
function yoo(name) {
    console.log("yoo" + name + "我是" + this.name)
}

yoo.call(whh, "刘备备");
//apply和call一样，只不过后面的参数是数组
yoo.apply(whh, ["刘备备"]);

//bind是把绑定新环境的function返回，等待着用
yo2 = yoo.bind(whh);
yo2("刘备备");