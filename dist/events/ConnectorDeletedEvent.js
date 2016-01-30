"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DeletedEvent_1 = require("./DeletedEvent");
var EventType_1 = require("../EventType");
var ConnectorDeletedEvent = (function (_super) {
    __extends(ConnectorDeletedEvent, _super);
    function ConnectorDeletedEvent(command, version) {
        _super.call(this, command, version, EventType_1.EventType.ConnectorDeleted);
    }
    return ConnectorDeletedEvent;
}(DeletedEvent_1.DeletedEvent));
exports.ConnectorDeletedEvent = ConnectorDeletedEvent;
