const fs = require('fs');

const buffer = fs.readFileSync("description.txt");

console.log(buffer.toString());

fs.writeFileSync("description.txt", "salut");

console.log(fs.readFileSync("description.txt").toString());

class TV {
  constructor(name){
    this.name = name;
  }

  toString(){
    return 'Super télé nommée ' + this.name
  }
}

console.log(new TV("bernard"));