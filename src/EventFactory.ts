import * as Common from "cubitt-common";

import {EventType} from "./EventType";
import {Event} from "./events/Event";
import {ConnectorAddedEvent} from "./events/ConnectorAddedEvent";
import {EdgeAddedEvent} from "./events/EdgeAddedEvent";
import {ModelAddedEvent} from "./events/ModelAddedEvent";
import {NodeAddedEvent} from "./events/NodeAddedEvent";
import {ConnectorDeletedEvent} from "./events/ConnectorDeletedEvent";
import {EdgeDeletedEvent} from "./events/EdgeDeletedEvent";
import {ModelDeletedEvent} from "./events/ModelDeletedEvent";
import {NodeDeletedEvent} from "./events/NodeDeletedEvent";
import {ConnectorPropertyDeletedEvent} from "./events/ConnectorPropertyDeletedEvent";
import {EdgePropertyDeletedEvent} from "./events/EdgePropertyDeletedEvent";
import {ModelPropertyDeletedEvent} from "./events/ModelPropertyDeletedEvent";
import {NodePropertyDeletedEvent} from "./events/NodePropertyDeletedEvent";
import {ConnectorPropertySetEvent} from "./events/ConnectorPropertySetEvent";
import {EdgePropertySetEvent} from "./events/EdgePropertySetEvent";
import {ModelPropertySetEvent} from "./events/ModelPropertySetEvent";
import {NodePropertySetEvent} from "./events/NodePropertySetEvent";

/**
 * Factory for creation of Events from JSON objects.
 */
export class EventFactory {
	/**
	 * Attempts to create an Event from a JSON object.
	 * 
	 * @param jsonObject JSON Object representing the Event.
	 */
	public static parse(jsonObject: Object): Event {
		if (typeof(jsonObject) === "undefined" || jsonObject === null) {
			throw new Error("EVENT ERROR: Empty object cannot be parsed.");
		}

		let typeString: string = jsonObject["type"];
		if (typeof(typeString) === "undefined" || typeString === null) {
			throw new Error("EVENT ERROR: Object has no 'type' property.");
		}

		let type: EventType = EventFactory.getEventType(typeString);

		let keys: Common.Dictionary<ValidationType> = {
			sourceId: ValidationType.Guid,
			version: ValidationType.Number,
			timestamp: ValidationType.Number
		};

		switch (type) {
			case EventType.ConnectorAdded:
				return EventFactory.parseConnectorAddedEvent(jsonObject, keys);
			case EventType.EdgeAdded:
				return EventFactory.parseEdgeAddedEvent(jsonObject, keys);
			case EventType.ModelAdded:
				return EventFactory.parseModelAddedEvent(jsonObject, keys);
			case EventType.NodeAdded:
				return EventFactory.parseNodeAddedEvent(jsonObject, keys);
			case EventType.ConnectorDeleted:
				return EventFactory.parseConnectorDeletedEvent(jsonObject, keys);
			case EventType.EdgeDeleted:
				return EventFactory.parseEdgeDeletedEvent(jsonObject, keys);
			case EventType.ModelDeleted:
				return EventFactory.parseModelDeletedEvent(jsonObject, keys);
			case EventType.NodeDeleted:
				return EventFactory.parseNodeDeletedEvent(jsonObject, keys);
			case EventType.ConnectorPropertyDeleted:
				return EventFactory.parseConnectorPropertyDeletedEvent(jsonObject, keys);
			case EventType.EdgePropertyDeleted:
				return EventFactory.parseEdgePropertyDeletedEvent(jsonObject, keys);
			case EventType.ModelPropertyDeleted:
				return EventFactory.parseModelPropertyDeletedEvent(jsonObject, keys);
			case EventType.NodePropertyDeleted:
				return EventFactory.parseNodePropertyDeletedEvent(jsonObject, keys);
			case EventType.ConnectorPropertySet:
				return EventFactory.parseConnectorPropertySetEvent(jsonObject, keys);
			case EventType.EdgePropertySet:
				return EventFactory.parseEdgePropertySetEvent(jsonObject, keys);
			case EventType.ModelPropertySet:
				return EventFactory.parseModelPropertySetEvent(jsonObject, keys);
			case EventType.NodePropertySet:
				return EventFactory.parseNodePropertySetEvent(jsonObject, keys);
			default:
				throw new Error("EVENT ERROR: Event of EventType '" + type.toString() + "' can not be parsed.");
		}
	}

