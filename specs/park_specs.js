var assert = require("assert")
var Park = require("../park.js")
var Dino = require("../dino.js")

describe("Park", function () {
    var park
    var velociraptor, trex, allosaurus
    beforeEach(function () {
        park = new Park();
        velociraptor = new Dino("Velociraptor", 2);
        trex = new Dino("Trex", 3);
        allosaurus = new Dino("Allosaurus", 5);
    })

    it("starts with empty enclosure", function () {
        assert.strictEqual(park.enclosure.size, 0);
    });

    it("can add dinosaur", function () {
           park.add(velociraptor)
           assert.strictEqual(park.enclosure.has(velociraptor), true)
       })

    it("can add two types", function () {
       park.add(velociraptor)
       park.add(trex)
       assert.strictEqual(park.enclosure.has(velociraptor), true)
       assert.strictEqual(park.enclosure.has(trex), true)
     });
    
    it("can get number of dinosaur type", function () {
           park.add(velociraptor)
           assert.strictEqual(park.numberOf(velociraptor), 1)
       })
});        
