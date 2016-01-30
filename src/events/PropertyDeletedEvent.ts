import * as Commands from "cubitt-commands";
import * as Common from "cubitt-common";

import {Event} from "./Event";
import {EventType} from "../EventType";

/**
 * Base event for any deleted property of some element
 */
export abstract class PropertyDeletedEvent extends Event {
	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event
	 * @param version The new current version number
	 * @param type The type of this event
	 */
	constructor(
		command: Commands.DeletePropertyCommand,
		version: number,
		type: EventType
	) {
		super(command, version, type);
		this.elementId = command.elementId;
		this.propertyName = command.propertyName;
	}

	/**
	 * The RFC4122 v4 compliant ID of the element of which the property was deleted
	 */
	elementId: Common.Guid;

	/**
	 * The name of the property that is deleted
	 */
	propertyName: string;
}
