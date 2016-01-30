import * as Commands from "cubitt-commands";
import { DeletedEvent } from "./DeletedEvent";
export declare class ConnectorDeletedEvent extends DeletedEvent {
    constructor(command: Commands.DeleteConnectorCommand, version: number);
}
