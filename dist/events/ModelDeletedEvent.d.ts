import * as Commands from "cubitt-commands";
import { DeletedEvent } from "./DeletedEvent";
export declare class ModelDeletedEvent extends DeletedEvent {
    constructor(command: Commands.DeleteModelCommand, version: number);
}
