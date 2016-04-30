import * as Common from "cubitt-common";

import {Event} from "./Event";
import {EventType} from "./../EventType";

/**
 * Base event for any deleted element.
 */
export abstract class DeletedEvent extends Event {
	/**
	 * The RFC4122 v4 compliant ID of the deleted element.
	 */
	public elementId: Common.Guid;

	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 * @param type The type of this event.
	 * @param elementId The RFC4122 v4 compliant ID of the deleted element.
	 */
	constructor(
		sourceId: Common.Guid,
		version: number,
		type: EventType,
		elementId: Common.Guid
	) {
		super(
			sourceId,
			version,
			type);
		this.elementId = elementId;
	}
}
