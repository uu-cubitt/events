"use strict";
var Event = (function () {
    function Event(command, version, type) {
        this.version = version;
        this.type = type;
        this.sourceId = command.id;
        this.timestamp = Date.now();
    }
    Event.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return Event;
}());
exports.Event = Event;
