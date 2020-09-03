class Personne {
  nom: string;
  prenom: string;
  dateNaissance: Date;

  constructor(nom: string, prenom: string, dateNaissance: Date){
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
  }

  toString(){
    return `${this.prenom} ${this.nom} - ${this.dateNaissance.toString()}`
  }
}

export = Personne;