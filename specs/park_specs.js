var assert = require("assert")
var Park = require("../park.js")
var Dino = require("../dino.js")

describe("Park", function () {
    var park
    var velociraptor, trex, allosaurus
    beforeEach(function () {
        park = new Park();
        velociraptor = new Dino("Velociraptor", 2);
        tyrannosaurus = new Dino("Trex", 3);
        allosaurus = new Dino("Allosaurus", 5);
    })

    it("starts with empty enclosure", function () {
        assert.strictEqual(park.enclosure.length, 0);
    });
});    
