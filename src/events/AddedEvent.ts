import * as Common from "cubitt-common";

import {Event} from "./Event";
import {EventType} from "./../EventType";

/**
 * Base event for any added element.
 */
export abstract class AddedEvent extends Event {
	/**
	 * The RFC4122 v4 compliant ID of the new element.
	 */
	public elementId: Common.Guid;

	/**
	 * The type of the new element.
	 */
	public elementType: string;

	/*
	 * The properties of the new element.
	 */
	public elementProperties: Common.Dictionary<any>;

	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event.
	 * @param version The new current version number.
	 * @param type The type of this event.
	 * @param elementId The RFC4122 v4 compliant ID of the new element.
	 * @param elementType The type of the new element.
	 * @param elementProperties The properties of the new element.
	 */
	constructor(
		sourceId: Common.Guid,
		version: number,
		type: EventType,
		elementId: Common.Guid,
		elementType: string,
		elementProperties: Common.Dictionary<any>
	) {
		super(sourceId, version, type);
		this.elementId = elementId;
		this.elementType = elementType;
		this.elementProperties = elementProperties;
	}
}
