import * as Commands from "cubitt-commands";
import { AddedEvent } from "./AddedEvent";
export declare class ModelAddedEvent extends AddedEvent {
    constructor(command: Commands.AddModelCommand, version: number);
}
