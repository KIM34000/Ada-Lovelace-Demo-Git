import { Request, Response, Router } from 'express';
import userController from '../controllers/users';
const router = Router();

router.get("/:userId", (req: Request, res: Response) => {
  const userId = req.params["userId"];
  console.log(`Le client veut les infos du user ${req.params["userId"]}`);

  // Verifier que le userID est bien un nombre (eviter /users/toto)

  const user = userController.findUser(userId);

  if(user === undefined){
    res.status(404).send("Utilisateur non trouvé");
  } else {
    // res.status(200).send(user);
    res.render('user.ejs', { user: user });
  }
});

router.get("/", (request: Request, response: Response) => {
  response.status(200).send("Voici la liste des users");
});

router.post("/", (request: Request, response: Response) => {
  const prenom = request.body["prenom"];
  const nom = request.body["nom"];
  const email = request.body["email"];

  console.log(request.body);
  if(prenom == undefined || nom == undefined){
    response.status(400).send("Il manque le prenom ou le nom");
    return;
  }

  userController.createUser(prenom, nom, email);

  response.status(201).send("Utilisateur créé");
});

router.patch("/:userId", (req: Request, res: Response) => {
  const prenom = req.body["prenom"];
  const nom = req.body["nom"];
  const email = req.body["email"];

  const userId = req.params["userId"];

  const user = userController.findUser(userId);

  // pas de user
  if(!user) { res.status(404).send("Utilisateur non trouvé"); return; }
  // pas d'info dans le body
  if(!prenom && !nom && !email) { res.status(400).send("Il me faut au moins un prenom, un nom ou un email") }

  if(nom !== undefined) { // if(!nom) { user.nom = nom }
    user.nom = nom;
  }
  user.prenom = prenom ? prenom : user.prenom;
  user.email = email || user.email;

  res.status(200).send("Utilisateur mis à jour")
});

router.delete("/:userId", (req: Request, res: Response) => {
  const userId = req.params["userId"];

  const user = userController.findUser(userId);
  if(!user) { res.status(404).send("Utilisateur non trouvé"); return; }

  userController.deleteUser(user);

  res.status(200).send("Utilisateur Supprimé")
});

export = router;