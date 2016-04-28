import * as Commands from "cubitt-commands";

import {PropertySetEvent} from "./PropertySetEvent";
import {EventType} from "./../EventType";

/**
 * An event that was raised when a property of a model was set.
 */
export class ModelPropertySetEvent extends PropertySetEvent {
	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 */
	constructor(
		command: Commands.SetModelPropertyCommand,
		version: number
	) {
		super(command, version, EventType.ModelPropertySet);
	}
}
