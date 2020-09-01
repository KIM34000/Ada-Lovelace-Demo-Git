class TV {
  constructor(marque){
    this.marque = marque;
    this.chaine = 1;
    this.volume = 50;
  }

  augmenterVolume(niveau = 1){
    if(this.volume + niveau <= 100){
      this.volume += niveau;
    }
  }

  diminuerVolume(){
    if(this.volume - 1 >= 0){
      this.volume -= 1;
    }
  }

  changerChaine(chaine) {
    if(chaine <= 50 && chaine > 0){
      this.chaine = chaine;
    }
  }
}

const panasonic = new TV("panasonic");
console.log(panasonic.chaine);
panasonic.augmenterVolume();