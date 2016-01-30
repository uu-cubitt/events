import * as Commands from "cubitt-commands"

import {DeletedEvent} from "./DeletedEvent";
import {EventType} from "../EventType";

/**
 * An event that was raised when a model was deleted
 */
export class ModelDeletedEvent extends DeletedEvent {
	/**
	 * @param command The command that caused the raising of this event
	 * @param version The new current version number
	 */
	constructor(
		command: Commands.DeleteModelCommand,
		version: number
	) {
		super(command, version, EventType.ModelDeleted);
	}
}