	/**
	 * Validates the keys of the passed objects against the passed ValidationTypes.
	 *
	 * @param object Object that should be validated.
	 * @param keysWithType Dictionary of the keys that will be validated, with as value the type of validation.
	 */
	protected static validateObject(object: Object, keysWithType: Common.Dictionary<ValidationType>): void {
		for (let key in keysWithType) {
			let type: ValidationType = keysWithType[key];
			let val: any = object[key];
			if (typeof(val) === "undefined") {
				throw new Error("EVENT ERROR: Attribute '" + key.toString() + "' is missing.");
			}
			switch (type) {
				case ValidationType.Guid:
					let guid: Common.Guid = Common.Guid.parse(val);
					if (guid === null) {
						throw new Error("EVENT ERROR: Attribute '" + key.toString() + "' is not a valid GUID.");
					}
					break;
				case ValidationType.String:
					if (val.toString().trim().length === 0) {
						throw new Error("EVENT ERROR: Attribute '" + key.toString() + "' empty or only whitespaces.");
					}
					break;
				case ValidationType.Number:
					if (parseInt(val, 10) === NaN) {
						throw new Error("EVENT ERROR: Attribute '" + key.toString() + "' is not a number.");
					}
					break;
				case ValidationType.Any:
					break;
				default:
					throw new Error("EVENT ERROR: ValidationType " + type.toString() + " is not valid.");
			}
		}
	}

	/**
	 * Parses a properties object and returns a valid properties object.
	 *
	 * @param properties.
	 */
	protected static parseProperties(properties: Object): Common.Dictionary<any> {
		if (typeof(properties) === "undefined" || properties === null) {
			return {};
		}
		if (typeof(properties["type"]) !== "undefined") {
			delete properties["type"];
		}
		return properties;
	}

	/**
	 * Attempts to create a EventType from a string.
	 *
	 * @param type string containing a EventType text.
	 */
	protected static getEventType(type: string): EventType {
		switch (type) {
			case "ConnectorAddedEvent":
				return EventType.ConnectorAdded;
			case "EdgeAddedEvent":
				return EventType.EdgeAdded;
			case "ModelAddedEvent":
				return EventType.ModelAdded;
			case "NodeAddedEvent":
				return EventType.NodeAdded;
			case "ConnectorDeletedEvent":
				return EventType.ConnectorDeleted;
			case "EdgeDeletedEvent":
				return EventType.EdgeDeleted;
			case "ModelDeletedEvent":
				return EventType.ModelDeleted;
			case "NodeDeletedEvent":
				return EventType.NodeDeleted;
			case "ConnectorPropertyDeletedEvent":
				return EventType.ConnectorPropertyDeleted;
			case "EdgePropertyDeletedEvent":
				return EventType.EdgePropertyDeleted;
			case "ModelPropertyDeletedEvent":
				return EventType.ModelPropertyDeleted;
			case "NodePropertyDeletedEvent":
				return EventType.NodePropertyDeleted;
			case "ConnectorPropertySetEvent":
				return EventType.ConnectorPropertySet;
			case "EdgePropertySetEvent":
				return EventType.EdgePropertySet;
			case "ModelPropertySetEvent":
				return EventType.ModelPropertySet;
			case "NodePropertySetEvent":
				return EventType.NodePropertySet;
			default:
				throw new Error("EVENT ERROR: EventType " + type.toString() + " is not valid.");
		}
	}

