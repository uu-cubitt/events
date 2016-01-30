import * as Commands from "cubitt-commands";
import { PropertyDeletedEvent } from "./PropertyDeletedEvent";
export declare class ModelPropertyDeletedEvent extends PropertyDeletedEvent {
    constructor(command: Commands.DeleteModelPropertyCommand, version: number);
}
