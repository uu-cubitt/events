import * as Commands from "cubitt-commands";

import {DeletedEvent} from "./DeletedEvent";
import {EventType} from "../EventType";

/**
 * An event that is raised when a connector is deleted
 */
export class ConnectorDeletedEvent extends DeletedEvent {
	/**
	 * @param command The command that caused the raising of this event
	 * @param version The new current version number
	 */
	constructor(
		command: Commands.DeleteConnectorCommand,
		version: number
	) {
		super(command, version, EventType.ConnectorDeleted);
	}
}
