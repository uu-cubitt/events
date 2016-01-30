import * as Commands from "cubitt-commands";
import * as Common from "cubitt-common";
import { AddedEvent } from "./AddedEvent";
export declare class EdgeAddedEvent extends AddedEvent {
    constructor(command: Commands.AddEdgeCommand, version: number);
    modelId: Common.Guid;
    startConnectorId: Common.Guid;
    endConnectorId: Common.Guid;
}
