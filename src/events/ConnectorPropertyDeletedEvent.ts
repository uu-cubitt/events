import * as Common from "cubitt-common";

import {PropertyDeletedEvent} from "./PropertyDeletedEvent";
import {EventType} from "./../EventType";

/**
 * An event that is raised when a property of a connector is deleted.
 */
export class ConnectorPropertyDeletedEvent extends PropertyDeletedEvent {
	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 * @param type The type of this event.
	 * @param elementId The RFC4122 v4 compliant ID of the element of which the property was deleted.
	 * @param propertyName The name of the property that is deleted.
	 */
	constructor(
		sourceId: Common.Guid,
		version: number,
		elementId: Common.Guid,
		propertyName: string
	) {
		super(
			sourceId,
			version,
			EventType.ConnectorPropertyDeleted,
			elementId,
			propertyName);
	}
}
