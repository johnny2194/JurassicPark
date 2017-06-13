var Park = function () {
    this.enclosure = new Map();
}

Park.prototype = {

  add: function (dino) {
      this.enclosure.set(dino, this.numberOf(dino) + 1)
  },

  numberOf: function (dino) {
    if (this.enclosure.has(dino)) {    
      return this.enclosure.get(dino)
      } else {
        return 0
    }
  },

  removeType: function (dinosaur) {
    this.enclosure.delete(dinosaur)
  },
}    


module.exports = Park
