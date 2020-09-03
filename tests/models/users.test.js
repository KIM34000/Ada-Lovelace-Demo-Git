const User = require('../../src/models/users');

const user = new User("Thomas");

describe('User functions', () => {
  it("renvoie le nom de l'utilisateur", () => {
    expect(user.nom).toBe("Thomas");
  })

  it("returns the status of the user", () => {
    expect(user.status()).toBe("Je m'appelle Thomas");
  })
})
