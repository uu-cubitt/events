import * as Commands from "cubitt-commands";
import * as Common from "cubitt-common";
import { EventType } from "../EventType";
export declare abstract class Event {
    version: number;
    type: EventType;
    constructor(command: Commands.Command, version: number, type: EventType);
    sourceId: Common.Guid;
    timestamp: number;
    toJson(): string;
}
