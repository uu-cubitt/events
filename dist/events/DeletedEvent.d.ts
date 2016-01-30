import * as Commands from "cubitt-commands";
import * as Common from "cubitt-common";
import { Event } from "./Event";
import { EventType } from "../EventType";
export declare abstract class DeletedEvent extends Event {
    constructor(command: Commands.DeleteCommand, version: number, type: EventType);
    elementId: Common.Guid;
}
