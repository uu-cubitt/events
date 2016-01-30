"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PropertySetEvent_1 = require("./PropertySetEvent");
var EventType_1 = require("../EventType");
var EdgePropertySetEvent = (function (_super) {
    __extends(EdgePropertySetEvent, _super);
    function EdgePropertySetEvent(command, version) {
        _super.call(this, command, version, EventType_1.EventType.EdgePropertySet);
    }
    return EdgePropertySetEvent;
}(PropertySetEvent_1.PropertySetEvent));
exports.EdgePropertySetEvent = EdgePropertySetEvent;