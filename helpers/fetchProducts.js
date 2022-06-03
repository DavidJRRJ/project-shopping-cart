const fetchProducts = async (item) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  try {
  const captura = await fetch(url);
  const dados = await captura.json();
  // const resultado = dados.results;
  return dados;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
