var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听1
var listener1 = function listener1() {
    console.log('监听1执行');
}

// 监听2
var listener2 = function listener2() {
    console.log('监听2执行');
}

// 绑定 connectoion 事件，处理函数为 listener1
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + '个监听器连接');

// 处理 connection 事件
eventEmitter.emit('connection');

// 移除 listener1 监听
eventEmitter.removeListener('connection', listener1);
console.log('listener1 不再监听');

// 触发监听事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + '个监听事件');

console.log('程序执行完毕');
