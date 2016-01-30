import * as Commands from "cubitt-commands";
import { PropertySetEvent } from "./PropertySetEvent";
export declare class ConnectorPropertySetEvent extends PropertySetEvent {
    constructor(command: Commands.SetConnectorPropertyCommand, version: number);
}
