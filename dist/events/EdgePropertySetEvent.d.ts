import * as Commands from "cubitt-commands";
import { PropertySetEvent } from "./PropertySetEvent";
export declare class EdgePropertySetEvent extends PropertySetEvent {
    constructor(command: Commands.SetEdgePropertyCommand, version: number);
}
