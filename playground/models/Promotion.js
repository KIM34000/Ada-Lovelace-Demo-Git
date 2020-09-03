"use strict";
var Promotion = /** @class */ (function () {
    function Promotion(nom, tableau) {
        this.nom = nom;
        this.tableau = tableau;
    }
    Promotion.prototype.toString = function () {
        return "La classe " + this.nom + " contient les \u00E9l\u00E8ves suivants : \n" + this.tableau.map(function (ele) { return ele.toString(); });
    };
    return Promotion;
}());
var ABC = /** @class */ (function () {
    function ABC() {
    }
    return ABC;
}());
var prenom = 'Thomas';
var nom = "Falcone";
var obj = { prenom: prenom, nom: nom };
var a = {
    prenom: prenom,
    nom: nom
};
module.exports = { Promotion: Promotion, ABC: ABC };
