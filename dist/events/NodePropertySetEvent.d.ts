import * as Commands from "cubitt-commands";
import { PropertySetEvent } from "./PropertySetEvent";
export declare class NodePropertySetEvent extends PropertySetEvent {
    constructor(command: Commands.SetNodePropertyCommand, version: number);
}
