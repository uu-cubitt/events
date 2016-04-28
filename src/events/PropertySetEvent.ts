import * as Commands from "cubitt-commands";
import * as Common from "cubitt-common";

import {Event} from "./Event";
import {EventType} from "./../EventType";

/**
 * Base event for any set property of some element.
 */
export abstract class PropertySetEvent extends Event {
	/**
	 * The RFC4122 v4 compliant ID of the element for which the property was set.
	 */
	public elementId: Common.Guid;

	/**
	 * The name of the property that was set.
	 */
	public propertyName: string;

	/**
	 * The value of the property that was set.
	 */
	public propertyValue: any;

	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 * @param type The type of this event.
	 */
	constructor(
		command: Commands.SetPropertyCommand,
		version: number,
		type: EventType
	) {
		super(command, version, type);
		this.elementId = command.elementId;
		this.propertyName = command.propertyName;
		this.propertyValue = command.propertyValue;
	}
}
