class Animal {
  constructor(nom, race){
    this.race = race;
    this.nom = nom;
    this.age = 0;
  }

  manger(nourriture){
    return `Merci j'adore ${nourriture}`;
  }
}

class Canard extends Animal {
  constructor(nom){
    super(nom, "canard");
  }

  voler(){
    console.log("Je vole Jack");
  }
}

const toto = new Canard("toto");
console.log(toto.race);
toto.voler();
console.log(toto.manger("le pain"));

const tata = new Animal("tata", "crocodile");
tata.voler();