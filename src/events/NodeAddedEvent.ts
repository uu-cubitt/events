import * as Common from "cubitt-common";

import {AddedEvent} from "./AddedEvent";
import {EventType} from "./../EventType";

/**
 * An event that was raised when a node was added.
 */
export class NodeAddedEvent extends AddedEvent {
	/**
	 * The RFC4122 v4 compliant ID of the model to which the new node belongs.
	 */
	public modelId: Common.Guid;

	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 * @param timestamp The timestamp for the moment this event was created in milliseconds elapsed since 1 January 1970 00:00:00 UTC.
	 * @param elementId The RFC4122 v4 compliant ID of the new element.
	 * @param elementType The type of the new element.
	 * @param elementProperties The properties of the new element.
	 * @param modelId The RFC4122 v4 compliant ID of the model to which the new node belongs.
	 */
	constructor(
		sourceId: Common.Guid,
		version: number,
		timestamp: number,
		elementId: Common.Guid,
		elementType: string,
		elementProperties: Common.Dictionary<any>,
		modelId: Common.Guid
	) {
		super(
			sourceId,
			version,
			EventType.NodeAdded,
			timestamp,
			elementId,
			elementType,
			elementProperties);
		this.modelId = modelId;
	}
}
