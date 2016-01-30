import * as Commands from "cubitt-commands";

import {PropertyDeletedEvent} from "./PropertyDeletedEvent";
import {EventType} from "../EventType";

/**
 * An event that was raised when a property of a model was deleted
 */
export class ModelPropertyDeletedEvent extends PropertyDeletedEvent {
	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event
	 * @param version The new current version number
	 */
	constructor(
		command: Commands.DeleteModelPropertyCommand,
		version: number
	) {
		super(command, version, EventType.ModelPropertyDeleted);
	}
}
