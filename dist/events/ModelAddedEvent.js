"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddedEvent_1 = require("./AddedEvent");
var EventType_1 = require("../EventType");
var ModelAddedEvent = (function (_super) {
    __extends(ModelAddedEvent, _super);
    function ModelAddedEvent(command, version) {
        _super.call(this, command, version, EventType_1.EventType.ModelAdded);
    }
    return ModelAddedEvent;
}(AddedEvent_1.AddedEvent));
exports.ModelAddedEvent = ModelAddedEvent;
