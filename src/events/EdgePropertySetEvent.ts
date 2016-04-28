import * as Commands from "cubitt-commands";

import {PropertySetEvent} from "./PropertySetEvent";
import {EventType} from "./../EventType";

/**
 * An event that is raised when a property of an edge is set.
 */
export class EdgePropertySetEvent extends PropertySetEvent {
	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 */
	constructor(
		command: Commands.SetEdgePropertyCommand,
		version: number
	) {
		super(command, version, EventType.EdgePropertySet);
	}
}
