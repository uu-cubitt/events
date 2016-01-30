import * as Commands from "cubitt-commands";

import {PropertyDeletedEvent} from "./PropertyDeletedEvent";
import {EventType} from "../EventType";

/**
 * An event that is raised when a property of an edge is deleted
 */
export class EdgePropertyDeletedEvent extends PropertyDeletedEvent {
	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event
	 * @param version The new current version number
	 */
	constructor(
		command: Commands.DeleteEdgePropertyCommand,
		version: number
	) {
		super(command, version, EventType.EdgePropertyDeleted);
	}
}
