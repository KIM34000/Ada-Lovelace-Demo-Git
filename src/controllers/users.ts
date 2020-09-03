import User from "../models/users";

let userExistants = [
  new User('Thomas', 'Falcone', 'thomas.falcone@mail.com'),
  new User('Philippa', 'Dupont', 'philippa.dupont@mail.com')
]

const findUser = (userId: string) => {
  return userExistants.find((user) => {
    return user.id == userId
  });
}

function createUser(prenom: string, nom: string, email: string){
  const user = new User(prenom, nom, email);
  userExistants.push(user);
}

function deleteUser(userToDelete: User){
  userExistants = userExistants.filter((user) => {
    return user.id != userToDelete.id
  });
}

export = {
  findUser,
  createUser,
  deleteUser
}