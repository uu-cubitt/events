import * as Commands from "cubitt-commands";
import { PropertyDeletedEvent } from "./PropertyDeletedEvent";
export declare class NodePropertyDeletedEvent extends PropertyDeletedEvent {
    constructor(command: Commands.DeleteNodePropertyCommand, version: number);
}
