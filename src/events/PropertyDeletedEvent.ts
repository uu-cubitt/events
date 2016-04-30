import * as Common from "cubitt-common";

import {Event} from "./Event";
import {EventType} from "./../EventType";

/**
 * Base event for any deleted property of some element.
 */
export abstract class PropertyDeletedEvent extends Event {
	/**
	 * The RFC4122 v4 compliant ID of the element of which the property was deleted.
	 */
	public elementId: Common.Guid;

	/**
	 * The name of the property that is deleted.
	 */
	public propertyName: string;

	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 * @param type The type of this event.
	 * @param timestamp The timestamp for the moment this event was created in milliseconds elapsed since 1 January 1970 00:00:00 UTC.
	 * @param elementId The RFC4122 v4 compliant ID of the element of which the property was deleted.
	 * @param propertyName The name of the property that is deleted.
	 */
	constructor(
		sourceId: Common.Guid,
		version: number,
		type: EventType,
		timestamp: number,
		elementId: Common.Guid,
		propertyName: string
	) {
		super(
			sourceId,
			version,
			type,
			timestamp);
		this.elementId = elementId;
		this.propertyName = propertyName;
	}
}
