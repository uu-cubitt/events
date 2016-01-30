"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Event_1 = require("./Event");
var AddedEvent = (function (_super) {
    __extends(AddedEvent, _super);
    function AddedEvent(command, version, type) {
        _super.call(this, command, version, type);
        this.elementId = command.elementId;
        this.elementType = command.elementType;
        this.elementProperties = command.elementProperties;
    }
    return AddedEvent;
}(Event_1.Event));
exports.AddedEvent = AddedEvent;
