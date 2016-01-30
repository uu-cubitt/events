import * as Commands from "cubitt-commands";
import { PropertyDeletedEvent } from "./PropertyDeletedEvent";
export declare class ConnectorPropertyDeletedEvent extends PropertyDeletedEvent {
    constructor(command: Commands.DeleteConnectorPropertyCommand, version: number);
}
