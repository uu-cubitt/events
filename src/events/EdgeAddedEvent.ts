import * as Commands from "cubitt-commands";
import * as Common from "cubitt-common";

import {AddedEvent} from "./AddedEvent";
import {EventType} from "../EventType";

/**
 * An event that is raised when a edge is added
 */
export class EdgeAddedEvent extends AddedEvent {
	/**
	 * @param command The command that caused the raising of this event
	 * @param version The new current version number
	 */
	constructor(
		command: Commands.AddEdgeCommand,
		version: number
	) {
		super(command, version, EventType.EdgeAdded);
		this.modelId = command.modelId;
		this.startConnectorId = command.startConnectorId;
		this.endConnectorId = command.endConnectorId;
	}

	/**
	 * The RFC4122 v4 compliant ID of the model to which the new edge belongs
	 */
	modelId: Common.Guid;

	/**
	 * The RFC4122 v4 compliant ID of the connector where the new edge starts
	 */
	startConnectorId: Common.Guid;

	/**
	 * The RFC4122 v4 compliant ID of the connector where the new edge ends
	 */
	endConnectorId: Common.Guid;
}
