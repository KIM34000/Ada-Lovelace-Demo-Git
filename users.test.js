const User = require('./users');

const user = new User("Thomas");

describe('User functions', () => {
  it("renvoie le nom de l'utilisateur", () => {
    expect(user.nom).toBe("Thomas");
  })

  it("returns the status of the user", () => {
    expect(user.status()).toBe("Je m'appelle Thomas");
  })

  it("renvoie l'age d'un utilateur", () => {
    expect(user.age).toBe(0);
  })

  it("renvoie l'age incrémenté de l'utilisateur", () => {
    expect(user.age).toBe(0);
    user.vieillir();
    expect(user.age).toBe(1);
  })
})
