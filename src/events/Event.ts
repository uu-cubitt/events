import * as Common from "cubitt-common";

import {EventType} from "./../EventType";

/**
 * Base event.
 */
export abstract class Event {
	/**
	 * The RFC4122 v4 compliant ID of the command that caused this event.
	 */
	public sourceId: Common.Guid;

	/**
	 * The new version number after applying this event.
	 */
	public version: number;

	/**
	 * The type of this event.
	 */
	public type: EventType;

	/**
	 * The timestamp for the moment this event was created in milliseconds elapsed since 1 January 1970 00:00:00 UTC.
	 */
	public timestamp: number;

	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 * @param type The type of this event.
	 * @param timestamp The timestamp for the moment this event was created in milliseconds elapsed since 1 January 1970 00:00:00 UTC.
	 */
	constructor(
		sourceId: Common.Guid,
		version: number,
		type: EventType,
		timestamp: number
	) {
		this.sourceId = sourceId;
		this.version = version;
		this.type = type;
		this.timestamp = timestamp;
	}

	/**
	 * Returns JSON representation of this event
	 */
	public toJson(): string {
		return JSON.stringify(this);
	}
}
