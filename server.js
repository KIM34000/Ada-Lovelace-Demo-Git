const http = require('http');
const express = require('express');
const User = require('./users');
const bodyParser = require('body-parser')

// const gestionnaireRequetes = (requete, reponse) => {
//   const url = requete.url;
//   console.log(`J'ai reçu une requête pour ${url}`);

//   if(url === "/"){
//     reponse.statusCode = 200;
//     reponse.write("Bienvenue sur notre site");
//   } else if (url === "/users"){
//     if(requete.method === "GET"){
//       reponse.statusCode = 200;
//       reponse.write("Vous trouverez ici une liste de user");
//     } else if (requete.method === "POST"){
//       reponse.statusCode = 200;
//       reponse.write("Vous allez créer un User");
//     } else {
//       reponse.statusCode = 404;
//       reponse.write("Je ne connais pas ce verbe");
//     }
//   } else {
//     reponse.statusCode = 404;
//     reponse.write("Nous avons uniquement une page index, pas de page user");
//   }
//   reponse.end();
// }

// const server = http.createServer(gestionnaireRequetes)

// server.listen(3000, () => {
//   console.log("Je vais écouter les requêtes entrantes sur le port 3000");
// });

// Avec Express
const userExistants = [
  new User('Thomas', 'Falcone', 'thomas.falcone@mail.com'),
  new User('Philippa', 'Dupont', 'philippa.dupont@mail.com')
]

const serverExpress = express();
serverExpress.use(bodyParser.json());
serverExpress.use(bodyParser.urlencoded({extended: true}));
serverExpress.set('view engine', 'ejs');

serverExpress.get("/users/:userId", (req, res) => {
    // http://localhost:3000/users/1

  const userId = req.params["userId"];
  console.log(`Le client veut les infos du user ${req.params["userId"]}`);

  // Verifier que le userID est bien un nombre (eviter /users/toto)

  const user = userExistants.find((user) => {
    return user.id == userId
  });

  if(user === undefined){
    res.status(404).send("Utilisateur non trouvé");
  } else {
    // res.status(200).send(user);
    res.render('user.ejs', { user: user });
  }
});
serverExpress.get("/users", (request, response) => {
  response.status(200).send("Voici la liste des users");
});
serverExpress.get("/", (req, res) => {
  res.render("index.ejs");
});

serverExpress.post("/users", (request, response) => {
  const prenom = request.body["prenom"];
  const nom = request.body["nom"];
  const email = request.body["email"];

  console.log(request.body);
  if(prenom == undefined || nom == undefined){
    response.status(400).send("Il manque le prenom ou le nom");
    return;
  }

  const user = new User(prenom, nom, email);
  userExistants.push(user);
  response.status(201).send("Utilisateur créé");
});

serverExpress.listen(3000, () => {
  console.log("J'écoute sur 3000");
});

