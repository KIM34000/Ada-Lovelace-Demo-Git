import Personne from "./Personne";

class Promotion {
  nom: string;
  tableau: Personne[];

  constructor(nom: string, tableau: Personne[]){
    this.nom = nom;
    this.tableau = tableau;
  }

  toString(){
    return `La classe ${this.nom} contient les élèves suivants : \n${this.tableau.map((ele) => { return ele.toString()})}`
  }
}

class ABC {

}

export = { Promotion, ABC };

const prenom = 'Thomas';
const nom = "Falcone";

const obj = { prenom, nom };
const a = {
  prenom: prenom,
  nom: nom
};