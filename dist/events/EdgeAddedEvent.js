"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddedEvent_1 = require("./AddedEvent");
var EventType_1 = require("../EventType");
var EdgeAddedEvent = (function (_super) {
    __extends(EdgeAddedEvent, _super);
    function EdgeAddedEvent(command, version) {
        _super.call(this, command, version, EventType_1.EventType.EdgeAdded);
        this.modelId = command.modelId;
        this.startConnectorId = command.startConnectorId;
        this.endConnectorId = command.endConnectorId;
    }
    return EdgeAddedEvent;
}(AddedEvent_1.AddedEvent));
exports.EdgeAddedEvent = EdgeAddedEvent;
