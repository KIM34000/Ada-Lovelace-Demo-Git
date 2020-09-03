"use strict";
var Personne = /** @class */ (function () {
    function Personne(nom, prenom, dateNaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
    }
    Personne.prototype.toString = function () {
        return this.prenom + " " + this.nom + " - " + this.dateNaissance.toString();
    };
    return Personne;
}());
module.exports = Personne;
