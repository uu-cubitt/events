"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Event_1 = require("./Event");
var DeletedEvent = (function (_super) {
    __extends(DeletedEvent, _super);
    function DeletedEvent(command, version, type) {
        _super.call(this, command, version, type);
        this.elementId = command.elementId;
    }
    return DeletedEvent;
}(Event_1.Event));
exports.DeletedEvent = DeletedEvent;
