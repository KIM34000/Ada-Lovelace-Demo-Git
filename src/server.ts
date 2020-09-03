import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/usersRoutes';

const serverExpress = express();
serverExpress.use(bodyParser.json());
serverExpress.use(bodyParser.urlencoded({extended: true}));
serverExpress.set('view engine', 'ejs');

serverExpress.use("/users", usersRoutes);

serverExpress.get("/", (req: Request, res: Response) => {
  res.render("index.ejs");
});

const serveurEcoutant = serverExpress.listen(3001, () => {
  console.log("J'écoute sur 3001");
});

export = { serveurEcoutant };
