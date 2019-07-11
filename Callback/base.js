//本质就是在主线执行过程中插入执行代码
// function yo(callback) {
//     console.log("Yo")
//     if (callback) {
//         callback();
//     }
// }
//
// yo(function () {
//     console.log("我甘地，打钱")
// })

let a = [2, 4, 6, 8, 10];

function each(a, callback) {
    for (let i = 0; i < a.length; i++) {
        let item = a[i];
        callback(item);
    }
}

each(a, function (item) {
    if (item > 5) {
        console.log(item)
    }
});