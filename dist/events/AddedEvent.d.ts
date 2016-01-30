import * as Commands from "cubitt-commands";
import * as Common from "cubitt-common";
import { Event } from "./Event";
import { EventType } from "../EventType";
export declare abstract class AddedEvent extends Event {
    constructor(command: Commands.AddCommand, version: number, type: EventType);
    elementId: Common.Guid;
    elementType: string;
    elementProperties: Common.Dictionary<any>;
}
