import * as Commands from "cubitt-commands";
import * as Common from "cubitt-common";

import {EventType} from "../EventType";

/**
 * Base event
 */
export abstract class Event {
	/**
	 * @param command The the command that caused this event
	 * @param version The new current version number
	 * @param type The type of this event
	 */
	constructor(
		command: Commands.Command,
		/**
		 * The new current version number, it also serves as the ID for this event.
		 */
		public version: number,
		/**
		 * The type of this event
		 */
		public type: EventType
	) {
		this.sourceId = command.id;
		this.timestamp = Date.now();
	}

	/**
	 * The RFC4122 v4 compliant ID of the command that caused this event
	 */
	sourceId: Common.Guid;

	/**
	 * The timestamp for the moment this event was created in milliseconds elapsed since 1 January 1970 00:00:00 UTC
	 */
	timestamp: number;

	/**
	 * Returns JSON representation of this event
	 */
	toJson(): string {
		return JSON.stringify(this);
	}
}
