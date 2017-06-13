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
}    


module.exports = Park
