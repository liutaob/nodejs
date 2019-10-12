// 通过 exports 对象把 world 作为模块的访问接口
// exports.world = function() {
//     console.log('Hello World');
// }


//demo2
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;
