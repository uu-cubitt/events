import * as Common from "cubitt-common";

import {AddedEvent} from "./AddedEvent";
import {EventType} from "./../EventType";

/**
 * An event that is raised when a model is added.
 */
export class ModelAddedEvent extends AddedEvent {
	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 * @param timestamp The timestamp for the moment this event was created in milliseconds elapsed since 1 January 1970 00:00:00 UTC.
	 * @param elementId The RFC4122 v4 compliant ID of the new element.
	 * @param elementType The type of the new element.
	 * @param elementProperties The properties of the new element.
	 */
	constructor(
		sourceId: Common.Guid,
		version: number,
		timestamp: number,
		elementId: Common.Guid,
		elementType: string,
		elementProperties: Common.Dictionary<any>
	) {
		super(
			sourceId,
			version,
			EventType.ModelAdded,
			timestamp,
			elementId,
			elementType,
			elementProperties);
	}
}
