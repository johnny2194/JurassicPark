var assert = require("assert")
var Dino = require("../dino.js")

describe("Dino", function () {
    var dino;
    beforeEach(function () {
        dino = new Dino("Trex", 2);
    })

    it("has type", function () {
        assert.strictEqual(dino.type, "Trex");
    })

    it("has averageOffspringPerYear", function () {
        assert.strictEqual(dino.averageOffspringPerYear, 2);
    });
});