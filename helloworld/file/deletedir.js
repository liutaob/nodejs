var fs = require("fs");
// 执行前创建一个空的 testcreatedir 目录
console.log("准备删除目录 testcreatedir");
fs.rmdir("testcreatedir",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("读取 testcreatedir 目录");
    fs.readdir("testcreatedir",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});
//更多方法参考https://www.runoob.com/nodejs/nodejs-fs.html
