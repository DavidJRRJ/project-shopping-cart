require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  
  it('1 - Verifica se é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it("2 - Verifica se a função fetch é chamada com o parâmetro MLB1615760527", async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled();
  });
    
  it("3- Verifica se chamando a função com o parâmetro MLB1615760527 se o endpoint é o msm que url", async () => {
    const url = "https://api.mercadolibre.com/items/MLB1615760527"; 
    await fetchItem("MLB1615760527")
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it("4 - Verifica se a saída de fetchItem('MLB1615760527' é a mesma que a variável item)", async () => {
    const expected = await fetchItem("MLB1615760527")
    expect(expected).toEqual(item);
  });

  it("5 - Verifica se ao chamar a função sem arg se retorna o erro 'You must provide an url'", async () => {
    const expected = await fetchItem()
    expect(expected).toEqual(new Error('You must provide an url'))
});
});
