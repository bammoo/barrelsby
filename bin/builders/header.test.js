"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestUtilities = require("../testUtilities");
const header_1 = require("./header");
describe("builder/header module has a", () => {
    describe("addHeaderPrefix function that", () => {
        it("should add a header prefix to the specified string", () => {
            TestUtilities.assertMultiLine(header_1.addHeaderPrefix("Test Content"), `/**
 * @file Automatically generated by barrelsby.
 */

Test Content`);
        });
    });
});
//# sourceMappingURL=header.test.js.map