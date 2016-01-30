import * as Commands from "cubitt-commands";

import {PropertySetEvent} from "./PropertySetEvent";
import {EventType} from "../EventType";

/**
 * An event that is raised when a property of a connector is set
 */
export class ConnectorPropertySetEvent extends PropertySetEvent {
	/**
	 * @param sourceId The RFC4122 v4 compliant ID of the command that caused this event
	 * @param version The new current version number
	 * @param type The type of this event
	 */
	constructor(
		command: Commands.SetConnectorPropertyCommand,
		version: number
	) {
		super(command, version, EventType.ConnectorPropertySet);
	}
}
