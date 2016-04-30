import * as Common from "cubitt-common";

import {PropertySetEvent} from "./PropertySetEvent";
import {EventType} from "./../EventType";

/**
 * An event that is raised when a property of a connector is set.
 */
export class ConnectorPropertySetEvent extends PropertySetEvent {
	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 * @param type The type of this event.
	 * @param elementId The RFC4122 v4 compliant ID of the element for which the property was set.
	 * @param propertyName The name of the property that was set.
	 * @param propertyValue The value of the property that was set.
	 */
	constructor(
		sourceId: Common.Guid,
		version: number,
		elementId: Common.Guid,
		propertyName: string,
		propertyValue: any
	) {
		super(
			sourceId,
			version,
			EventType.ConnectorPropertySet,
			elementId,
			propertyName,
			propertyValue);
	}
}
