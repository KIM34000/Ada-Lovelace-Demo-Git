class User{
  static last_id = 0;

  constructor(prenom, nom, email){
    User.last_id += 1;

    this.id = User.last_id;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
  }

  status(){
    return `Je m'appelle ${this.nom} ${this.prenom}`
  }
}

module.exports = User;