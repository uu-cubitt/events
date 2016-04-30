import * as chai from "chai";
import {EventType} from "./../EventType";

let expect = chai.expect;

describe("EventType", () => {
	it("ConnectorAdded should result in true when compared to its string representation", (done) => {
		expect(EventType.ConnectorAdded).to.deep.equal("ConnectorAddedEvent");
		done();
	});
	it("EdgeAdded should result in true when compared to its string representation", (done) => {
		expect(EventType.EdgeAdded).to.deep.equal("EdgeAddedEvent");
		done();
	});
	it("ModelAdded should result in true when compared to its string representation", (done) => {
		expect(EventType.ModelAdded).to.deep.equal("ModelAddedEvent");
		done();
	});
	it("NodeAdded should result in true when compared to its string representation", (done) => {
		expect(EventType.NodeAdded).to.deep.equal("NodeAddedEvent");
		done();
	});
	it("ConnectorDeleted should result in true when compared to its string representation", (done) => {
		expect(EventType.ConnectorDeleted).to.deep.equal("ConnectorDeletedEvent");
		done();
	});
	it("EdgeDeleted should result in true when compared to its string representation", (done) => {
		expect(EventType.EdgeDeleted).to.deep.equal("EdgeDeletedEvent");
		done();
	});
	it("ModelDeleted should result in true when compared to its string representation", (done) => {
		expect(EventType.ModelDeleted).to.deep.equal("ModelDeletedEvent");
		done();
	});
	it("NodeDeleted should result in true when compared to its string representation", (done) => {
		expect(EventType.NodeDeleted).to.deep.equal("NodeDeletedEvent");
		done();
	});
	it("ConnectorPropertyDeleted should result in true when compared to its string representation", (done) => {
		expect(EventType.ConnectorPropertyDeleted).to.deep.equal("ConnectorPropertyDeletedEvent");
		done();
	});
	it("EdgePropertyDeleted should result in true when compared to its string representation", (done) => {
		expect(EventType.EdgePropertyDeleted).to.deep.equal("EdgePropertyDeletedEvent");
		done();
	});
	it("ModelPropertyDeleted should result in true when compared to its string representation", (done) => {
		expect(EventType.ModelPropertyDeleted).to.deep.equal("ModelPropertyDeletedEvent");
		done();
	});
	it("NodePropertyDeleted should result in true when compared to its string representation", (done) => {
		expect(EventType.NodePropertyDeleted).to.deep.equal("NodePropertyDeletedEvent");
		done();
	});
	it("ConnectorPropertySet should result in true when compared to its string representation", (done) => {
		expect(EventType.ConnectorPropertySet).to.deep.equal("ConnectorPropertySetEvent");
		done();
	});
	it("EdgePropertySet should result in true when compared to its string representation", (done) => {
		expect(EventType.EdgePropertySet).to.deep.equal("EdgePropertySetEvent");
		done();
	});
	it("ModelPropertySet should result in true when compared to its string representation", (done) => {
		expect(EventType.ModelPropertySet).to.deep.equal("ModelPropertySetEvent");
		done();
	});
	it("NodePropertySet should result in true when compared to its string representation", (done) => {
		expect(EventType.NodePropertySet).to.deep.equal("NodePropertySetEvent");
		done();
	});
})
