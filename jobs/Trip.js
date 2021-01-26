const EventEmitter = require('events').EventEmitter;
class Trip extends EventEmitter {
    constructor() {
        super();
        this.on('start');
        this.on('end');
        this.on('error', new Error('Something happened'));
    }
    start() {
        this.emit('start');
    }
    end() {
        this.emit('end');
    }
};

module.exports = Trip;