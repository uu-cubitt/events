import * as Commands from "cubitt-commands";
import { PropertyDeletedEvent } from "./PropertyDeletedEvent";
export declare class EdgePropertyDeletedEvent extends PropertyDeletedEvent {
    constructor(command: Commands.DeleteEdgePropertyCommand, version: number);
}
