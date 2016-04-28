import * as Commands from "cubitt-commands";

import {AddedEvent} from "./AddedEvent";
import {EventType} from "./../EventType";

/**
 * An event that is raised when a model is added.
 */
export class ModelAddedEvent extends AddedEvent {
	/**
	 * @param command The command that caused the raising of this event.
	 * @param version The new current version number.
	 */
	constructor(
		command: Commands.AddModelCommand,
		version: number
	) {
		super(command, version, EventType.ModelAdded);
	}
}
