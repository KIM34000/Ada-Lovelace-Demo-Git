import Personne from "./models/Personne";
import { Promotion } from "./models/Promotion";

const eleve = new Personne('Falcone', 'Thomas', new Date());
const eleve2 = new Personne('Dupont', 'Philippa', new Date());

const tableau: Personne[] = [eleve, eleve2];
const rebootJs = new Promotion("RebootJS", tableau);

console.log(rebootJs.toString());

const a = {
  nom: 'Falcone',
  prenom: 'Thomas',
  addresse: 'fef',
  date: new Date()
}

const { nom, prenom, addresse, date } = a

