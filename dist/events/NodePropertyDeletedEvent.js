"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PropertyDeletedEvent_1 = require("./PropertyDeletedEvent");
var EventType_1 = require("../EventType");
var NodePropertyDeletedEvent = (function (_super) {
    __extends(NodePropertyDeletedEvent, _super);
    function NodePropertyDeletedEvent(command, version) {
        _super.call(this, command, version, EventType_1.EventType.NodePropertyDeleted);
    }
    return NodePropertyDeletedEvent;
}(PropertyDeletedEvent_1.PropertyDeletedEvent));
exports.NodePropertyDeletedEvent = NodePropertyDeletedEvent;
