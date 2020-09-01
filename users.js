class User{
  constructor(nom){
    this.nom = nom;
    this.age = 0;
  }

  status(){
    return `Je m'appelle ${this.nom}`
  }

  vieillir(){
    this.age += 1;
  }
}

module.exports = User;