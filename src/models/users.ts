class User{
  static last_id = 0;

  id: string;
  nom: string;
  prenom: string;
  email: string;

  constructor(prenom: string, nom: string, email: string){
    User.last_id += 1;

    this.id = User.last_id.toString();
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
  }

  status(){
    return `Je m'appelle ${this.nom} ${this.prenom}`
  }
}

export = User;