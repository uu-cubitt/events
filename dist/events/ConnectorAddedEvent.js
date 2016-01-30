"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddedEvent_1 = require("./AddedEvent");
var EventType_1 = require("../EventType");
var ConnectorAddedEvent = (function (_super) {
    __extends(ConnectorAddedEvent, _super);
    function ConnectorAddedEvent(command, version) {
        _super.call(this, command, version, EventType_1.EventType.ConnectorAdded);
        this.nodeId = command.nodeId;
    }
    return ConnectorAddedEvent;
}(AddedEvent_1.AddedEvent));
exports.ConnectorAddedEvent = ConnectorAddedEvent;
