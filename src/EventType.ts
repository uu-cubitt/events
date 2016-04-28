/**
 * An enum of all types of events.
 */
export type EventType = "ConnectorAddedEvent" | "EdgeAddedEvent" | "ModelAddedEvent" | "NodeAddedEvent" | "ConnectorDeletedEvent" | "EdgeDeletedEvent" | "ModelDeletedEvent" | "NodeDeletedEvent" | "ConnectorPropertySetEvent" | "EdgePropertySetEvent" | "ModelPropertySetEvent" | "NodePropertySetEvent" | "ConnectorPropertyDeletedEvent" | "EdgePropertyDeletedEvent" | "ModelPropertyDeletedEvent" | "NodePropertyDeletedEvent";

/**
 * An enum of all types of events.
 */
export const EventType: {
	ConnectorAdded: EventType,
	EdgeAdded: EventType,
	ModelAdded: EventType,
	NodeAdded: EventType,
	ConnectorDeleted: EventType,
	EdgeDeleted: EventType,
	ModelDeleted: EventType,
	NodeDeleted: EventType,
	ConnectorPropertySet: EventType,
	EdgePropertySet: EventType,
	ModelPropertySet: EventType,
	NodePropertySet: EventType,
	ConnectorPropertyDeleted: EventType,
	EdgePropertyDeleted: EventType,
	ModelPropertyDeleted: EventType,
	NodePropertyDeleted: EventType
} = {
	ConnectorAdded: "ConnectorAddedEvent" as EventType,
	EdgeAdded: "EdgeAddedEvent" as EventType,
	ModelAdded: "ModelAddedEvent" as EventType,
	NodeAdded: "NodeAddedEvent" as EventType,
	ConnectorDeleted: "ConnectorDeletedEvent" as EventType,
	EdgeDeleted: "EdgeDeletedEvent" as EventType,
	ModelDeleted: "ModelDeletedEvent" as EventType,
	NodeDeleted: "NodeDeletedEvent" as EventType,
	ConnectorPropertySet: "ConnectorPropertySetEvent" as EventType,
	EdgePropertySet: "EdgePropertySetEvent" as EventType,
	ModelPropertySet: "ModelPropertySetEvent" as EventType,
	NodePropertySet: "NodePropertySetEvent" as EventType,
	ConnectorPropertyDeleted: "ConnectorPropertyDeletedEvent" as EventType,
	EdgePropertyDeleted: "EdgePropertyDeletedEvent" as EventType,
	ModelPropertyDeleted: "ModelPropertyDeletedEvent" as EventType,
	NodePropertyDeleted: "NodePropertyDeletedEvent" as EventType
};
