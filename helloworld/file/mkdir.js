var fs = require("fs");
// tmp 目录必须存在
console.log("创建目录testcreatedir");
// fs.mkdir("testcreatedir",function(err){
//     if (err) {
//         return console.error(err);
//     }
//     console.log("目录创建成功。");
// });
fs.mkdir("testcreatedir",{ recursive: true },(err => {//recursive: true 参数，不管创建的目录 /tmp 和 /tmp/a 是否存在：
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
}));
