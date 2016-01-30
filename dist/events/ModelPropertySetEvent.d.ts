import * as Commands from "cubitt-commands";
import { PropertySetEvent } from "./PropertySetEvent";
export declare class ModelPropertySetEvent extends PropertySetEvent {
    constructor(command: Commands.SetModelPropertyCommand, version: number);
}
