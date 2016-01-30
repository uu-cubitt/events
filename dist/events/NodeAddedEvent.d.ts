import * as Commands from "cubitt-commands";
import * as Common from "cubitt-common";
import { AddedEvent } from "./AddedEvent";
export declare class NodeAddedEvent extends AddedEvent {
    constructor(command: Commands.AddNodeCommand, version: number);
    modelId: Common.Guid;
}
