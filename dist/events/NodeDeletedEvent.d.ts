import * as Commands from "cubitt-commands";
import { DeletedEvent } from "./DeletedEvent";
export declare class NodeDeletedEvent extends DeletedEvent {
    constructor(command: Commands.DeleteNodeCommand, version: number);
}
