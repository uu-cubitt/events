import * as Common from "cubitt-common";

import {AddedEvent} from "./AddedEvent";
import {EventType} from "./../EventType";

/**
 * An event that is raised when a edge is added.
 */
export class EdgeAddedEvent extends AddedEvent {
	/**
	 * The RFC4122 v4 compliant ID of the model to which the new edge belongs.
	 */
	public modelId: Common.Guid;

	/**
	 * The RFC4122 v4 compliant ID of the connector where the new edge starts.
	 */
	public startConnectorId: Common.Guid;

	/**
	 * The RFC4122 v4 compliant ID of the connector where the new edge ends.
	 */
	public endConnectorId: Common.Guid;

	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 * @param timestamp The timestamp for the moment this event was created in milliseconds elapsed since 1 January 1970 00:00:00 UTC.
	 * @param elementId The RFC4122 v4 compliant ID of the new element.
	 * @param elementType The type of the new element.
	 * @param elementProperties The properties of the new element.
	 * @param modelId The RFC4122 v4 compliant ID of the model to which the new edge belongs.
	 * @param startConnectorId The RFC4122 v4 compliant ID of the connector where the new edge starts.
	 * @param endConnectorId The RFC4122 v4 compliant ID of the connector where the new edge ends.
	 */
	constructor(
		sourceId: Common.Guid,
		version: number,
		timestamp: number,
		elementId: Common.Guid,
		elementType: string,
		elementProperties: Common.Dictionary<any>,
		modelId: Common.Guid,
		startConnectorId: Common.Guid,
		endConnectorId: Common.Guid
	) {
		super(
			sourceId,
			version,
			EventType.EdgeAdded,
			timestamp,
			elementId,
			elementType,
			elementProperties);
		this.modelId = modelId;
		this.startConnectorId = startConnectorId;
		this.endConnectorId = endConnectorId;
	}
}
