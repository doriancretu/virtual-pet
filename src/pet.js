

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.growUp = function() {
        this.age += 1;
      };
};
const pet = {
    name: 'Fido'
  };
  /* or const pet = {};
   pet.name = 'Fido';*/

module.exports = Pet;