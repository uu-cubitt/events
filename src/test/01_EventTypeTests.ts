import * as chai from "chai";
import {EventType} from "./../EventType";

let expect = chai.expect;

describe("EventType tests", () => {
	it("should result in true when compared to its string representation", (done) => {
		expect(EventType.ConnectorAdded).to.deep.equal("ConnectorAddedEvent");
		done();
	});
});