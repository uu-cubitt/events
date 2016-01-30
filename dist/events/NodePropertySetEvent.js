"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PropertySetEvent_1 = require("./PropertySetEvent");
var EventType_1 = require("../EventType");
var NodePropertySetEvent = (function (_super) {
    __extends(NodePropertySetEvent, _super);
    function NodePropertySetEvent(command, version) {
        _super.call(this, command, version, EventType_1.EventType.EdgePropertySet);
    }
    return NodePropertySetEvent;
}(PropertySetEvent_1.PropertySetEvent));
exports.NodePropertySetEvent = NodePropertySetEvent;
