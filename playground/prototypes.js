const animal = {
  nom: null,
  carte: "1111",
  manger: function(nourriture) {
    return `Merci, j'adore ${nourriture}`;
  },
  status: function() {
    return `Nom : ${this.nom}. J'ai faim`
  }
}

const toto = Object.create(animal);
toto.nom = "toto";
console.log(toto.status());

const tata = Object.create(animal);
tata.nom = "tata";

console.log(toto.nom);
console.log(tata.nom);
console.log(toto.manger("le pain"));
console.log(tata.manger("le pain"));

console.log(tata.__proto__.__proto__);