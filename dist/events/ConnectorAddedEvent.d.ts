import * as Commands from "cubitt-commands";
import * as Common from "cubitt-common";
import { AddedEvent } from "./AddedEvent";
export declare class ConnectorAddedEvent extends AddedEvent {
    constructor(command: Commands.AddConnectorCommand, version: number);
    nodeId: Common.Guid;
}
