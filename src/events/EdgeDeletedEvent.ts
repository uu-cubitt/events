import * as Commands from "cubitt-commands";

import {DeletedEvent} from "./DeletedEvent";
import {EventType} from "./../EventType";

/**
 * An event that is raised when an edge is deleted.
 */
export class EdgeDeletedEvent extends DeletedEvent {
	/**
	 * @param command The command that caused the raising of this event.
	 * @param version The new current version number.
	 */
	constructor(
		command: Commands.DeleteEdgeCommand,
		version: number
	) {
		super(command, version, EventType.EdgeDeleted);
	}
}
