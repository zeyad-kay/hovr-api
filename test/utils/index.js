/* eslint-disable no-undef */
const expect = require("chai").expect;
let { capitalize, sortArray } = require("../../src/utils");

describe("Utility functions", () => {
    it("should capitalize string", () => {
        expect(capitalize("miKe")).to.equal("Mike");
        expect(capitalize(" mark")).to.equal("Mark");
    });
    it("should sort an array according to specific order array", () => {
        let arr = [30, 40, 10, 20];
        let order = [3, 2, 1, 0];
        expect(sortArray(arr, order)).to.deep.equal([20, 10, 40, 30]);
    });
    it("should throw an error when given an out of size index or array", () => {
        let arr = [30, 40, 10, 20];
        let order = [2, 1, 0];
        expect(sortArray.bind(this, arr, order)).to.throw();
        order = [8, 2, 1, 0];
        expect(sortArray.bind(this, arr, order)).to.throw();
    });
});
