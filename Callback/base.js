//本质就是在主线执行过程中插入执行代码
function yo(callback) {
    console.log("Yo")
    if (callback) {
        callback();
    }
}

yo(function () {
    console.log("我甘地，打钱")
})