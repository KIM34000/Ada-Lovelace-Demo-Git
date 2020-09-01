class User {
  constructor(prenom, nom, email){
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
  }

  status() {
    return `Je m'appelle ${this.prenom} ${this.nom} et suis joignable a l'adresse ${this.email}`;
  }
}

let thomas = new User('Thomas', 'Falcone', 'thomas.falcone@mail.com');
console.log(thomas.prenom);