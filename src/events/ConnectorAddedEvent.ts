import * as Commands from "cubitt-commands";
import * as Common from "cubitt-common";

import {AddedEvent} from "./AddedEvent";
import {EventType} from "../EventType";

/**
 * An event that is raised when a connector is added
 */
export class ConnectorAddedEvent extends AddedEvent {
	/**
	 * @param command The command that caused the raising of this event
	 * @param version The new current version number
	 */
	constructor(
		command: Commands.AddConnectorCommand,
		version: number
	) {
		super(command, version, EventType.ConnectorAdded);
		this.nodeId = command.nodeId;
	}

	/**
	 * The RFC4122 v4 compliant ID of the node to which the new connector belongs
	 */
	nodeId: Common.Guid;
}
