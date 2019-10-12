var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);//实现对象间原型继承的函数
var objBase = new Base();
objBase.showName();//base
objBase.sayHello();//hello base
console.log(objBase);//Base { name: 'base', base: 1991, sayHello: [Function] }
var objSub = new Sub();
objSub.showName();//sub
// objSub.sayHello();
console.log(objSub);//Sub { name: 'sub' }
