"use strict";
exports.__esModule = true;
var Personne_1 = require("./models/Personne");
var Promotion_1 = require("./models/Promotion");
var eleve = new Personne_1["default"]('Falcone', 'Thomas', new Date());
var eleve2 = new Personne_1["default"]('Dupont', 'Philippa', new Date());
var tableau = [eleve, eleve2];
var rebootJs = new Promotion_1.Promotion("RebootJS", tableau);
console.log(rebootJs.toString());
var a = {
    nom: 'Falcone',
    prenom: 'Thomas',
    addresse: 'fef',
    date: new Date()
};
var nom = a.nom, prenom = a.prenom, addresse = a.addresse, date = a.date;
