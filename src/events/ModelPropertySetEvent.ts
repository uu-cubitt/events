import * as Common from "cubitt-common";

import {PropertySetEvent} from "./PropertySetEvent";
import {EventType} from "./../EventType";

/**
 * An event that was raised when a property of a model was set.
 */
export class ModelPropertySetEvent extends PropertySetEvent {
	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 * @param timestamp The timestamp for the moment this event was created in milliseconds elapsed since 1 January 1970 00:00:00 UTC.
	 * @param elementId The RFC4122 v4 compliant ID of the element for which the property was set.
	 * @param propertyName The name of the property that was set.
	 * @param propertyValue The value of the property that was set.
	 */
	constructor(
		sourceId: Common.Guid,
		version: number,
		timestamp: number,
		elementId: Common.Guid,
		propertyName: string,
		propertyValue: any
	) {
		super(
			sourceId,
			version,
			EventType.ModelPropertySet,
			timestamp,
			elementId,
			propertyName,
			propertyValue);
	}
}
