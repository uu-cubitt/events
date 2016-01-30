"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Event_1 = require("./Event");
var PropertyDeletedEvent = (function (_super) {
    __extends(PropertyDeletedEvent, _super);
    function PropertyDeletedEvent(command, version, type) {
        _super.call(this, command, version, type);
        this.elementId = command.elementId;
        this.propertyName = command.propertyName;
    }
    return PropertyDeletedEvent;
}(Event_1.Event));
exports.PropertyDeletedEvent = PropertyDeletedEvent;
