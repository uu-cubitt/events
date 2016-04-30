import * as Common from "cubitt-common";
import * as chai from "chai";

import {EventFactory} from "./../EventFactory";
import {EventType} from "./../EventType";
import {Event} from "./../events/Event";
import {ConnectorAddedEvent} from "./../events/ConnectorAddedEvent";
import {EdgeAddedEvent} from "./../events/EdgeAddedEvent";
import {ModelAddedEvent} from "./../events/ModelAddedEvent";
import {NodeAddedEvent} from "./../events/NodeAddedEvent";
import {ConnectorDeletedEvent} from "./../events/ConnectorDeletedEvent";
import {EdgeDeletedEvent} from "./../events/EdgeDeletedEvent";
import {ModelDeletedEvent} from "./../events/ModelDeletedEvent";
import {NodeDeletedEvent} from "./../events/NodeDeletedEvent";
import {ConnectorPropertyDeletedEvent} from "./../events/ConnectorPropertyDeletedEvent";
import {EdgePropertyDeletedEvent} from "./../events/EdgePropertyDeletedEvent";
import {ModelPropertyDeletedEvent} from "./../events/ModelPropertyDeletedEvent";
import {NodePropertyDeletedEvent} from "./../events/NodePropertyDeletedEvent";
import {ConnectorPropertySetEvent} from "./../events/ConnectorPropertySetEvent";
import {EdgePropertySetEvent} from "./../events/EdgePropertySetEvent";
import {ModelPropertySetEvent} from "./../events/ModelPropertySetEvent";
import {NodePropertySetEvent} from "./../events/NodePropertySetEvent";

let expect = chai.expect;

describe("EventFactory", () => {
	it("should throw an error when provided null", (done) => {
		expect(function() { EventFactory.parse(null)}).to.throw(Error);
		done();
	});

	it("should throw an error when provided undefined", (done) => {
		expect(function() { EventFactory.parse(undefined)}).to.throw(Error);
		done();
	});

	it("should correctly parse an ConnectorAddedEvent", (done) => {
		let event: ConnectorAddedEvent = new ConnectorAddedEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid(),
			"TEST_CONNECTOR",
			{},
			Common.Guid.newGuid()
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an EdgeAddedEvent", (done) => {
		let event: EdgeAddedEvent = new EdgeAddedEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid(),
			"TEST_EDGE",
			{},
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid()
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an ModelAddedEvent", (done) => {
		let event: ModelAddedEvent = new ModelAddedEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid(),
			"TEST_MODEL",
			{}
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	/*it("should correctly parse an hierarchical AddModelCommand", (done) => {
		let command: Commands.AddModelCommand = new Commands.AddModelCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"TEST_MODEL",
			{},
			Common.Guid.newGuid()
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});*/

	it("should correctly parse an NodeAddedEvent", (done) => {
		let event: NodeAddedEvent = new NodeAddedEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid(),
			"TEST_NODE",
			{},
			Common.Guid.newGuid()
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an ConnectorDeletedEvent", (done) => {
		let event: ConnectorDeletedEvent = new ConnectorDeletedEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid()
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an EdgeDeletedEvent", (done) => {
		let event: EdgeDeletedEvent = new EdgeDeletedEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid()
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an ModelDeletedEvent", (done) => {
		let event: ModelDeletedEvent = new ModelDeletedEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid()
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an NodeDeletedEvent", (done) => {
		let event: NodeDeletedEvent = new NodeDeletedEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid()
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});	

	it("should correctly parse an ConnectorPropertyDeletedEvent", (done) => {
		let event: ConnectorPropertyDeletedEvent = new ConnectorPropertyDeletedEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid(),
			"TEST_PROPERTY"
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an EdgePropertyDeletedEvent", (done) => {
		let event: EdgePropertyDeletedEvent = new EdgePropertyDeletedEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid(),
			"TEST_PROPERTY"
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an ModelPropertyDeletedEvent", (done) => {
		let event: ModelPropertyDeletedEvent = new ModelPropertyDeletedEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid(),
			"TEST_PROPERTY"
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an NodePropertyDeletedEvent", (done) => {
		let event: NodePropertyDeletedEvent = new NodePropertyDeletedEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid(),
			"TEST_PROPERTY"
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an ConnectorPropertySetEvent", (done) => {
		let event: ConnectorPropertySetEvent = new ConnectorPropertySetEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid(),
			"TEST_PROPERTY",
			"TEST_VALUE"
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an EdgePropertySetEvent", (done) => {
		let event: EdgePropertySetEvent = new EdgePropertySetEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid(),
			"TEST_PROPERTY",
			"TEST_VALUE"
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an ModelPropertySetEvent", (done) => {
		let event: ModelPropertySetEvent = new ModelPropertySetEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid(),
			"TEST_PROPERTY",
			"TEST_VALUE"
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an NodePropertySetEvent", (done) => {
		let event: NodePropertySetEvent = new NodePropertySetEvent(
			Common.Guid.newGuid(),
			0,
			Date.now(),
			Common.Guid.newGuid(),
			"TEST_PROPERTY",
			"TEST_VALUE"
		);
		expect(function() { EventFactory.parse(JSON.parse(event.toJson())) }).to.not.throw(Error);
		done();
	});
});
