const MAXIMUM_FITNESS = 10;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.feed = 3;
    // this.growUp = function() {
    //   this.age +=1;
    //}
 };
 Pet.prototype.growUp = function() {
  this.age += 1;
  this.hunger += 5;
 };
 Pet.prototype.walk = function() {

    if ((this.fitness + 4) <= 10 ) {
        this.fitness += 4;
      } else {
        this.fitness = 10;
      }
    };
    
//   const pet = {
//       name: ‘Fido’,
//       age: 0,
//  };
//  const pet = {};
//  pet.name = ‘Fido’; 
 const fido = new Pet('Fido');
 const rex = new Pet('Rex');
 module.exports = Pet;
 