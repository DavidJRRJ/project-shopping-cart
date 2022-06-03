require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  
  it('1 - Verifica se é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('2 - Testa se ao chamar a função fetch com o parâmetro computador se retorna o msm endpoint', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('3 - Testa se a função com o parâmetro computador tem o mesmo retorno que computadorSearch', async () => {
    const expected = await fetchProducts("computador")
    expect(expected).toEqual(computadorSearch);
  });

  it('4 - Testa se a função fetch foi chamada usando o parâmetro computador', async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalled();
  });

  it('5 - Testa se ao chamar a função sem argumento se retorna o erro You must provide an url', async () => {
    const expected = await fetchProducts();
    expect(expected).toEqual(new Error('You must provide an url'));
  })

});
