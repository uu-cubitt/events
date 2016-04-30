import * as Common from "cubitt-common";

import {DeletedEvent} from "./DeletedEvent";
import {EventType} from "./../EventType";

/**
 * An event that was raised when a node was deleted.
 */
export class NodeDeletedEvent extends DeletedEvent {
	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 * @param type The type of this event.
	 * @param elementId The RFC4122 v4 compliant ID of the deleted element.
	 */
	constructor(
		sourceId: Common.Guid,
		version: number,
		elementId: Common.Guid
	) {
		super(
			sourceId,
			version,
			EventType.NodeDeleted,
			elementId);
	}
}
