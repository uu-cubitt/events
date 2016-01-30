import * as Commands from "cubitt-commands";
import { DeletedEvent } from "./DeletedEvent";
export declare class EdgeDeletedEvent extends DeletedEvent {
    constructor(command: Commands.DeleteEdgeCommand, version: number);
}
