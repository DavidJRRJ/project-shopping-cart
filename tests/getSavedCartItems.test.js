const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it("1 - Verifica se o método localstorage é chamado", () => {
    getSavedCartItems("cartItems");
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it("2 - Verifica se o método localstorage é chamado com o método 'cartitems'", () => {
    getSavedCartItems("cartItems")
    expect(localStorage.getItem).toHaveBeenCalledWith("cartItems");
  });  
});
