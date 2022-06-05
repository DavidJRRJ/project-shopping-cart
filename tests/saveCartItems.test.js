const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it("1 - Verifica se com o parâmetro <ol><li>Item</li></ol> o método localStorage é chamado", () => {
    saveCartItems("<ol><li>Item</li></ol>");
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it("2 - Verifica se com o parâmetro <ol><li>Item</li></ol> o método localStorage é chamado junto com 'caritems'", () => {
    saveCartItems("<ol><li>Item</li></ol>")
    expect(localStorage.setItem).toHaveBeenCalledWith("cartItems","<ol><li>Item</li></ol>");
  });
});
