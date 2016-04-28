import * as Commands from "cubitt-commands";

import {DeletedEvent} from "./DeletedEvent";
import {EventType} from "./../EventType";

/**
 * An event that was raised when a node was deleted.
 */
export class NodeDeletedEvent extends DeletedEvent {
	/**
	 * @param command The command that caused the raising of this event.
	 * @param version The new current version number.
	 */
	constructor(
		command: Commands.DeleteNodeCommand,
		version: number
	) {
		super(command, version, EventType.NodeDeleted);
	}
}