	/**
	 * Attempts to create an ConnectorAddedEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseConnectorAddedEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): ConnectorAddedEvent {
		keys["elementId"] = ValidationType.Guid;
		keys["elementType"] = ValidationType.String;
		keys["nodeId"] = ValidationType.Guid;
		let properties: Object = EventFactory.parseProperties(jsonObject["properties"]);
		EventFactory.validateObject(jsonObject, keys);
		return new ConnectorAddedEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"]),
			jsonObject["elementType"].toString(),
			properties,
			Common.Guid.parse(jsonObject["nodeId"])
		);
	}

	/**
	 * Attempts to create an EdgeAddedEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseEdgeAddedEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): EdgeAddedEvent {
		keys["elementId"] = ValidationType.Guid;
		keys["elementType"] = ValidationType.String;
		keys["modelId"] = ValidationType.Guid;
		keys["startConnectorId"] = ValidationType.Guid;
		keys["endConnectorId"] = ValidationType.Guid;
		let properties: Object = EventFactory.parseProperties(jsonObject["properties"]);
		EventFactory.validateObject(jsonObject, keys);
		return new EdgeAddedEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"]),
			jsonObject["elementType"].toString(),
			properties,
			Common.Guid.parse(jsonObject["modelId"]),
			Common.Guid.parse(jsonObject["startConnectorId"]),
			Common.Guid.parse(jsonObject["endConnectorId"])
		);
	}

	/**
	 * Attempts to create an ModelAddedEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseModelAddedEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): ModelAddedEvent {
		keys["elementId"] = ValidationType.Guid;
		keys["elementType"] = ValidationType.String;
		if (typeof(jsonObject["parentId"]) !== "undefined" && jsonObject["parentId"] !== null) {
			keys["parentId"] = ValidationType.Guid;
		}
		let properties: Object = EventFactory.parseProperties(jsonObject["properties"]);
		EventFactory.validateObject(jsonObject, keys);
		return new ModelAddedEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"]),
			jsonObject["elementType"].toString(),
			properties,
			Common.Guid.parse(jsonObject["parentId"])
		);
	}

	/**
	 * Attempts to create an NodeAddedEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseNodeAddedEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): NodeAddedEvent {
		keys["elementId"] = ValidationType.Guid;
		keys["elementType"] = ValidationType.String;
		keys["modelId"] = ValidationType.Guid;
		let properties: Object = EventFactory.parseProperties(jsonObject["properties"]);
		EventFactory.validateObject(jsonObject, keys);
		return new NodeAddedEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"]),
			jsonObject["elementType"].toString(),
			properties,
			Common.Guid.parse(jsonObject["modelId"])
		);
	}

	/**
	 * Attempts to create an ConnectorDeletedEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseConnectorDeletedEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): ConnectorDeletedEvent {
		keys["elementId"] = ValidationType.Guid;
		EventFactory.validateObject(jsonObject, keys);
		return new ConnectorDeletedEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"])
		);
	}

	/**
	 * Attempts to create an EdgeDeletedEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseEdgeDeletedEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): EdgeDeletedEvent {
		keys["elementId"] = ValidationType.Guid;
		EventFactory.validateObject(jsonObject, keys);
		return new EdgeDeletedEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"])
		);
	}

	/**
	 * Attempts to create an ModelDeletedEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseModelDeletedEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): ModelDeletedEvent {
		keys["elementId"] = ValidationType.Guid;
		EventFactory.validateObject(jsonObject, keys);
		return new ModelDeletedEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"])
		);
	}

	/**
	 * Attempts to create an NodeDeletedEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseNodeDeletedEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): NodeDeletedEvent {
		keys["elementId"] = ValidationType.Guid;
		EventFactory.validateObject(jsonObject, keys);
		return new NodeDeletedEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"])
		);
	}

	/**
	 * Attempts to create a ConnectorPropertyDeletedEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseConnectorPropertyDeletedEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): ConnectorPropertyDeletedEvent {
		keys["elementId"] = ValidationType.Guid;
		keys["propertyName"] = ValidationType.String;
		EventFactory.validateObject(jsonObject, keys);
		return new ConnectorPropertyDeletedEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"]),
			jsonObject["propertyName"].toString()
		);
	}

	/**
	 * Attempts to create a EdgePropertyDeletedEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseEdgePropertyDeletedEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): EdgePropertyDeletedEvent {
		keys["elementId"] = ValidationType.Guid;
		keys["propertyName"] = ValidationType.String;
		EventFactory.validateObject(jsonObject, keys);
		return new EdgePropertyDeletedEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"]),
			jsonObject["propertyName"].toString()
		);
	}

	/**
	 * Attempts to create a ModelPropertyDeletedEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseModelPropertyDeletedEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): ModelPropertyDeletedEvent {
		keys["elementId"] = ValidationType.Guid;
		keys["propertyName"] = ValidationType.String;
		EventFactory.validateObject(jsonObject, keys);
		return new ModelPropertyDeletedEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"]),
			jsonObject["propertyName"].toString()
		);
	}

	/**
	 * Attempts to create a NodePropertyDeletedEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseNodePropertyDeletedEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): NodePropertyDeletedEvent {
		keys["elementId"] = ValidationType.Guid;
		keys["propertyName"] = ValidationType.String;
		EventFactory.validateObject(jsonObject, keys);
		return new NodePropertyDeletedEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"]),
			jsonObject["propertyName"].toString()
		);
	}

	/**
	 * Attempts to create a ConnectorPropertySetEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseConnectorPropertySetEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): ConnectorPropertySetEvent {
		keys["elementId"] = ValidationType.Guid;
		keys["propertyName"] = ValidationType.String;
		keys["propertyValue"] = ValidationType.Any;
		EventFactory.validateObject(jsonObject, keys);
		return new ConnectorPropertySetEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"]),
			jsonObject["propertyName"].toString(),
			jsonObject["propertyValue"]
		);
	}

	/**
	 * Attempts to create a EdgePropertySetEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseEdgePropertySetEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): EdgePropertySetEvent {
		keys["elementId"] = ValidationType.Guid;
		keys["propertyName"] = ValidationType.String;
		keys["propertyValue"] = ValidationType.Any;
		EventFactory.validateObject(jsonObject, keys);
		return new EdgePropertySetEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"]),
			jsonObject["propertyName"].toString(),
			jsonObject["propertyValue"]
		);
	}

	/**
	 * Attempts to create a ModelPropertySetEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseModelPropertySetEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): ModelPropertySetEvent {
		keys["elementId"] = ValidationType.Guid;
		keys["propertyName"] = ValidationType.String;
		keys["propertyValue"] = ValidationType.Any;
		EventFactory.validateObject(jsonObject, keys);
		return new ModelPropertySetEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"]),
			jsonObject["propertyName"].toString(),
			jsonObject["propertyValue"]
		);
	}

	/**
	 * Attempts to create a NodePropertySetEvent.
	 *
	 * @param jsonObject JSON Object representing the Event.
	 * @param keys Keys of the jsonObject that will be validated against the matched ValidationTypes.
	 */
	protected static parseNodePropertySetEvent(jsonObject: Object, keys: Common.Dictionary<ValidationType>): NodePropertySetEvent {
		keys["elementId"] = ValidationType.Guid;
		keys["propertyName"] = ValidationType.String;
		keys["propertyValue"] = ValidationType.Any;
		EventFactory.validateObject(jsonObject, keys);
		return new NodePropertySetEvent(
			Common.Guid.parse(jsonObject["sourceId"]),
			parseInt(jsonObject["version"]),
			parseInt(jsonObject["timestamp"]),
			Common.Guid.parse(jsonObject["elementId"]),
			jsonObject["propertyName"].toString(),
			jsonObject["propertyValue"]
		);
	}
}

/**
 * An enum for all types of attributes that can be validated.
 */
export enum ValidationType {
	Guid,
	String,
	Properties,
	Any,
	Number
}
