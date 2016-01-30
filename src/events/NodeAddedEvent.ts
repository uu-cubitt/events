import * as Commands from "cubitt-commands"
import * as Common from "cubitt-common";

import {AddedEvent} from "./AddedEvent";
import {EventType} from "../EventType";

/**
 * An event that was raised when a node was added
 */
export class NodeAddedEvent extends AddedEvent {
	/**
	 * @param command The command that caused the raising of this event
	 * @param version The new current version number
	 */
	constructor(
		command: Commands.AddNodeCommand,
		version: number
	) {
		super(command, version, EventType.NodeAdded);
		this.modelId = command.modelId;
	}

	/**
	 * The RFC4122 v4 compliant ID of the model to which the new node belongs
	 */
	modelId: Common.Guid;
}
