//event.js 文件
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
//单次
emitter.once('connection', function (stream) {
    console.log('Ah, we have our first user!');
});
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
emitter.emit('someEvent', 'arg3 参数', 'arg4 参数');
console.info(emitter.listeners('connection'));
console.info(emitter.listenerCount('connection'));
emitter.emit('connection', 'a 参数');
emitter.emit('connection', 'b参数');
console.info(emitter.listeners('someEvent'));
console.info(emitter.listenerCount('someEvent'));//返回指定事件的监听器数量。
console.info(emitter.listeners('connection'));
console.info(emitter.listenerCount('connection'));
